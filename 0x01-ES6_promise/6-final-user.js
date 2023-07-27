import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      SpeechRecognitionResultList.map((result) => ({
        status: result.status,
        value: result.value || `Error: ${result.reason.message}`,
      }));
    });
}
