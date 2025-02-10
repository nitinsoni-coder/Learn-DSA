function printRoman(num) {
  const val = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const symbol = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];

  let i = 12;
  let str = "";
  while (num > 0) {
    let div = Math.floor(num / val[i]);

    num = num % val[i];

    while (div--) {
      str += symbol[i];
    }
    i--;
  }
}

let num = 3549;
console.log(printRoman(num));
