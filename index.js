// Your code here
//The function returns a string like "This Saturday, I want to ....!"
//If nothing is passed in, default to "roller-skate".
function saturdayFun(activity="roller-skate") {
    console.log(`This Saturday, I want to ${activity}!`);
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun() ;

//The function returns a string "This Monday, I want to ... ." 
//If nothing is passed in, default to "go to the office".
const mondayWork = function(activity = 'go to the office') {
    console.log(`This Monday, I will ${activity}`);
     return `This Monday, I will ${activity}.`;
}

mondayWork();

//Function wrapAdjective return a inner function.
//This "inner" function takes a single parameter that default to "special"(it's an adjective).
//return a String of the form "You are ..." where ... is the adjective this function received wrapped in visual flair.
//It should take as parameter 'String' that will be used to create visual flair

function wrapAdjective(string = "*") {

    return function (x = 'special') {
            return (`You are ${string}${x}${string}!`);
        }
}


wrapAdjective("<")("a dedicated programmer");