<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB-G9TAjjwAIfbC5qCrDRrqQykl-skn3v4",
    authDomain: "curitoken-87a26.firebaseapp.com",
    projectId: "curitoken-87a26",
    storageBucket: "curitoken-87a26.firebasestorage.app",
    messagingSenderId: "698884646705",
    appId: "1:698884646705:web:ebfb0fa5c8e943ade23210",
    measurementId: "G-C155DRCN40"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>