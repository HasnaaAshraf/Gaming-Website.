
// import * as homeData from './home.js'

import { DetailedData } from "./details.js";
import { DisplayAll } from "./ui.js";


//practice for home



export class GetData {

    constructor() {

        this.gamesContainer = []

        document.querySelectorAll('.nav-link').forEach( link => {
            link.addEventListener('click' , e=>{
                this.fetchData(e.target.innerHTML)
                console.log("hello");
            })
        });


        console.log(this.fetchData());

        this.fetchData("mmorpg")

    }

    async fetchData(category) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '06e5337935mshbdc0754e9d52046p1e8ea8jsn08ec0166c5bb',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {

            let response = await fetch(url, options);
            let result = await response.json();
            console.log(result);

            this.gamesContainer = result;

            let ui = new DisplayAll()

            ui.displayGames(this.gamesContainer)

            this.clickOnItem();

        } catch (error) {
            console.error(error);
        }

    }


    clickOnItem(){
        // let Details = new details(id);
        document.querySelectorAll(".cardItem").forEach((card) => {
            card.addEventListener("click", () => {
               const id = card.dataset.id;
               console.log(id);
               this.showDetails(id);
               console.log("hello");
            //    console.log(e.target);
            //    console.log(this);
            });
         });
    }

    showDetails(id){
        const Details = new DetailedData(id);
        document.querySelector(".rowData").classList.add("d-none");
        document.querySelector(".navbar").classList.add("d-none");
        document.querySelector(".RowForData").classList.remove("d-none");
    }

}

// export class MMORPGDataFetcher {
//     constructor(apiKey, apiHost) {
//         this.apiKey = apiKey;
//         this.apiHost = apiHost;
//         this.url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg';
//         this.gamesContainer = [];
//     }

//     async fetchData() {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': this.apiKey,
//                 'x-rapidapi-host': this.apiHost
//             }
//         };

//         try {
//             const response = await fetch(this.url, options);
//             const result = await response.json();
//             console.log(result);
//             this.gamesContainer = result;
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     displayData(containerElementId) {
//         const container = document.getElementById(containerElementId);
//         if (!container) {
//             console.error(`Container element with id "${containerElementId}" not found.`);
//             return;
//         }

//         container.innerHTML = this.gamesContainer.map(game => `
//             <div>
//                 <h2>${game.title}</h2>
//                 <p>${game.short_description}</p>
//                 <img src="${game.thumbnail}" alt="${game.title}">
//             </div>
//         `).join('');
//     }
// }

// // Usage
// const apiKey = '06e5337935mshbdc0754e9d52046p1e8ea8jsn08ec0166c5bb';
// const apiHost = 'free-to-play-games-database.p.rapidapi.com';
// const fetcher = new MMORPGDataFetcher(apiKey, apiHost);

// async function displayForHome() {
//     await fetcher.fetchData();
//     fetcher.displayData('games-container');
// }

// // Call the function to display games
// displayForHome();


// let getDataForMmorpg = new getDataForMMORPG()

// console.log(getDataForMmorpg);

// getDataForMMORPG