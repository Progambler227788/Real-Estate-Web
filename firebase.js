  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const propertyType = document.getElementById('propertyType').value;
      const propertyCategory = document.getElementById('propertyCategory').value;
      const numberOfRooms = document.getElementById('numberOfRooms').value;
      const address = document.getElementById('address').value;
      const city = document.getElementById('city').value;
      const country = document.getElementById('country').value;
      const area = document.getElementById('area').value;
      const size = document.getElementById('size').value;
      const price = document.getElementById('price').value;
      const propertyName = document.getElementById('propertyName').value;
      const condition = document.getElementById('condition').value;
      const contact = document.getElementById('contact').value;
      const yourName = document.getElementById('yourName').value;

      try {
        await addDoc(collection(db, 'properties'), {
          propertyType,
          propertyCategory,
          numberOfRooms,
          address,
          city,
          country,
          area,
          size,
          price,
          propertyName,
          condition,
          contact,
          yourName
        });
        alert('Property details submitted successfully!');
        form.reset();
      } catch (error) {
        console.error('Error adding document: ', error);
        alert('Error submitting the form, please try again.');
      }
    });
  });

