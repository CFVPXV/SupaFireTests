const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./database-2-402823-cf2456cb989f.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const fs = require("fs");
const { parse } = require("csv-parse");

/*db.collection("patientData").doc("EvenHere").create({
    "Object":"Victory"
})*/

fs.createReadStream("./cancer_patient_data_sets.csv")
  .pipe(parse({ delimiter: ",", from_line: 2}))
  .on("data", function (row) {
    db.collection('patientData').doc(row[0]).set({
        'age': parseInt(row[1]),
        'gender': row[2],
        'air_pollution': row[3],
        'alcohol_use': row[4],
        'dust_allergy': row[5],
        'occupational_hazards': row[6],
        'genetic_risk': row[7],
        'chronic_lung_disease': row[8],
        'balanced_diet': row[9],
        'obesity': row[10],
        'smoking': row[11],
        'passive_smoker': row[12],
        'chest_pain': row[13],
        'choughing_of_blood': row[14],
        'fatigue': row[15],
        'weight_loss': row[16],
        'shortness_of_breath': row[17],
        'wheezing': row[18],
        'swallowing_difficulty': row[19],
        'clubbing_of_finger_nails': row[20],
        'frequent_cold': row[21],
        'dry_cough': row[22],
        'snoring': row[23],
        'level': row[24]
  })
    console.log(row);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });
