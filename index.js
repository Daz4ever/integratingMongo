const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

// mongoose wants you to provide your own promise library. We'll use bluebird for
// convenience. ( you could also use the native Promise contructor)

mongoose.connect('mongodb://localhost/practice2_db');


// Using the programming language model you made in the first section, write a Node program to create a programming language in the DB.
const Album = mongoose.model('Album', {

  name: [String],
  artist: [String],
  released: [Date],
  tracks: [
    {
      name: String,
      songWriters: [String],
      duration: [Number]
    }
  ],

  personnel: [
    {
      name: String,
      instrument: [String]
    }
  ]

});

const Inventor = {
  name: { type: [String], required: true },
  website: String
};

const Language = mongoose.model('Language', {
  name: { type: String, required: true },
  website: String,
  dateFirstAppeared: { type: Date, required: true },
  inventors: {
    type: [Inventor],
    required: true
  },
  paradigms: [String],
  typingDiscipline: [String]
});


var python = new Language ({
  name: 'Python',
  website: 'www.python.org',
  dateFirstAppeared: new Date('1991-02-20'),
  inventors: [{
    name: 'Mr. Smith'
  }],
  paradigms: ['object-oriented', 'imperative', 'functional', 'procedural', 'reflective'],
  typingDiscipline: ['duck', 'dynamic', 'strong', 'gradual']
});

python.save();

// var java = new Language ({
//   name: 'Java',
//   website: 'www.Java.org',
//   dateFirstAppeared: new Date('1995-01-15'),
//   inventors: [{
//     name: 'James Gosling',
//     website: 'james.github.io'
//   }],
//   paradigms: ['object-oriented', 'imperative', 'structured', 'generic', 'reflective', 'concurrent'],
//   typingDiscipline: ['strong', 'safe', 'manifest', 'nominative']
// });
//
// java.save();
//
// // Write a program to find all programming languages in the collection.
//
// Language.find()
// .then(function(docs){
//   console.log('Results', docs);
// })
// .catch(function(err) {
//   console.log(err);
// });
//
// // Write a program to find a programming language by its name.
//
// Language.find({name: 'Python'})
// .then(function(docs){
//   console.log('Results', JSON.stringify(docs));
// });
// .catch(function(err) {
//   console.log(err);
// });
//
// // Write a program to update a programming language's website URL.
//
// Language.update(
//   {name: 'Python'},
//   {
//     $set: {
//       website: 'www.python.com'
//     }
//   }
// ).then(function(docs){
//   console.log('Results', docs);
// })
// .catch(function(err) {
//   console.log(err);
// });
//
// // Write a program to find a programming language by its name, then print out its object ID.
//
// Language.find( {name: 'Python'})
// .then(function(docs){
//   console.log(docs[0]._id);
// })
// .catch(function(error){
//   console.log(err);
// });
