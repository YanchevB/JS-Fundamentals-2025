function rounding(num, precision) {
  if (precision > 15) {
    console.log(Number(num.toFixed(15)));
  } else {
    console.log(Number(num.toFixed(precision)));
  }
}