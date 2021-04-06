
// Ref : https://www.freecodecamp.org/news/the-firestore-tutorial-for-2020-learn-by-example/

const admin = require('firebase-admin');

const serviceAccount = require('./firestore-data-modeling-96db0-firebase-adminsdk-n3i63-0670471cc1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const booksRef = db.collection('books');

// console.log(booksRef.get());

booksRef
  .get()
  .then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(data); 
    // [ { id: 'FY7PJJTw7EsS8x2hYphv', title: 'javascript' } ]
  });
