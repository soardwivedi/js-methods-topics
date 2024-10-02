for (let i = 1; i <= 5; i++) {
  // console.log("*");
  for (let j = 1; j <= i; j++) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}
