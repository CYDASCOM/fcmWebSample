importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyD-UpcuJYqS75Nw2_nATZ-i6z9OdpQ3ETE",
  authDomain: "cydas-member-stg-ee2e7.firebaseapp.com",
  databaseURL: "https://cydas-member-stg-ee2e7-default-rtdb.firebaseio.com",
  projectId: "cydas-member-stg-ee2e7",
  storageBucket: "cydas-member-stg-ee2e7.appspot.com",
  messagingSenderId: "458758423846",
  appId: "1:458758423846:web:ca952d1116efb5f43dade7",
  measurementId: "G-JHR9H7BLDK"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });