let watchlist 

if(!localStorage.getItem("KeyARRA")){
    watchlist = []
}else{
    watchlist = JSON.parse(localStorage.getItem('KeyARRA'))
} 

export {watchlist}