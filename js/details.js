
import { DisplayAll } from "./ui.js";


// For Details

export class DetailedData {

	constructor(Idgames) {
		this.fetchDetails(Idgames)
		
		this.gamesObj = {};

		
		
	}

	async fetchDetails(id) {

		console.log(id);
		const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;

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

			this.gamesObj = result;

			let ui = new DisplayAll()

            ui.displayDetailsGames(this.gamesObj)

		} catch (error) {
			console.error(error);
		}

	

	}

}

