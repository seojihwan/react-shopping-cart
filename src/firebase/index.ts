import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDJIR9tNvx2GeW-lcthuEtIybiuX5tISJg',
  authDomain: 'shopping-cart-b19dd.firebaseapp.com',
  projectId: 'shopping-cart-b19dd',
  storageBucket: 'shopping-cart-b19dd.appspot.com',
  messagingSenderId: '171150195701',
  appId: '1:171150195701:web:ebaf10b224d539eda7febc',
  measurementId: 'G-36XKXQ44FX',
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
