import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDdcesyX0VAlUD9P5Bke8URWFJX2M9WMeM',
  authDomain: 'e-scrapmart.firebaseapp.com',
  projectId: 'e-scrapmart',
  storageBucket: 'e-scrapmart.appspot.com',
  messagingSenderId: '535751882714',
  appId: '1:535751882714:web:80ceef4918c33eedc8b2e3',
};

 
 if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig); 
  }
  export default firebase.firestore();