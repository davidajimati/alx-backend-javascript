import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      console.log(data[1].body, data[0].firstName, data[0].lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
