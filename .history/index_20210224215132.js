function saturdayFun (funEvent="roller-skate") {
    return (`This Saturday, I want to ${funEvent}!`);
}



function mondayWork (event="go to the office") {
    return (`This Monday, I will ${event}.`);
}



// function wrapAdjective () {
//     return function (word="special") {
//         return function (wrap = "*") {
//             return (`You are ${wrap} ${word} ${wrap}`)
//         }
//     }
// }

// wrapAdjective("%")("a dedicated programmer");

function wrapAdjective (visualFlair="*") {
    return function (xxx= "*") {
        return `You are ${visualFlair} ${xxx} ${visualFlair}`
    }
}

wrapAdjective("%")("a dedicated programmer")
