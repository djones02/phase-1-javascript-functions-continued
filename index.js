// code your solution here
function saturdayFun(choice = 'roller-skate') {
    return `This Saturday, I want to ${choice}!`
}
function mondayWork(choice = 'go to the office') {
    return `This Monday, I will ${choice}.`
}
function wrapAdjective(scope = '*') {
    return function(string = 'special') {
        return `You are ${scope}${string}${scope}!`
    }
}
wrapAdjective('||')('a dedicated programmer')