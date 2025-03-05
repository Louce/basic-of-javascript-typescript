let date1 = new Date('2024-03-19');
let date2 = new Date('2024-03-21');

let difference_Months = date2.getTime() - date1.getTime();
let difference_Days = difference_Months / (1000 * 3600 * 24);

console.log(difference_Days); 