document.addEventListener("DOMContentLoaded", () => {
    const matchesDiv = document.getElementById("matches");
    const refreshButton = document.getElementById("refresh");
    const liveOnlyCheckbox = document.getElementById("liveOnly");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const shareButton = document.getElementById("shareMatchDetails");
    const favouritesOnlyCheckbox = document.getElementById("favouritesOnly");
    const matchTypeSelect = document.getElementById("matchTypeSelect");
    const loader=document.getElementById("loader");
    const loaderText=document.getElementById("loading-text");
    loader.style.display="inline-block"

    loaderText.innerHTML="Loading Matches ..."
  
    // Modal elements
    const modal = document.getElementById("matchModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDetails = document.getElementById("modalDetails");
    const closeModal = document.querySelector(".close");
    const favouriteButton = document.getElementById("favouriteButton");
  
    const apiUrl = "https://api.cricapi.com/v1/currentMatches?apikey=eb72965c-5521-49ea-8130-7f38918d1764&offset=0";
  
    // Load cached matches if available
    function loadCachedMatches() {
    
      console.log("Inside loadCachedMatches");
      const cachedData = localStorage.getItem("matches");
      return cachedData ? JSON.parse(cachedData) : null;
    }
  
    // Save matches to cache
    function cacheMatches(matches) {
        const timestamp = new Date();
        matches={...matches,timestamp}
      localStorage.setItem("matches", JSON.stringify(matches));
    }
  
    // Load favourites from localStorage
    function loadFavourites() {
      const favourites = localStorage.getItem("favourites");
      return favourites ? JSON.parse(favourites) : [];
    }
  
    // Save favourites to localStorage
    function saveFavourites(favourites) {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  
    // Calculate countdown for matches
    function calculateCountdown(matchDateTime) {
      const matchTime = new Date(matchDateTime).getTime();
      const currentTime = new Date().getTime();
      const timeDifference = matchTime - currentTime;
  
      if (timeDifference <= 0) {
        return  "Match has started";
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      return `Time Remaining : ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    // Fetch matches from the API
    async function fetchMatches() {
      try {

        var cache_data=loadCachedMatches();
        var matchData=[];
        console.log("cache_data",cache_data);
        if(cache_data && cache_data.data.length>0 ){
          if(new Date(cache_data.timestamp).getDate() == new Date().getDate()){
             console.log("Show cache data");
             matchData=cache_data

          }  else{
            const response = await fetch(apiUrl);
             matchData = await response.json();
             console.log("matchData",matchData);
            cacheMatches(matchData);
          }
        }
        else{
          const response = await fetch(apiUrl);
           matchData = await response.json();
          cacheMatches(matchData);
        }


        console.log("matchData",matchData);

        loader.style.display="none"
        matchesDiv.style.display="block"
        matchesDiv.innerHTML = "";

        
  
        if (!matchData.data || matchData.data.length === 0) {
          matchesDiv.innerHTML = "<p>No matches available</p>";
          return;
        }
  
        const showLiveOnly = liveOnlyCheckbox.checked;
        const selectedMatchType = matchTypeSelect.value;
        const showFavouritesOnly = favouritesOnlyCheckbox.checked;
        const favourites = loadFavourites();
  
        let filteredMatches = matchData.data;
  
        // Filter live matches if the "Live Only" checkbox is checked
        if (showLiveOnly) {
          filteredMatches = filteredMatches.filter((match) => !match.matchEnded);
        }

        if (selectedMatchType !== "all") {
            filteredMatches = filteredMatches.filter(
              (match) => match.matchType === selectedMatchType
            );
          }
  
        // Filter only favourite matches if "Favourites Only" checkbox is checked
        if (showFavouritesOnly) {
          filteredMatches = filteredMatches.filter((match) =>
            favourites.includes(match.id)
          );
        }
  
        // Display a message if no matches fit the current filters
        if (filteredMatches.length === 0) {
          matchesDiv.innerHTML = showFavouritesOnly
            ? "<p>No favourite matches available</p>"
            : "<p>No live matches available</p>";
          return;
        }
  
        filteredMatches.forEach((match) => {
          const matchElement = document.createElement("div");
          matchElement.classList.add("match");
  
          const teams = `
              <div class="teams">
                <div class="team">
                  <img src="${match.teamInfo[0].img}" alt="${match.teamInfo[0].name}" />
                  <span>${match.teamInfo[0].name}</span>
                </div>
                <span>vs</span>
                <div class="team">
                  <img src="${match.teamInfo[1].img}" alt="${match.teamInfo[1].name}" />
                  <span>${match.teamInfo[1].name}</span>
                </div>
              </div>`;
  
          matchElement.innerHTML = `
              <h3>${match.name}</h3>
              ${teams}
              <div class="countdown" data-date="${
                match.date
              }">${calculateCountdown(match.date)}</div>
              <button class="viewDetails">View Details</button>
            `;
  
          matchesDiv.appendChild(matchElement);
  
          // Add event listener for detailed view
          matchElement
            .querySelector(".viewDetails")
            .addEventListener("click", () => {
              modal.style.display = "block";
              modalTitle.textContent = match.name;
              modalDetails.innerHTML = `
                <div><strong>Status:</strong> ${match.status}</div>
                <div><strong>Venue:</strong> ${match.venue}</div>
                <div><strong>Match Type:</strong> ${match.matchType ? match.matchType.toUpperCase() : ""}</div>
                <div><strong>Date:</strong> ${new Date(
                  match.date
                ).toDateString()}</div>
                <div><strong>Teams:</strong> ${match.teamInfo[0].name} vs ${match.teamInfo[1].name}</div>
              
              `;



  
              favouriteButton.dataset.matchId = match.id;
  
              // Update the favourite button's text and class based on the current match's favourite status
              if (favourites.includes(match.id)) {
                favouriteButton.textContent = "Remove from Favourites";
                favouriteButton.classList.add("favourited");
              } else {
                favouriteButton.textContent = "Add to Favourites";
                favouriteButton.classList.remove("favourited");
              }
            });
  
          // Function to update countdown every second
          function updateCountdown() {
            const countdownElement = matchElement.querySelector(".countdown");
            countdownElement.textContent = calculateCountdown(
              countdownElement.dataset.date
            );
          }
          updateCountdown(); // Set initial value
          setInterval(updateCountdown, 1000); // Update every second
        });
      } catch (error) {
        console.error("Failed to fetch match data", error);
        matchesDiv.innerHTML = "<p>Failed to load match data</p>";
      }
    }


    matchTypeSelect.addEventListener("change", () => {
      loader.style.display="inline-block"
      matchesDiv.style.display="none"
      loaderText.innerHTML=`Filtering data ...`
      setTimeout(()=> fetchMatches(),2000);
      });
  
    // Handle favourite button click dynamically
    favouriteButton.addEventListener("click", () => {
      const matchId = favouriteButton.dataset.matchId;
      let favourites = loadFavourites();
  
      if (favourites.includes(matchId)) {
        // Remove from favourites
        favourites = favourites.filter((id) => id !== matchId);
        favouriteButton.textContent = "Add to Favourites";
        favouriteButton.classList.remove("favourited");
      } else {
        // Add to favourites
        favourites.push(matchId);
        favouriteButton.textContent = "Remove from Favourites";
        favouriteButton.classList.add("favourited");
      }
      saveFavourites(favourites);
    });
  
    // Initial match fetch
    setTimeout(()=> fetchMatches(),5000);
  
    // Refresh matches
    refreshButton.addEventListener("click", () => {
       matchesDiv.style.display="none"
      loader.style.display="inline-block"
      loaderText.innerHTML="Loading data again ..."
      setTimeout(()=> fetchMatches(),3000);
    });
  
    // Handle live matches filter
    liveOnlyCheckbox.addEventListener("change", () => {
        matchesDiv.style.display="none"
      loader.style.display="inline-block"
       loaderText.innerHTML="Loading Live Matches ..."
      setTimeout(()=> fetchMatches(),3000);
    });
  
    // Handle "Show Favourites Only" checkbox
    favouritesOnlyCheckbox.addEventListener("change", () => {
         matchesDiv.style.display="none"
      loader.style.display="inline-block";
       loaderText.innerHTML="Loading Favourite Matches ..."
      setTimeout(()=> fetchMatches(),3000);
    });
  
    // Handle dark mode toggle
    darkModeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode", darkModeToggle.checked);
    });
  
    // Handle share button click
    shareButton.addEventListener("click", () => {
      const matchDetails = Array.from(document.querySelectorAll(".match"))
        .map((match) => match.innerText)
        .join("\n\n");

        console.log("matchDetails",matchDetails);
  
      if (navigator.share) {
        navigator
          .share({
            title: "Match Details",
            text:`${matchDetails}\n\nMore details at: ${window.location.href}`,
            // url: window.location.href,
          })
          .catch(console.error);
      } else {
        alert("Web Share API not supported.");
      }
    });
  
    // Close modal on close button click
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

  });
  