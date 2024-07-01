
//connect

// import { displayForHome, gamesContainer } from "./ui.js";

// displayForHome()

// console.log(gamesContainer);

let active = document.querySelector('.active')

let rowData = document.querySelector('.rowData')

let navShooter = document.querySelector('.nav-shooter')

// For Home 



export class Home{

    constructor(){

 

        let navLink = document.querySelectorAll('.nav-link')

        navLink.forEach( link => {
            link.addEventListener('click' , function(e){
                getData(e.target.innerHTML)
            })
        });



    }


}






export let gamesContainer = []

export async function getData(category){

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

        gamesContainer = result ;
        

    } catch (error) {
        console.error(error);
    }

    displayForHome()

}



// active.addEventListener('click' , function(){
//     // getDataForMMORPG()
    
// })



export function displayForHome(){

    let  cartona = ``;

    for(let i = 0 ; i< gamesContainer.length ; i++){

        cartona +=`
        
         <div class="col-md-3 ">

            <div class="card p-3 bg-transparent">
                <img src= "${gamesContainer[i].thumbnail}"  alt="Game Image">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                  <h5 class="card-title text-light fs-6 fw-lighter">${gamesContainer[i].title}</h5>
                  <a href="#" class="btn btnFree btn-primary ">Free</a>
                  </div>
                  <p class="card-text text-center">${gamesContainer[i].short_description}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <span class="badge badge-color p-2">${gamesContainer[i].genre}</span>
                    <span class="badge badge-color p-2">${gamesContainer[i].platform}</span>
                </div>
            </div>

            </div>
        
        `

    }

    rowData.innerHTML = cartona;

}



// navLink.addEventListener()

// export async function getDataForSHOOTER(){

//     const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=SHOOTER';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '06e5337935mshbdc0754e9d52046p1e8ea8jsn08ec0166c5bb',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);

//         gamesContainer = result ;

//     } catch (error) {
//         console.error(error);
//     }


    
//     displayForHome()

// }

// navShooter.addEventListener('click' , function(){
//     getDataForSHOOTER()
    
// })


// export async function getDataForSAILING(){

//     const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=SAILING';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '06e5337935mshbdc0754e9d52046p1e8ea8jsn08ec0166c5bb',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

// }

// export async function getDataForPERMADEATH(){

//     const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=PERMADEATH';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '06e5337935mshbdc0754e9d52046p1e8ea8jsn08ec0166c5bb',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

// }

// export async function getDataForSUPERHERO(){

//     const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=SUPERHERO';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '06e5337935mshbdc0754e9d52046p1e8ea8jsn08ec0166c5bb',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

// }

// export async function getDataForPIXEL(){

//     const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=PIXEL';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '06e5337935mshbdc0754e9d52046p1e8ea8jsn08ec0166c5bb',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

// }
