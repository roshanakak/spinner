const spinner2 = function() {
  const sentence =  ['\r|   ', '\r/   ', '\r-   ', '\r\\   \n'];
  let delay = -100;
  for (const char of sentence) {
    delay += 200;
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
  }  
};

spinner2();