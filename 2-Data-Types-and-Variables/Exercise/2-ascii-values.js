function values(param1, param2, param3) {
  let reversed = param3 + param2 + param1;
  let result = ''
  for (let i = 0; i < reversed.length; i++) {
    result += `${reversed.charCodeAt(i)} `;
  }

  console.log(reversed);
  console.log(result);
}

values('a', 'b', 'c');