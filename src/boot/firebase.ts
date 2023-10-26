import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBjbwxdoHDlHUmdDE-XlSi6fhiXaen29n4',
  authDomain: 'proyecto-quasar-fpi23.firebaseapp.com',
  projectId: 'proyecto-quasar-fpi23',
  storageBucket: 'proyecto-quasar-fpi23.appspot.com',
  messagingSenderId: '441247725352',
  appId: '1:441247725352:web:355a8fc38787a41d6b821d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default boot(({ app }) => {
  app.provide('firebase', app);
});
export { db };
