const listColors = ["green", "yellow", "blue", "orange", "red"];
 
const getRandomColors = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() *7)

  if (randomNumber > 4) {
    return reject ('Failed to get random color, please try again')
  }
  return resolve('The color we get is a ' + listColors[randomNumber])
}, 3000);

getRandomColors
.then(response => console.log(response))
.then(err => console.log(err))

console.log("loading starts..");
console.log("generating random color...");