import React, { useState } from "react";
import booksData from "./Utils/books";

function App() {
  const [books, setBooks] = useState(booksData);

  const addBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru " + (books.length + 1),
      author: "Author Baru",
      year: 2025,
      description: "Deskripsi buku baru ditambahkan.",
      image: "https://via.placeholder.com/150x200?text=Buku+Baru"
    };
    setBooks([...books, newBook]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Daftar Buku</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={addBook}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          ➕ Tambah Buku
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px"
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              textAlign: "center",
              padding: "15px"
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: "150px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "5px"
              }}
            />
            <h3 style={{ margin: "10px 0" }}>{book.title}</h3>
            <p style={{ margin: "5px 0" }}>
              <b>Author:</b> {book.author}
            </p>
            <p style={{ margin: "5px 0" }}>
              <b>Tahun:</b> {book.year}
            </p>
            <p style={{ fontSize: "14px", color: "#555" }}>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
