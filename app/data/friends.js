//save application's data as an array of objects. 

//making a function to cut down on repeated typing
function newScout(name, photo, scores) {
    return {
        name, photo, scores
    }
}

let allScouts = [
    newScout("Sailor Moon", "https://vignette.wikia.nocookie.net/sailormoon/images/5/55/4-58-706x1024.jpg/revision/latest?cb=20180810084519", [5, 1, 3, 3, 2, 1, 5, 3, 1, 4]),
    newScout("Sailor Mars", "https://vignette.wikia.nocookie.net/sailormoon/images/6/67/Eternal_sailor_mars.jpg/revision/latest?cb=20180810085544", [1, 3, 3, 5, 3, 3, 2, 5, 1, 2]),
    newScout("Sailor Mercury", "https://vignette.wikia.nocookie.net/sailormoon/images/4/44/Eternal_sailor_mercury.jpg/revision/latest?cb=20180810085422", [1, 5, 2, 1, 3, 1, 4, 3, 5, 1]),
    newScout("Sailor Venus", "https://vignette.wikia.nocookie.net/sailormoon/images/9/99/Eternal_Sailor_Venus.png/revision/latest?cb=20180810085812", [4, 1, 1, 2, 5, 4, 2, 3, 1, 3]),
    newScout("Sailor Jupiter", "https://vignette.wikia.nocookie.net/sailormoon/images/4/44/3f012c610f2ed6888ba30e55f526846d.jpg/revision/latest?cb=20180810085652", [5, 1, 5, 4, 1, 4, 1, 4, 3, 3]),
    newScout("Sailor Neptune", "https://vignette.wikia.nocookie.net/sailormoon/images/6/61/Eternalsailorneptunemirror.jpg/revision/latest?cb=20180810090411", [1, 4, 3, 1, 4, 2, 5, 4, 5, 1]),
    newScout("Sailor Uranus", "https://vignette.wikia.nocookie.net/sailormoon/images/8/8f/Screen_Shot_2018-08-10_at_7.01.44_pm.png/revision/latest?cb=20180810090217", [3, 3, 2, 4, 1, 5, 2, 5, 3, 2]),
    newScout("Sailor Saturn", "https://vignette.wikia.nocookie.net/sailormoon/images/3/3f/Eternal_Sailor_Saturn.png/revision/latest?cb=20180810090617", [2, 5, 2, 5, 2, 2, 5, 1, 4, 5]),
    newScout("Sailor Pluto", "https://vignette.wikia.nocookie.net/sailormoon/images/1/12/E24990749fd7bf4c4c33d1bfa02e6804.jpg/revision/latest?cb=20180810090057", [1, 5, 4, 1, 3, 2, 5, 3, 5, 1]),
    newScout("Sailor Mini Moon", "https://vignette.wikia.nocookie.net/sailormoon/images/9/96/Eternal_Sailor_Chibi_Moon.jpg/revision/latest?cb=20180810085933", [5, 1, 1, 5, 5, 4, 4, 3, 1, 4])
];

//exporting the data 
module.exports = allScouts;