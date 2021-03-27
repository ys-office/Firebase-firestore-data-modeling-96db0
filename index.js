const admin = require('firebase-admin');

const serviceAccount = require('./firestore-data-modeling-96db0-firebase-adminsdk-n3i63-0670471cc1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function quickstartListen(db) {
    // [START quickstart_listen]
    // [START firestore_setup_dataset_read]
    const snapshot = await db.collection('users').get();
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
    // [END firestore_setup_dataset_read]
    // [END quickstart_listen]
  }

  quickstartListen(db);
  