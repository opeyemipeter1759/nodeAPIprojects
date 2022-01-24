const fs = require("fs")
const superagent = require("superagent")


const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not find that file 😢")
      resolve(data)
    })
  })
}

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Could not write file 😢")
      resolve("success")
    })
  })
}

readFilePro( `${ __dirname }/dog.txt` ).then(
    ( data ) =>
    { 
        console.log( `Breed: ${ data }` )
        return superagent.get(
          `https://dog.ceo/api/breed/${data}/images/random`
        )
    }
).then( res =>
{
    console.log( res.body.message )
    return writeFilePro("dog-img.txt", res.body.message)
} ).then( () =>
{
    console.log("Random dog image saved to file!")
} ).catch( err =>
{
    console.log( err.message)
})

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`breed : ${data}`);

//   // get dog api
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       if (err) return console.log(err.message);

//       console.log(`dog image : ${res.body.message}`);

//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log("Random dog image  saved");
//       });
//     })
//     .catch((err) => {
//       if (err) return console.log(err.message);
//     });
// });
