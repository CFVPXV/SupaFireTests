const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { uniqueNamesGenerator, names } = require('unique-names-generator');

const serviceAccount = require('./database-2-402823-cf2456cb989f.json');

initializeApp({
  credential: cert(serviceAccount)
});

const config = {
    dictionaries: [names]
}

let domains = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@protonmail.com"];
  
let firstName;
let lastName;
let number;

for(let i = 0; i < 1000; i++){
  firstName = uniqueNamesGenerator(config);
  lastName = uniqueNamesGenerator(config);
  number = parseInt(Math.random() * 100);
getAuth()
  .createUser({
    email: firstName + number + domains[i%4],
    emailVerified: false,
    password: 'password' + i,
    displayName: firstName + " " + lastName,
    disabled: false,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });

}
