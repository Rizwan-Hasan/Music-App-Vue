import { initializeApp } from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQao33AOf5PQJq_LcsiQHuiViZcPy5-n8',
  authDomain: 'musicvue486.firebaseapp.com',
  projectId: 'musicvue486',
  storageBucket: 'musicvue486.appspot.com',

  appId: '1:993036739407:web:1ef80af525d3d807d19b3a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
