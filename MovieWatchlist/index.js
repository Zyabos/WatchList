import {Movies} from "./Movies.js"
import {moviesData} from "./data.js"

const articleHtml = document.querySelector(".article")
const btnSearch = document.getElementById("btn-search")
const inputSearch = document.getElementById("input-search")

btnSearch.addEventListener("click", function(e){
    e.preventDefault()
    inputSearch.disabled = true
    btnSearch.disabled = true
    articleHtml.style.justifyContent = "center"
    articleHtml.innerHTML = `<img src="images/duck-searching.gif" class="gray-txt">
                             <p class="gray-txt">Searching</p>`
    setTimeout(function(){
        if(moviesData.length){
            articleHtml.style.justifyContent = "flex-start"
            articleHtml.innerHTML = ""
            for(let i = 0; i < moviesData.length; i++){        
                const movie = new Movies(moviesData[i])
                articleHtml.innerHTML += movie.render("images/plus.png", "Watchlist")
                if(i === moviesData.length - 1){
                    const btnWatchlist = document.querySelectorAll(".chosen-btn")
                    for(let i = 0; i < moviesData.length; i++){        
                        btnWatchlist[i].addEventListener('click', movie.save) 
                }
            }
        }
         }else{
            articleHtml.innerHTML = `<p class="gray-txt">Unable to find what you're looking for. PLease try another search.<p>`
         }
        inputSearch.disabled = false
        btnSearch.disabled = false
    }, 3000)
})
