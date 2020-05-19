import { fifaData } from './fifa.js';
// console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the 
following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final
*/

const worldCup2014 = fifaData.filter(function(team){
    return team.Year === 2014;
});

const homeTeamNames = worldCup2014.map(function(game){
    return game["Home Team Name"];
});

const awayTeamNames = worldCup2014.map(function(game){
    return game["Away Team Name"];
});

const homeTeamGoals = worldCup2014.map((game) => game["Home Team Goals"]);

const awayTeamGoals = worldCup2014.map((game) => game["Away Team Goals"]);

const winner = worldCup2014.filter(function(game){
    return game.Stage === "Final";
});

const winnerTeam = function(){
    if(winner.map((game) => game["Home Team Goals"]) > winner.map((game) => game["Away Team Goals"]) ){
        console.log(winner.map((game) => game["Home Team Name"]));
    } else {
        console.log(winner.map((game) => game["Away Team Name"]));
    }
}


// console.log(worldCup2014);
// console.log(homeTeamNames);
// console.log(awayTeamNames);
// console.log(homeTeamGoals);
// console.log(awayTeamGoals);
// winnerTeam();


/* Task 2: Create a function called  getFinals that takes `data` as an argument and 
returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter((game) => game.Stage === "Final");
};

// console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the
 callback function `getFinals`, and returns an array called `years` containing all of 
 the years in the dataset */

function getYears(callBackFunction) {

   //calls the callback function to get the array of finals for the data set
   const finals = callBackFunction(fifaData);
   //returns an array that holds all the years of the finals for the data set
   const years = finals.map((game) => game.Year);
   return years;
   
};

// console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the 
callback function `getFinals()` and determine the winner (home or away) of each `finals` game.
 Return the name of all winning countries in an array called `winners` */ 

function getWinners(callBackFunction) {

    //gets the array of finals for the fifa data set
    const finals = callBackFunction(fifaData);
    const winners = [];
    //adds the winners of each game to the winners array
    for(let i = 0; i < finals.length; i++){
        if(finals[i]["Home Team Goals"] > finals[i]["Away Team Goals"]){
           winners.push(`Home Team: ${finals[i]["Home Team Name"]}`);
        } else {
            winners.push(`Away Team: ${finals[i]["Away Team Name"]}`);
        }
    }
    return winners;

};

// console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the 
following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

 const strings = [];

function getWinnersByYear(callBack1, callBack2) {
    //an array to hold the years of the finals
    const years = callBack1(getFinals);
    //array to hold the names of the winners from the finals
    const winnerNames = callBack2(getFinals);

    years.forEach(function(winGame, index){
        strings.push(`In ${winGame}, ${winnerNames[index]} won the world cup!`);
    });
};

//  getWinnersByYear(getYears, getWinners);
//  console.log(strings);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data`
 and returns the the average number of home team goals and away team goals scored per match
  (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    // total home goals made
    const homeGoalTotal = data.reduce(function(total, game){
        return total + game["Home Team Goals"];
    }, 0);

    //gets the average of home goals made
    let averageHome = homeGoalTotal/data.length;

    //total of the away goals made
    const awayGoalTotal = data.reduce(function(total, game){
        return total + game["Away Team Goals"];
    },0);
    
    //gets average of away goals made
    let averageAway = awayGoalTotal/data.length;

    return `Average home team goals: ${averageHome}, Average away team goals: ${averageAway}`;

};

// console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* STRETCH 1: Create a function called `getCountryWins` that takes the parameters `data`
 and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitals) {

    //gets the array of games in the finals for the world cup
    const finals = getFinals(data);
    const winners = [];
    //adds the team initials for who won each final game
    for(let i = 0; i < finals.length; i++){
        if(finals[i]["Home Team Goals"] > finals[i]["Away Team Goals"]){
           winners.push(finals[i]["Home Team Initials"]);
        } else {
            winners.push(finals[i]["Away Team Initials"]);
        }
    }

    // console.log(winners);

    //returns an array that has only the team initials that match the given argument teamInitials
    const filteredWinners = winners.filter(function(game){
        return game === teamInitals;
    });

    // console.log(filteredWinners);

    //returns the total number of wins for that particular team
    const numberWins = filteredWinners.reduce(function(sum, game){
        return sum + 1;
    }, 0);

    // console.log(numberWins);

    return numberWins;

};

// console.log(getCountryWins(fifaData, "BRA"));

/* STRETCH 2: Write a function called getGoals() that accepts a parameter `data`
 and returns the team with the most goals score per appearance (average goals for) in the
  World Cup finals */

function getGoals(data) {

    const finals = getFinals(data);
    

};

// getGoals(fifaData);


/* STRETCH 3: Write a function called badDefense() that accepts a parameter `data`
 and calculates the team with the most goals scored against them per appearance 
 (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as
 listed in the README file. */

 /*Use .map to format country names into <h1> HTML headers. */

 //gets the country names from the data set and puts them into an array
 const countryNames = fifaData.map(function(game){
    return game["Home Team Name"]
 });

 //changes each item in the array to a html h1 header and returns the new array
 const htmlHeaders = countryNames.map(function(game, index){
    let header = `<h1>${game}</h1>`;
    return  header;
 });

//  console.log(htmlHeaders);