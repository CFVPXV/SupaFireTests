const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('../database-2-402823-cf2456cb989f.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const patientDataRef = db.collection("patientData");

async function execute_eq(){
    let eq_snapshot; 
    for(let i=0; i < 10; i++){
            console.time("Equal");
            eq_snapshot = await patientDataRef.where("age", "==", 32).get();
            console.timeEnd("Equal");
    }
}

execute_eq();