import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDFKbEn6NgJNbHzy5KKoNjZ_XfG2rmXRu4",
    authDomain: "kanban-e994f.firebaseapp.com",
    databaseURL: "https://kanban-e994f.firebaseio.com",
    projectId: "kanban-e994f",
    storageBucket: "kanban-e994f.appspot.com",
    messagingSenderId: "584255315770"
  };

  const firebaseapp = firebase.initializeApp(config)

  export default firebaseapp.database()
  
