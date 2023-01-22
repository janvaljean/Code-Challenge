const convertNumberToRoman = (...num) => {
let resultList = []; 
let rom = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
 
  for (let i = 0; i < num.length; i++) { 
    let result = "";
  for (let key in rom) {
    while (num[i] >= rom[key]) {
      result += key;
      num[i] -= rom[key];
    }
  }resultList.push(result);
  
}
  return resultList.join(",");
};
console.log(convertNumberToRoman(82,34));