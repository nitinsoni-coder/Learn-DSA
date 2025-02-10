function isRotated(str1, str2) {
  let n = str1.length;
  let clockwise = true,
    antiClockWise = true;

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < n; i++) {
    if (str1[i] !== str2[(i + 2) % n]) {
      clockwise = false;
      break;
    }
  }

  for (let i = 0; i < n; i++) {
    if (str1[(i + 2) % n] !== str2[i]) {
      antiClockWise = false;
      break;
    }
  }

  return clockwise || antiClockWise;
}

let str1 = "amazon";
let str2 = "azonam";

console.log(isRotated(str1, str2));
