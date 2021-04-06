const admin = require('firebase-admin');

const serviceAccount = require('./firestore-data-modeling-96db0-firebase-adminsdk-n3i63-0670471cc1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const authorId = 'dr-seuss';

// 4. Embedded One-to-Many
const authorWithBooks = db.collection('authors').doc(authorId)


// 5. Subcollection
const books = db.collection('authors').doc(authorId).collection('books');


// 6. Root Collection, requires index
const booksFrom1971 = db.collection('books')
    .where('author', '==', authorId)
    .where('published', '>', 1971);
