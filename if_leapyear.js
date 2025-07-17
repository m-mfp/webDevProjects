function isLeapYear(num) {

    if (num % 100 == 0 && num % 400 != 0) {
      return `${num} is not a leap year.`
    } else if (num % 4 == 0) {
      return num + " is a leap year."
    } else {
      return num + " is not a leap year."
    };
  
};

let year = 2024;
let result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);

year = 1990;
result = isLeapYear(year);
console.log(result);