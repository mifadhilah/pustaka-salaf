const { createBookSchema } = require("../schemas/books.schema");
const supabase = require("../supabase");

// Get all books who flagged as visible, for public viewing
const getVisibleBooks = async (req, res) => {
  const { data, error } = await supabase
    .from('books')
    .select()
    .eq('is_visible', true);

  if (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }

  res.json({
    code: 200,
    message: "Books list successfully fetched",
    data: data,
    success: true
  });
};

// Get all books include the not active/not visible book
const getAllBooks = async (req, res) => {
  const { data, error } = await supabase
    .from('books')
    .select();

  if (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }

  res.json({
    code: 200,
    message: "Books list successfully fetched",
    data: data,
    success: true
  });
};

// Insert a new book
const insertBook = async (req, res) => {
  const {
    value: bookData,
    error: errorValidate
  } = createBookSchema.validate(req.body, { abortEarly: false });

  if (errorValidate) {
    return res.status(400).json({
      code: 400,
      success: false,
      message: "Validation failed",
      data: errorValidate.details.map(e => e.message)
    });
  }

  const { data, errorInsert } = await supabase
    .from('books')
    .insert(bookData)
    .select();

  if (errorInsert) {
    console.error(errorInsert);
    return res.status(500).json({ error: errorInsert.message });
  }

  res.status(200).json({
    code: 200,
    message: "Book successfully added",
    data: data,
    success: true
  });
};

// Update a book
// app.put("/books/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, author_name, genre, pages } = req.body;

//   const { data, error } = await supabase
//     .from("books")
//     .update({ title, author_name, genre, pages })
//     .eq("id", id)
//     .select();

//   if (error) return res.status(500).json({ error: error.message });
//   res.json(data[0]);
// });

// Delete a book
// app.delete("/books/:id", async (req, res) => {
//   const { id } = req.params;

//   const { error } = await supabase.from("books").delete().eq("id", id);
//   if (error) return res.status(500).json({ error: error.message });

//   res.json({ success: true });
// });

module.exports = {
  getVisibleBooks,
  getAllBooks,
  insertBook
};
