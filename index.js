var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});