importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// ВСТАВЬ СЮДА СВОИ ДАННЫЕ ИЗ firebase_options.dart (только значения!)
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "flutter-chat-app...",
  projectId: "flutter-chat-app...",
  storageBucket: "flutter-chat-app...",
  messagingSenderId: "123456...",
  appId: "1:123456...:web:..."
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Получено фоновое сообщение: ', payload);
});