const styleLibrary = {
  backgroundColor: "lightblue",
  padding: "20px",
  margin: "20px",
  borderRadius: "10px",
  border: "5px solid blue",
};

export default function Library({ id, name, author, price }) {
  return (
    <div style={styleLibrary}>
      <h1 style={{ color: "darkblue", textDecoration: "underline" }}>
        Library Management System
      </h1>
      <h2>Book ID: {id}</h2>
      <h2>Book Name: {name}</h2>
      <h2>Book Author: {author}</h2>
      <h2>Book Price: {price}</h2>
    </div>
  );
}
