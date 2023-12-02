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

async function execute_eq(){
    let eq_snapshot; 
    for(let i=0; i < 10; i++){
            console.time("Equal");
            eq_snapshot = await patientDataRef.where("age", "==", 32).get();
            console.timeEnd("Equal");
    }
}

async function execute_ineq(){
    let ineq_snapshot;
    for(let i=0; i < 10; i++){
            console.time("Ineq");
            ineq_snapshot = await patientDataRef.where("age", ">", 32).get();
            console.timeEnd("Ineq");
    }
}

async function execute_ineq_and(){
    let ineq_and_snapshot;
    for(let i=0; i < 10; i++){
        console.time("IneqAnd")
        ineq_and_snapshot = await patientDataRef.where("age", ">", 32).where("chest_pain", "==", 5);
        console.timeEnd("IneqAnd")
    }
}

async function execute_ineq_or(){
    let ineq_or_snapshot;
    for(let i=0; i < 10; i++){
        console.time("IneqOr")
        ineq_or_snapshot = await patientDataRef.where(Filter.or(Filter.where("age", ">", 32), Filter.where("chest_pain", "==", 3))).get();
        console.timeEnd("IneqOr")
    }
}

execute_all();
execute_eq();
execute_ineq();
execute_ineq_and();
execute_ineq_or();