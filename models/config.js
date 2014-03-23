var mongoose = require('mongoose');


URI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/BMC';

  mongoose.connect(URI, function(err) {
    if (err) {
      return console.log(err);
    } else {
      return console.log('mongoose connected to the database.');
    }
});