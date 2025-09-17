importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');
firebase.initializeApp({
        apiKey: "YOUR API KEY",
        authDomain: "YOUR AUTH DOMAIN",
        projectId: "YOUR PROJECT ID",
        storageBucket: "YOUR STORAGE BUCKET",
        messagingSenderId: "YOUR MESSAGING SENDER ID",
        appId: "YOUR APP ID",
        measurementId: "YOUR MEASUREMENT ID"
});
const messaging = firebase.messaging();