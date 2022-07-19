// code your solution here
function saturdayFun(value = 'roller-skate') {
    return `This Saturday, I want to ${value}!`;
}

function mondayWork(value = 'go to the office') {
    return `This Monday, I will ${value}.`;
}

function wrapAdjective(value = '*') {
    const txt = value;
    return function(val = 'special') {
        return `You are ${txt}${val}${txt}!`
    }
}
