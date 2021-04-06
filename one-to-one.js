const admin = require('firebase-admin');

const serviceAccount = require('./firestore-data-modeling-96db0-firebase-adminsdk-n3i63-0670471cc1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const userId = 'ayn-rand';

// 1. Embedded, all data contained on single document, One-to-few
const authorWithAccount = db.collection('authors').doc(userId)

// 2. Shared Document ID
const author = db.collection('authors').doc(userId)
const account = db.collection('account').doc(userId);


// 3. Join related documents with different IDs, 
const getAccount = async (userId) => {
    const snapshot = await db.collection('authors').doc(userId).get();
    const user = snapshot.data();

    return db.collection('accounts').doc(user.accountId)
}

getAccount;
const snapshot = db.collection('authors').doc(userId).get();
const user = snapshot.data();

db.collection('accounts').doc(user.accountId)
