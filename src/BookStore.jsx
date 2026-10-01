export default function BookStore({ id, name, author, price }) {
  const bookStoreStyle = {
    margin: "20px",
    padding: "20px",
    backgroundColor: "lightgray",
    borderRadius: "10px",
    border: "5px solid gray",
  };
  return (
    <div style={bookStoreStyle}>
      <h1>Book Store</h1>
      <h2>Book Id = {id}</h2>
      <h2>Book Name = {name}</h2>
      <h2>Book Author = {author}</h2>
      <h2>Book Price = ${price.toFixed(2)}</h2>
    </div>
  );
}
