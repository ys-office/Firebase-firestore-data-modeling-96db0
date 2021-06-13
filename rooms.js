
// Ref : https://www.freecodecamp.org/news/the-firestore-tutorial-for-2020-learn-by-example/

const admin = require('firebase-admin');

const serviceAccount = require('./firestore-data-modeling-96db0-firebase-adminsdk-n3i63-0670471cc1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const messageRef = db.collection('rooms').doc('roomA').collection('messages'); //.doc('message1');

messageRef
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data()['from']);
      // alex
    });
    const data = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
    console.log(data);
    // [ { from: 'alex', msg: 'Hello World!' } ]
  });
