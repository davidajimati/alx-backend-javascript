export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve(setTimeout((() => {
      resolve("Success"); u
    }, 5000)))
  })
}
