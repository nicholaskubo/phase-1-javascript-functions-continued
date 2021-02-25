function saturdayFun (funEvent="roller-skate") {
    return (`This Saturday, I want to ${funEvent}!`);
}



function mondayWork (event="go to the office") {
    return (`This Monday, I will ${event}.`);
}




function wrapAdjective (visualFlair="*") {
    return function (xxx= "special") {
        return `You are ${visualFlair}${xxx}${visualFlair}!`
    }
}

wrapAdjective("%")("a dedicated programmer")
