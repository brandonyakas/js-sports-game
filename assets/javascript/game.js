let teamOneShoot = document.querySelector("#teamone-shoot-button");

let teamOneNumShots = document.querySelector("#teamone-numshots");

let teamOneNumGoals = document.querySelector("#teamone-numgoals");

teamOneShoot.addEventListener("click", function () {

    let newTeamOneNumShots = Number(teamOneNumShots.innerHTML) + 1;

    teamOneNumShots.innerHTML = newTeamOneNumShots;

    let x = Math.floor(Math.random() * 1000);

    if (x % 2 == 0) {

        x = Number(teamOneNumGoals.innerHTML) + 1;

        teamOneNumGoals.innerHTML = x;

    }

})

let teamTwoShoot = document.querySelector("#teamtwo-shoot-button");

let teamTwoNumShots = document.querySelector("#teamtwo-numshots");

let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals");

teamTwoShoot.addEventListener("click", function () {

    let newTeamTwoNumShots = Number(teamTwoNumShots.innerHTML) + 1;

    teamTwoNumShots.innerHTML = newTeamTwoNumShots;

    let x = Math.floor(Math.random() * 1000);

    if (x % 2 == 0) {

        x = Number(teamTwoNumGoals.innerHTML) + 1;

        teamTwoNumGoals.innerHTML = x;

    }

})

let reset = document.querySelector("#reset-button");

let numReset = document.querySelector("#num-resets");

reset.addEventListener("click", function () {

    let newNumReset = Number(numReset.innerHTML) + 1;

    teamOneNumShots.innerHTML = 0;

    teamOneNumGoals.innerHTML = 0;

    teamTwoNumShots.innerHTML = 0;

    teamTwoNumGoals.innerHTML = 0;

    numReset.innerHTML = newNumReset;
    
})