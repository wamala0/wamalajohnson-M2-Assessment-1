document.getElementById('rollButton').addEventListener('Click', GameStart);
function GameStart(){
    var WinningCategories = [
        "Best Enterprise Solution",
        "Best Hackhathon solution",
        "Best Consumer Solution",
        "Best Gaming Solution",
        "Best Health Solution",
        "Best Educational Solution",
        "Best Campus Cup Solution",
    ]
    let Categories = WinningCategories[Math.floor(Math.random() * WinningCategories.length)]

    console.log(Categories)

}