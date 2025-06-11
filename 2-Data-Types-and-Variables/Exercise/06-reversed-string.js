function reversedString(param) {
  let reversed = '';
  for (let i = param.length - 1; i >= 0; i--) {
    reversed += param[i];
  }
  console.log(reversed);
}

reversedString('Hello');