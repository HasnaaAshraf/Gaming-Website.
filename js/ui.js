
// For display Data --> llmain page w el details page

// export let gamesContainer = []


export class DisplayAll{

    
displayGames(gamesContainer){

   let cartona = ``;

    for(let i = 0 ; i< gamesContainer.length ; i++){

      let x = gamesContainer[i].short_description;

        cartona +=`
        
       <div data-id="${gamesContainer[i].id}" class="cardItem col-md-3 ">

          <div  class="card p-3 bg-transparent">
                <img src= "${gamesContainer[i].thumbnail}"  alt="Game Image">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                  <h5 class="card-title text-light">${gamesContainer[i].title}</h5>
                  <a href="#" class="btn btn-primary btnFree ">Free</a>
                  </div>
                  <p class="card-text text-center">${x.slice(0,50)}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <span class="badge p-2">${gamesContainer[i].genre}</span>
                    <span class="badge p-2">${gamesContainer[i].platform}</span>
                </div>
            </div>

            </div>
        
        `

    }


    document.querySelector('.rowData').innerHTML = cartona;


}
    
displayDetailsGames(gamesObj){

  let cartona = ``;


       cartona +=`
       
         <div class="detailsCard d-flex text-light position-relative">

          <div div class="btnClose ">

            <button type="button" class="btn-close" data-bs-dismiss="alert"  aria-label="Close"></button>
           
           </div>
         
         <div class="left">

         <h2 class="h2Title mb-2 ">Details Game</h2>

         <img src="${gamesObj.thumbnail}" width="400px" alt="">

         </div>

         <div class="right ">


         <h3 > Title:${gamesObj.title}</h3>

         <h4 class="h6"> Category: <span class="spanForRight text-dark p-1">${gamesObj.genre}</span></h4>

         <h4 class="h6"> Platform:  <span class="spanForRight text-dark p-1">${gamesObj.platform} </span></h4>

         <h4 class="h6"> Status:  <span class="spanForRight text-dark p-1">${gamesObj.status}</span> </h4>

         <p> ${gamesObj.description}</p>


         <a href="${gamesObj.game_url}" class="btn btn-outline-warning text-light">Show game</a>

         
         </div>

        </div>
       
       `
 
   document.querySelector('.RowForData').innerHTML = cartona;


}


}






{/* <a href="${gamesContainer[i].game_url}"> <button type="button" class="btn btn-outline-warning text-light">Show game </button></a> */}


// export function displayForDetails(gamesContainer){

//     let  cartona = ``;

//         cartona +=`
        
        
//         `

    

//     rowData.innerHTML = cartona;

// }



