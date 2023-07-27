export default function getResponseFromAPI() {
  const a = 4;
  const b = 3;
  return new Promise((resolve, reject) => {
    if (a > b) {
      resolve(setTimeout((() => {
        resolve('Success');
      }, 5000)));
    } else {
      reject(new Error());
    }
  });
}
