function createLoadingBar(num) {
  if (num === 100) {
    console.log('100% Complete!');
    console.log('[%%%%%%%%%%]');
    return;
  } else if (num === 0) {
    console.log('0% [..........]');
    console.log('Still loading...');
    return;
  }

  visualizeBar(num);

  function removeLastNum(n) {
    return n / 10;
  }

  function visualizeBar(n) {
    let loadingBar = '[';
    for (let i = 1; i <= 10; i++) {
      if (i <= removeLastNum(num)) {
        loadingBar += '%';
      } else {
        loadingBar += '.';
      }
    }
    loadingBar += ']'
    console.log(`${n}% ${loadingBar}`);
    console.log('Still loading...');
  }
}

createLoadingBar(100);