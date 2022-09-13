import {Movies} from "./Movies.js"
import {watchlist} from "./localStorage.js"

const articleHtml = document.querySelector(".article")

if(watchlist.length === 0){
    articleHtml.style.justifyContent = "center" 
}else{
    articleHtml.innerHTML = ""
        articleHtml.style.justifyContent = "flex-start"
    for(let i = 0; i < watchlist.length; i++){
        const movie = new Movies(watchlist[i])
        articleHtml.innerHTML += movie.render("images/minus.png", "Remove")
            if(i === watchlist.length - 1){
                const btnWatchlist = document.querySelectorAll(".chosen-btn")
                for(let i = 0; i < watchlist.length; i++){        
                    btnWatchlist[i].addEventListener('click', movie.del)

            }
        }
    }
} 