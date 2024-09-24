import express from 'express';
const app = express();
const port = 3000 || 5000;

import cors from "cors";
app.use(cors())

// Sample cricket match data (mocking your API response)
const matchData = {
 "data": [
    {
      "id": "9375ff81-10ec-48c4-b459-df30d9182828",
      "name": "Nepal vs Oman, 28th Match",
      "matchType": "odi",
      "status": "Oman won by 1 wkt",
      "venue": "Maple Leaf North-West Ground, King City",
      "date": "2024-09-18",
      "dateTimeGMT": "2024-09-18T14:00:00",
      "teams": [
        "Nepal",
        "Oman"
      ],
      "teamInfo": [
        {
          "name": "Nepal",
          "shortname": "NEP",
          "img": "https://g.cricapi.com/iapi/54-637877084789981539.webp?w=48"
        },
        {
          "name": "Oman",
          "shortname": "OMAN",
          "img": "https://g.cricapi.com/iapi/64-637877083212505394.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 220,
          "w": 9,
          "o": 50,
          "inning": "Nepal Inning 1"
        },
        {
          "r": 223,
          "w": 9,
          "o": 49.5,
          "inning": "Oman Inning 1"
        }
      ],
      "series_id": "9b836620-68cb-4798-9647-d479aa871b76",
      "fantasyEnabled": true,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "357851e1-0a12-4927-8732-cd460bfb4fcd",
      "name": "United Arab Emirates vs United States, 27th Match",
      "matchType": "odi",
      "status": "United States won by 10 wkts",
      "venue": "United Cricket Club Ground, Windhoek",
      "date": "2024-09-18",
      "dateTimeGMT": "2024-09-18T07:30:00",
      "teams": [
        "United Arab Emirates",
        "United States"
      ],
      "teamInfo": [
        {
          "name": "United Arab Emirates",
          "shortname": "UAE",
          "img": "https://g.cricapi.com/iapi/92-637877081068315608.webp?w=48"
        },
        {
          "name": "United States",
          "shortname": "USA",
          "img": "https://g.cricapi.com/iapi/93-637877085206398451.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 106,
          "w": 10,
          "o": 31.2,
          "inning": "United Arab Emirates Inning 1"
        },
        {
          "r": 107,
          "w": 0,
          "o": 15.5,
          "inning": "United States Inning 1"
        }
      ],
      "series_id": "9b836620-68cb-4798-9647-d479aa871b76",
      "fantasyEnabled": true,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "392e0ef7-ebc3-466c-b39b-4c29a0e8e7e9",
      "name": "Pakistan Women vs South Africa Women, 2nd T20I",
      "matchType": "t20",
      "status": "Pakistan Women won by 13 runs",
      "venue": "Multan Cricket Stadium, Multan",
      "date": "2024-09-18",
      "dateTimeGMT": "2024-09-18T14:00:00",
      "teams": [
        "Pakistan Women",
        "South Africa Women"
      ],
      "teamInfo": [
        {
          "name": "Pakistan Women",
          "shortname": "PAKW",
          "img": "https://g.cricapi.com/iapi/67-637877074931980375.webp?w=48"
        },
        {
          "name": "South Africa Women",
          "shortname": "RSAW",
          "img": "https://g.cricapi.com/iapi/83-637877067733114809.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 181,
          "w": 4,
          "o": 20,
          "inning": "Pakistan Women Inning 1"
        },
        {
          "r": 168,
          "w": 4,
          "o": 20,
          "inning": "South Africa Women Inning 1"
        }
      ],
      "series_id": "bbad4d91-68ce-4b27-ae7c-67a69c64e39d",
      "fantasyEnabled": true,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "0b6c78a7-d1de-44a1-a139-3dbe56fd5ede",
      "name": "Trinbago Knight Riders vs Guyana Amazon Warriors, 19th Match",
      "matchType": "t20",
      "status": "Trinbago Knight Riders won by 5 wkts",
      "venue": "Queen's Park Oval, Port of Spain, Trinidad",
      "date": "2024-09-18",
      "dateTimeGMT": "2024-09-18T23:00:00",
      "teams": [
        "Trinbago Knight Riders",
        "Guyana Amazon Warriors"
      ],
      "teamInfo": [
        {
          "name": "Guyana Amazon Warriors",
          "shortname": "GAW",
          "img": "https://g.cricapi.com/iapi/174-637945408285271060.webp?w=48"
        },
        {
          "name": "Trinbago Knight Riders",
          "shortname": "TKR",
          "img": "https://g.cricapi.com/iapi/293-637932465560269082.png?w=48"
        }
      ],
      "score": [
        {
          "r": 148,
          "w": 7,
          "o": 20,
          "inning": "Guyana Amazon Warriors Inning 1"
        },
        {
          "r": 149,
          "w": 5,
          "o": 19.2,
          "inning": "Trinbago Knight Riders Inning 1"
        }
      ],
      "series_id": "8454fb69-8ab8-4dd2-878b-55157106b2b9",
      "fantasyEnabled": true,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "1f05fa5a-37e7-4b31-bea0-5f5af0d9258c",
      "name": "Barbados Royals vs St Kitts and Nevis Patriots, 18th Match",
      "matchType": "t20",
      "status": "Barbados Royals won by 9 wkts",
      "venue": "Kensington Oval, Bridgetown, Barbados",
      "date": "2024-09-17",
      "dateTimeGMT": "2024-09-17T23:00:00",
      "teams": [
        "Barbados Royals",
        "St Kitts and Nevis Patriots"
      ],
      "teamInfo": [
        {
          "name": "Barbados Royals",
          "shortname": "BR",
          "img": "https://g.cricapi.com/iapi/114-637959253434216362.webp?w=48"
        },
        {
          "name": "St Kitts and Nevis Patriots",
          "shortname": "SNP",
          "img": "https://g.cricapi.com/iapi/277-637937608859640652.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 110,
          "w": 10,
          "o": 19.1,
          "inning": "St Kitts and Nevis Patriots Inning 1"
        },
        {
          "r": 113,
          "w": 1,
          "o": 11.2,
          "inning": "Barbados Royals Inning 1"
        }
      ],
      "series_id": "8454fb69-8ab8-4dd2-878b-55157106b2b9",
      "fantasyEnabled": true,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "a81bbd0d-666a-483a-9f96-818254ee64fe",
      "name": "Sri Lanka vs New Zealand, 1st Test",
      "matchType": "test",
      "status": "Day 2: 2nd Session - New Zealand trail by 285 runs",
      "venue": "Galle International Stadium, Galle",
      "date": "2024-09-18",
      "dateTimeGMT": "2024-09-18T04:30:00",
      "teams": [
        "Sri Lanka",
        "New Zealand"
      ],
      "teamInfo": [
        {
          "name": "New Zealand",
          "shortname": "NZ",
          "img": "https://g.cricapi.com/iapi/57-637877076980737903.webp?w=48"
        },
        {
          "name": "Sri Lanka",
          "shortname": "SL",
          "img": "https://g.cricapi.com/iapi/4191-638101639309122979.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 305,
          "w": 10,
          "o": 91.5,
          "inning": "Sri Lanka Inning 1"
        },
        {
          "r": 20,
          "w": 0,
          "o": 3,
          "inning": "New Zealand Inning 1"
        }
      ],
      "series_id": "76d7b3af-a06d-4040-b01f-c7bf7510cb50",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
    {
      "id": "1be84ce3-a074-439e-8e9d-6e0a1b0cf904",
      "name": "Hong Kong vs Kuwait, 21st Match",
      "matchType": "t20",
      "status": "No Result - due to rain",
      "venue": "YSD-UKM Cricket Oval, Bangi",
      "date": "2024-09-09",
      "dateTimeGMT": "2024-09-09T05:45:00",
      "teams": [
        "Hong Kong",
        "Kuwait"
      ],
      "teamInfo": [
        {
          "name": "Hong Kong",
          "shortname": "HKG",
          "img": "https://g.cricapi.com/iapi/611-637877089158155520.webp?w=48"
        },
        {
          "name": "Kuwait",
          "shortname": "KUW",
          "img": "https://g.cricapi.com/iapi/621-637864920257551899.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 139,
          "w": 9,
          "o": 20,
          "inning": "Hong Kong Inning 1"
        },
        {
          "r": 11,
          "w": 2,
          "o": 4,
          "inning": "Kuwait Inning 1"
        }
      ],
      "series_id": "da428793-690a-49b9-bd41-17e7303537dd",
      "fantasyEnabled": true,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
    {
      "id": "65d9b0d3-be74-4ee9-8cc8-57ab0d6b6cfc",
      "name": "India A vs India C, 6th Match",
      "matchType": "test",
      "status": "Day 1: 2nd Session - India C opt to bowl",
      "venue": "Rural Development Trust Stadium, Anantapur",
      "date": "2024-09-19",
      "dateTimeGMT": "2024-09-19T04:00:00",
      "teams": [
        "India A",
        "India C"
      ],
      "teamInfo": [
        {
          "name": "India A",
          "shortname": "INA",
          "img": "https://g.cricapi.com/iapi/2206-637976248888288069.webp?w=48"
        },
        {
          "name": "India C",
          "shortname": "INC",
          "img": "https://h.cricapi.com/img/icon512.png"
        }
      ],
      "score": [
        {
          "r": 68,
          "w": 5,
          "o": 30,
          "inning": "India A Inning 1"
        }
      ],
      "series_id": "98f7bf57-43df-48ad-adc7-7bd1470fc7b7",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
    {
      "id": "292c7172-df36-4092-b30d-02121a18b9b1",
      "name": "India B vs India D, 5th Match",
      "matchType": "test",
      "status": "India B opt to bowl",
      "venue": "Rural Development Trust Stadium B, Anantapur",
      "date": "2024-09-19",
      "dateTimeGMT": "2024-09-19T04:00:00",
      "teams": [
        "India B",
        "India D"
      ],
      "teamInfo": [
        {
          "name": "India B",
          "shortname": "INB",
          "img": "https://h.cricapi.com/img/icon512.png"
        },
        {
          "name": "India D",
          "shortname": "IND",
          "img": "https://h.cricapi.com/img/icon512.png"
        }
      ],
      "score": [
        {
          "r": 98,
          "w": 0,
          "o": 28,
          "inning": "India D Inning 1"
        }
      ],
      "series_id": "98f7bf57-43df-48ad-adc7-7bd1470fc7b7",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
    {
      "id": "901d145a-d56a-4004-b748-025a1b5a74b3",
      "name": "Afghanistan vs South Africa, 1st ODI",
      "matchType": "odi",
      "status": "Afghanistan won by 6 wkts",
      "venue": "Sharjah Cricket Stadium, Sharjah",
      "date": "2024-09-18",
      "dateTimeGMT": "2024-09-18T12:00:00",
      "teams": [
        "Afghanistan",
        "South Africa"
      ],
      "teamInfo": [
        {
          "name": "Afghanistan",
          "shortname": "AFG",
          "img": "https://g.cricapi.com/iapi/1-637877075587179422.webp?w=48"
        },
        {
          "name": "South Africa",
          "shortname": "RSA",
          "img": "https://g.cricapi.com/iapi/82-637877071839088912.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 106,
          "w": 10,
          "o": 33.3,
          "inning": "South Africa Inning 1"
        },
        {
          "r": 107,
          "w": 4,
          "o": 26,
          "inning": "Afghanistan Inning 1"
        }
      ],
      "series_id": "42c64b08-67ff-4cbc-963a-5a3e831b0297",
      "fantasyEnabled": true,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": true
    },
    {
      "id": "ab9f4011-8da7-44e2-b7fe-15afc96755aa",
      "name": "Gulbarga Mystics vs Mangalore Dragons, 12th Match",
      "matchType": "t20",
      "status": "No result - due to rain",
      "venue": "M.Chinnaswamy Stadium, Bengaluru",
      "date": "2024-08-20",
      "dateTimeGMT": "2024-08-20T13:30:00",
      "teams": [
        "Gulbarga Mystics",
        "Mangalore Dragons"
      ],
      "teamInfo": [
        {
          "name": "Gulbarga Mystics",
          "shortname": "GUM",
          "img": "https://g.cricapi.com/iapi/1977-637992886521127923.webp?w=48"
        },
        {
          "name": "Mangalore Dragons",
          "shortname": "MD",
          "img": "https://h.cricapi.com/img/icon512.png"
        }
      ],
      "score": [
        {
          "r": 169,
          "w": 10,
          "o": 20,
          "inning": "Gulbarga Mystics Inning 1"
        },
        {
          "r": 46,
          "w": 0,
          "o": 4.3,
          "inning": "Mangalore Dragons Inning 1"
        }
      ],
      "series_id": "13534352-673a-4448-a251-72c2e0672c4a",
      "fantasyEnabled": true,
      "bbbEnabled": true,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
    {
      "id": "05b9f062-61b3-4858-8306-5e964f3d6826",
      "name": "Southern Brave vs Welsh Fire, 30th Match",
      "status": "No result - due to rain",
      "venue": "The Rose Bowl, Southampton",
      "date": "2024-08-14",
      "dateTimeGMT": "2024-08-14T14:00:00",
      "teams": [
        "Southern Brave",
        "Welsh Fire"
      ],
      "teamInfo": [
        {
          "name": "Southern Brave",
          "shortname": "SOU",
          "img": "https://g.cricapi.com/iapi/274-637885742671987889.webp?w=48"
        },
        {
          "name": "Welsh Fire",
          "shortname": "WEF",
          "img": "https://g.cricapi.com/iapi/303-637885743181447004.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 181,
          "w": 5,
          "o": 100,
          "inning": "Welsh Fire Inning 1"
        },
        {
          "r": 21,
          "w": 2,
          "o": 16,
          "inning": "Southern Brave Inning 1"
        }
      ],
      "series_id": "97d0fbb9-fd30-41aa-96bd-c84617729058",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
    {
      "id": "2f0dfbfa-36eb-42b8-8993-f24318a83491",
      "name": "India vs Bangladesh, 1st Test",
      "matchType": "test",
      "status": "Day 1: 2nd Session - Bangladesh opt to bowl",
      "venue": "MA Chidambaram Stadium, Chennai",
      "date": "2024-09-19",
      "dateTimeGMT": "2024-09-19T04:00:00",
      "teams": [
        "India",
        "Bangladesh"
      ],
      "teamInfo": [
        {
          "name": "Bangladesh",
          "shortname": "BAN",
          "img": "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48"
        },
        {
          "name": "India",
          "shortname": "IND",
          "img": "https://g.cricapi.com/iapi/31-637877061080567215.webp?w=48"
        }
      ],
      "score": [
        {
          "r": 116,
          "w": 4,
          "o": 30.4,
          "inning": "India Inning 1"
        }
      ],
      "series_id": "f42f527a-6562-44b1-bb46-2fb2f505bf63",
      "fantasyEnabled": true,
      "bbbEnabled": false,
      "hasSquad": true,
      "matchStarted": true,
      "matchEnded": false
    },
    {
      "id": "95218fa3-5dd9-4480-a5ae-a4904f771d61",
      "name": "West Indies vs Bangladesh, 3rd T20I",
      "matchType": "t20",
      "status": "Match not started",
      "venue": "Arnos Vale Ground, Kingstown, St Vincent",
      "date": "2024-12-20",
      "dateTimeGMT": "2024-12-20T00:00:00",
      "teams": [
        "West Indies",
        "Bangladesh"
      ],
      "teamInfo": [
        {
          "name": "Bangladesh",
          "shortname": "BAN",
          "img": "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "9fa5c32f-9130-4804-8805-f286c4efd8bd",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "5aea9956-74c7-4c22-bab6-63c4c83f473b",
      "name": "West Indies vs Bangladesh, 2nd T20I",
      "matchType": "t20",
      "status": "Match not started",
      "venue": "Arnos Vale Ground, Kingstown, St Vincent",
      "date": "2024-12-18",
      "dateTimeGMT": "2024-12-18T00:00:00",
      "teams": [
        "West Indies",
        "Bangladesh"
      ],
      "teamInfo": [
        {
          "name": "Bangladesh",
          "shortname": "BAN",
          "img": "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "9fa5c32f-9130-4804-8805-f286c4efd8bd",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "cc939b28-9fdc-4b4c-87fe-247214eb0597",
      "name": "West Indies vs Bangladesh, 1st T20I",
      "matchType": "t20",
      "status": "Match not started",
      "venue": "Arnos Vale Ground, Kingstown, St Vincent",
      "date": "2024-12-16",
      "dateTimeGMT": "2024-12-16T00:00:00",
      "teams": [
        "West Indies",
        "Bangladesh"
      ],
      "teamInfo": [
        {
          "name": "Bangladesh",
          "shortname": "BAN",
          "img": "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "9fa5c32f-9130-4804-8805-f286c4efd8bd",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "e4b75bdc-1c81-4852-989c-8329085e8801",
      "name": "West Indies vs Bangladesh, 3rd ODI",
      "matchType": "odi",
      "status": "Match not started",
      "venue": "Warner Park, Basseterre, St Kitts",
      "date": "2024-12-12",
      "dateTimeGMT": "2024-12-12T13:30:00",
      "teams": [
        "West Indies",
        "Bangladesh"
      ],
      "teamInfo": [
        {
          "name": "Bangladesh",
          "shortname": "BAN",
          "img": "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "9fa5c32f-9130-4804-8805-f286c4efd8bd",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "e427ee37-b2ef-46f1-8763-30b5db996f82",
      "name": "West Indies vs Bangladesh, 2nd ODI",
      "matchType": "odi",
      "status": "Match not started",
      "venue": "Warner Park, Basseterre, St Kitts",
      "date": "2024-12-10",
      "dateTimeGMT": "2024-12-10T13:30:00",
      "teams": [
        "West Indies",
        "Bangladesh"
      ],
      "teamInfo": [
        {
          "name": "Bangladesh",
          "shortname": "BAN",
          "img": "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "9fa5c32f-9130-4804-8805-f286c4efd8bd",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "870135fb-7718-48ce-abdc-89bae3218588",
      "name": "West Indies vs Bangladesh, 1st ODI",
      "matchType": "odi",
      "status": "Match not started",
      "venue": "Warner Park, Basseterre, St Kitts",
      "date": "2024-12-08",
      "dateTimeGMT": "2024-12-08T13:30:00",
      "teams": [
        "West Indies",
        "Bangladesh"
      ],
      "teamInfo": [
        {
          "name": "Bangladesh",
          "shortname": "BAN",
          "img": "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "9fa5c32f-9130-4804-8805-f286c4efd8bd",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "e8c03d72-d884-4325-adfd-cf57e8e004af",
      "name": "West Indies vs Bangladesh, 2nd Test",
      "matchType": "test",
      "status": "Match not started",
      "venue": "Sabina Park, Kingston, Jamaica",
      "date": "2024-11-30",
      "dateTimeGMT": "2024-11-30T14:00:00",
      "teams": [
        "West Indies",
        "Bangladesh"
      ],
      "teamInfo": [
        {
          "name": "Bangladesh",
          "shortname": "BAN",
          "img": "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "9fa5c32f-9130-4804-8805-f286c4efd8bd",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "61899b2f-e9a9-4206-a49c-d024b92ecd88",
      "name": "West Indies vs Bangladesh, 1st Test",
      "matchType": "test",
      "status": "Match not started",
      "venue": "Sir Vivian Richards Stadium, North Sound, Antigua",
      "date": "2024-11-22",
      "dateTimeGMT": "2024-11-22T14:00:00",
      "teams": [
        "West Indies",
        "Bangladesh"
      ],
      "teamInfo": [
        {
          "name": "Bangladesh",
          "shortname": "BAN",
          "img": "https://g.cricapi.com/iapi/9-637877074109248302.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "9fa5c32f-9130-4804-8805-f286c4efd8bd",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "3d012eaa-74fc-46fb-bad1-7e7f704c87a0",
      "name": "West Indies vs England, 5th T20I",
      "matchType": "t20",
      "status": "Match not started",
      "venue": "Daren Sammy National Cricket Stadium, Gros Islet, St Lucia",
      "date": "2024-11-17",
      "dateTimeGMT": "2024-11-17T20:00:00",
      "teams": [
        "West Indies",
        "England"
      ],
      "teamInfo": [
        {
          "name": "England",
          "shortname": "ENG",
          "img": "https://g.cricapi.com/iapi/23-637877072894080569.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "8bb6d4e1-8e80-4979-b2f4-62026355153e",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "38f85293-07b8-4e21-8cc4-c780fa4d3957",
      "name": "West Indies vs England, 4th T20I",
      "matchType": "t20",
      "status": "Match not started",
      "venue": "Daren Sammy National Cricket Stadium, Gros Islet, St Lucia",
      "date": "2024-11-16",
      "dateTimeGMT": "2024-11-16T20:00:00",
      "teams": [
        "West Indies",
        "England"
      ],
      "teamInfo": [
        {
          "name": "England",
          "shortname": "ENG",
          "img": "https://g.cricapi.com/iapi/23-637877072894080569.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "8bb6d4e1-8e80-4979-b2f4-62026355153e",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "35af0728-714e-46ae-915b-c3f1a50559a0",
      "name": "West Indies vs England, 3rd T20I",
      "matchType": "t20",
      "status": "Match not started",
      "venue": "Daren Sammy National Cricket Stadium, Gros Islet, St Lucia",
      "date": "2024-11-14",
      "dateTimeGMT": "2024-11-14T20:00:00",
      "teams": [
        "West Indies",
        "England"
      ],
      "teamInfo": [
        {
          "name": "England",
          "shortname": "ENG",
          "img": "https://g.cricapi.com/iapi/23-637877072894080569.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "8bb6d4e1-8e80-4979-b2f4-62026355153e",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    },
    {
      "id": "439386dd-dcda-4ddd-87c2-f8e15e2a62c9",
      "name": "West Indies vs England, 2nd T20I",
      "matchType": "t20",
      "status": "Match not started",
      "venue": "Kensington Oval, Bridgetown, Barbados",
      "date": "2024-11-10",
      "dateTimeGMT": "2024-11-10T20:00:00",
      "teams": [
        "West Indies",
        "England"
      ],
      "teamInfo": [
        {
          "name": "England",
          "shortname": "ENG",
          "img": "https://g.cricapi.com/iapi/23-637877072894080569.webp?w=48"
        },
        {
          "name": "West Indies",
          "shortname": "WI",
          "img": "https://g.cricapi.com/iapi/100-637877077978319234.webp?w=48"
        }
      ],
      "score": [],
      "series_id": "8bb6d4e1-8e80-4979-b2f4-62026355153e",
      "fantasyEnabled": false,
      "bbbEnabled": false,
      "hasSquad": false,
      "matchStarted": false,
      "matchEnded": false
    }
  ],
};

// Define an endpoint to return cricket match data
app.get('/api/matches', (req, res) => {
    console.log("APi hits");
  res.json(matchData);
});

app.listen(port, () => {
  console.log(`Local API listening at http://localhost:${port}`);
});
