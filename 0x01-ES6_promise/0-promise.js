export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve(setTimeout((() => {
      resolve("Success");
    }, 5000)))
  })
}
