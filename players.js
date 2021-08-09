const admin = require('firebase-admin');

const serviceAccount = require('./firestore-data-modeling-96db0-firebase-adminsdk-n3i63-0670471cc1.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

(async () => {
  try {
    const playersBingosRef = db.collection('players').doc('lKwWVAui2ahU7szDnNiH').collection('activities').doc('aFFMqt1Ozst4JyjTHQ5B').collection('bingos').doc('1fyRgrmvPegzxLdZ2yCF');
    const playersBingosDoc = await playersBingosRef.get();
    console.log(playersBingosDoc.data());
    const sheetsRef = db.collection('sheets').doc('FkFEuKHoapv6BnpUvXa6');
    const sheetsDoc = await sheetsRef.get();
    console.log(sheetsDoc.data());
    console.log(sheetsDoc.get('name'));
    const eventsRef = db.collection('events').doc('oLia7xb5rEv1S9e623Qj');
    const eventsDoc = await eventsRef.get();
    console.log(eventsDoc.data());
    console.log(eventsDoc.get('name'));
  } catch (e) {
    console.log(`Exception: ${JSON.stringify(e)}`);
  }
})();
