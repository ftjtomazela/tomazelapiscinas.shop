// Configuração do Uber Moto Conchas
const firebaseConfig = {
  apiKey: "AIzaSyDmtTBGw2ZxtKaUlbD5BlPgwQO26VFyyzU",
  authDomain: "ubermotoconchas.firebaseapp.com",
  projectId: "ubermotoconchas",
  storageBucket: "ubermotoconchas.firebasestorage.app",
  messagingSenderId: "697414710628",
  appId: "1:697414710628:web:597892e4ba169fa4de7671",
  measurementId: "G-3LF6T0KEVF"
};

// INICIALIZAÇÃO (Obrigatória para funcionar)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("Firebase conectado!");