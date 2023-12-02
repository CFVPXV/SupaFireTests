const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('../database-2-402823-cf2456cb989f.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const patientDataRef = db.collection("patientData");

async function execute_all(){
    let all_snapshot;
    for(let i=0; i < 10; i++){
        console.time("Select All");
        all_snapshot = await patientDataRef.get();
        console.timeEnd("Select All");
    }
}

execute_all();