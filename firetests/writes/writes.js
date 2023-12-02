let csvToJson = require('convert-csv-to-json');

let fileInputName = '../../cancer_patient_data_sets.csv'; 
let fileOutputName = 'out.json';

let ech = csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);

console.log(ech);

const fs = require("fs");

fs.writeFile("./out.json", JSON.stringify(ech, null, 2), function(err){
    if (err) {
        return console.log(err);
    }
  })


/*
fs.createReadStream("../../cancer_patient_data_sets.csv")
  .pipe(parse({ delimiter: ",", from_line: 2}))
  .on("data", function (row) { 
        let name = row[0];
        let patData = {};
        let datuser = {};
        patData = Object.assign(
        datuser[name] = {
        'age': parseInt(row[1]),
        'gender': parseInt(row[2]),
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
  });
  fs.writeFile("./out.json", JSON.stringify(patData, null, 2), function(err){
    if (err) {
        return console.log(err);
    }
  })})
    
.on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });
*/