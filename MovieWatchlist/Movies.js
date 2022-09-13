import {watchlist} from "./localStorage.js"

class Movies{
    constructor(data){
        Object.assign(this, data)
    }
    
    render(img, txt){
        let {Poster, Title, imdbRating, Runtime, Genre, imdbID, Plot} = this
            
            if(Poster === "N/A"){
                Poster = "images/unable.png"
            }
            
            return `
            <div id="flex">
                <img id="flexImg" src=${Poster}>
                <div>
                <div>
                    <h4>${Title}</h4>
                    <h5>⭐ Rating: ${imdbRating}</h5>
                    <div>
                        <h5>${Runtime}</h5>
                        <h5>${Genre}</h5>
                        <button id="${imdbID}" class="watch-list hover add-movies chosen-btn"><img src="${img}"> ${txt}</button>
                    </div>
                    <p>${Plot}</p>
                </div>
                </div>
            </div>`
        }
        
        save(){
            document.getElementById(`${this.id}`).innerHTML = `<img src="images/complete.png">Added`
            document.getElementById(`${this.id}`).disabled = true
            fetch(`https://www.omdbapi.com/?i=${this.id}&type=movie&apikey=6192a1a8`)
                .then(response => response.json())
                .then(data => {
                    watchlist.push(data)    
                    localStorage.setItem('KeyARRA', JSON.stringify(watchlist))
            }
        )}
        
        del(){
            document.getElementById(`${this.id}`).innerHTML = `<img src="images/complete.png">Removed`
            document.getElementById(`${this.id}`).disabled = true
            for(let i = 0; i < watchlist.length; i++){
                if(watchlist[i].imdbID === this.id){
                watchlist.splice(watchlist.findIndex(index => index.imdbID === this.id), 1)
            } 
        }
            localStorage.setItem("KeyARRA", JSON.stringify(watchlist))         
    }
}

export {Movies}