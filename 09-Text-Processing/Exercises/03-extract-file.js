function extractFile(str) {
  let file = str.split('\\').pop();
  let lastDotIndex = file.lastIndexOf('.');

  let fileName = file.substring(0, lastDotIndex);
  let extensionName = file.substring(lastDotIndex + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extensionName}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');