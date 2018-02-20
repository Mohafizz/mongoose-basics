const mongoose = require("mongoose");
const Author = require("./models/author");
const Book = require("./models/book");

mongoose.connect("mongodb://localhost/mongoose_basics", async function(err) {
  if (err) throw err;

  console.log("Successfully connected");

  var jamieAuthor = new Author({
    _id: new mongoose.Types.ObjectId(),
    name: {
      firstName: "Jamie",
      lastName: "Munro"
    },
    biography:
      "Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.",
    twitter: "https://twitter.com/endyourif",
    facebook: "https://www.facebook.com/End-Your-If-194251957252562/"
  });

  await jamieAuthor.save();

  console.log("Author successfully saved.");

  var mvcBook = new Book({
    _id: new mongoose.Types.ObjectId(),
    title: "ASP.NET MVC 5 with Bootstrap and Knockout.js",
    author: jamieAuthor._id,
    ratings: [
      {
        summary: "Great read"
      }
    ]
  });

  await mvcBook.save();

  console.log("MVC Book successfully saved.");

  var knockoutBook = new Book({
    _id: new mongoose.Types.ObjectId(),
    title: "Knockout.js: Building Dynamic Client-Side Web Applications",
    author: jamieAuthor._id
  });

  await knockoutBook.save();

  console.log("Knockout.JS Book successfully saved.");

  const books = await Book.find({
    title: /mvc/i
  })
    .sort("-created")
    .limit(5)
    .exec();
  console.log("Found books with `MVC` in the name", books);
});
