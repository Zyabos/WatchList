const inputSearch = document.getElementById("input-search")
const articleHtml = document.querySelector(".article")
let moviesData = []

inputSearch.addEventListener("keyup", function(e){
    e.preventDefault()
    moviesData = []
    const spaceInputSearch = inputSearch.value.trim().replace(/\s/g, "+")
    fetch(`https://www.omdbapi.com/?s=${spaceInputSearch}&type=movie&apikey=6192a1a8`)
        .then(response => response.json())
        .then(data => {
            if(data.Search){
                for(let i = 0; i < data.Search.length; i++){
                    fetch(`https://www.omdbapi.com/?i=${data.Search[i].imdbID}&type=movie&apikey=6192a1a8`)
                        .then(response => response.json())
                        .then(data => {
                        moviesData.push(data)
                })
            }
        }                    
    })
})

export {moviesData}