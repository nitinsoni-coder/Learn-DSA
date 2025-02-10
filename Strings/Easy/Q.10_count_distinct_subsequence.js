function countSub(s) {
  let map = new Map();
  // Iterate from 0 to s.length()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], -1);
  }

  console.log("--map---", map);

  let allCount = 0;
  let levelCount = 0;

  // Iterate from 0 to s.length()
  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    console.log("--c---", c)

    // Check if i equal to 0
    if (i == 0) {
      allCount = 1;
      map.set(c, 1);
      levelCount = 1;
      continue;
    }

    // Replace levelCount with
    // allCount + 1
    levelCount = allCount + 1;

    // If map is less than 0
    if (map.get(c) < 0) {
      allCount = allCount + levelCount;
    } else {
      allCount = allCount + levelCount - map.get(c);
    }
    map.set(c, levelCount);
  }

  // Return answer
  return allCount;
}

// Driver Code
let list = ["abab", "gfg"];

for (let i = 0; i < list.length; i++) {
  let cnt = countSub(list[i]);
  let withEmptyString = cnt + 1;
  console.log(
    "With empty string count for " + list[i] + " is " + withEmptyString
  );

  console.log("Without empty string count for " + list[i] + " is " + cnt);
}
