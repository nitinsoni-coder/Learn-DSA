function factorial(n) {
  let f = BigInt(1);

  for (let i = 2; i <= n; i++) {
    f *= BigInt(i);
  }

  return f;
}

console.log(factorial(20));
