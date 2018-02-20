var mongoose = require("mongoose");

var authorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    firstName: String,
    lastName: String
  },
  biography: String,
  twitter: String,
  facebook: String,
  linkedin: String,
  profilePicture: Buffer,
  created: {
    type: Date,
    default: Date.now
  }
});

var bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  summary: String,
  isbn: String,
  thumbnail: Buffer,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  },
  ratings: [
    {
      summary: String,
      detail: String,
      numberOfStars: Number,
      created: {
        type: Date,
        default: Date.now
      }
    }
  ],
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.connect("mongodb://localhost/mongoose_basics", function(err) {
  if (err) throw err;

  console.log("Successfully connected");
});
