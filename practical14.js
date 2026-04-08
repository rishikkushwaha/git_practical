const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/libraryDB')
  .then(async () => {
    console.log("Connected");

    const bookSchema = new mongoose.Schema({
      title: String,
      author: String,
      year: Number
    });

    const Book = mongoose.model('Book', bookSchema);

    // INSERT
    const book = new Book({
      title: "NodeJS Basics",
      author: "Nidhi",
      year: 2026
    });

    await book.save();
    console.log("Book saved");

    // READ
    let books = await Book.find();
    console.log("Books:", books);

    // UPDATE
    await Book.updateOne(
      { title: "NodeJS Basics" },
      { year: 2027 }
    );
    console.log("Book updated");

    // READ AFTER UPDATE
    books = await Book.find();
    console.log("After update:", books);

    // DELETE
    await Book.deleteOne({ title: "NodeJS Basics" });
    console.log("Book deleted");

    // FINAL CHECK
    books = await Book.find();
    console.log("After delete:", books);

    process.exit();
  })
  .catch(err => console.log(err));
