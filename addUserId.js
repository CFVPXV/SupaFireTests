const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth')

const serviceAccount = require('./database-2-402823-cf2456cb989f.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const auth = getAuth();

console.log(await auth.listUsers())

/*
db.collection("patientData").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        doc.ref.update({
            'age': parseInt(row[1]),
            'gender': parseInt(row[2]),
            'air_pollution': parseInt(row[3]),
            'alcohol_use': parseInt(row[4]),
            'dust_allergy': parseInt(row[5]),
            'occupational_hazards': parseInt(row[6]),
            'genetic_risk': parseInt(row[7]),
            'chronic_lung_disease': parseInt(row[8]),
            'balanced_diet': parseInt(row[9]),
            'obesity': parseInt(row[10]),
            'smoking': parseInt(row[11]),
            'passive_smoker': parseInt(row[12]),
            'chest_pain': parseInt(row[13]),
            'choughing_of_blood': parseInt(row[14]),
            'fatigue': parseInt(row[15]),
            'weight_loss': row[16],
            'shortness_of_breath': row[17],
            'wheezing': row[18],
            'swallowing_difficulty': row[19],
            'clubbing_of_finger_nails': row[20],
            'frequent_cold': row[21],
            'dry_cough': row[22],
            'snoring': row[23],
            'level': row[24]
      });
    });
});*/