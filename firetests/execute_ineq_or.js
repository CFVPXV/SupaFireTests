const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('../database-2-402823-cf2456cb989f.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const patientDataRef = db.collection("patientData");

async function execute_ineq_or(){
    let ineq_or_snapshot;
    for(let i=0; i < 10; i++){
        console.time("IneqOr")
        ineq_or_snapshot = await patientDataRef.where(Filter.or(Filter.where("age", ">", 32), Filter.where("chest_pain", "==", 3))).get();
        console.timeEnd("IneqOr")
    }
}

execute_ineq_or();