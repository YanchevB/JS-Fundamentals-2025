function echoType(param) {
  console.log(typeof(param));
  if (typeof(param) === 'string') {
    console.log(param);
  } else if (typeof(param) === 'number') {
    console.log(param);
  } else {
    console.log('Parameter is not suitable for printing');
  }
}

echoType('Hello')