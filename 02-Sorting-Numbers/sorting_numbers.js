//insert your pseudocode below
/*
* create a variable list to store the numbers 
*created a list of ascending order
*printed the sort of numeric in an ascending order
*/

//insert your code below
var list;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


list = [1, 5, 7];
window.alert(list.slice().sort(listsGetSortCompare("NUMERIC", 1)));