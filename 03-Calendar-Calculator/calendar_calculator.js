//insert your pseudocode below
/*
*create 2 variable
*First variable days of the months and the other is number of the months.
*add the sum of the last months up-to-date. 
*make list of variable to sums which are created
*The variable should be added with sums required
*for every month I define, I will check how many day are there before 
then the month selected will be equal to the sum of earlier months eg. 31 + 28.
*I will also checked the name of the month against the name that i have.
*calculate the asked number by adding the day of the month with the day from the month
print:
*Example
*variable = April
*variable = 4
*days before = 31 + 28 + 31 =
*result = 90 + 4 =94
print:
*/

//Insert your code below
var months, days, result;


months = 'April';
days = 4;
if (months == 'January') {
  result = 0 + days;
}
if (months == 'February') {
  result = 31 + days;
}
if (months == 'March') {
  result = 59 + days;
}
if (months == 'April') {
  result = 90 + days;
}
if (months == 'May') {
  result = 120 + days;
}
window.alert(result);