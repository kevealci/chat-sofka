// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from 'firebase/app';

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: 'AIzaSyARCm1fakeJsRCXIFVIVI1aomhtbChTLQ0',
  authDomain: 'chat-sofka-79a27.firebaseapp.com',
  projectId: 'chat-sofka-79a27',
  storageBucket: 'chat-sofka-79a27.appspot.com',
  messagingSenderId: '883160448167',
  appId: '1:883160448167:web:019fbc6947a1810204ef82'
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
