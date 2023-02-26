import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCb4z6la5mYTVXYDrYMuKLflWcdHYU-blU",
    authDomain: "todoist-db-8a539.firebaseapp.com",
    projectId: "todoist-db-8a539",
    storageBucket: "todoist-db-8a539.appspot.com",
    messagingSenderId: "771803694586",
    appId: "1:771803694586:web:12595df2cd53b861ed5043"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { firebaseConfig as firebase };