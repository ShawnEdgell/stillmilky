import { db } from './firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

async function addTestData() {
  try {
    const docRef = await addDoc(collection(db, 'testCollection'), {
      name: 'Test User',
      email: 'test@example.com'
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

async function getTestData() {
  const querySnapshot = await getDocs(collection(db, 'testCollection'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

export { addTestData, getTestData };
