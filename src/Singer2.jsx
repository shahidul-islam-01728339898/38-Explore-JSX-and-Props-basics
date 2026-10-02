const styleSinger2 = {
  color: "blue",
  backgroundColor: "lightgray",
  margin: "20px",
  padding: "20px",
  border: "5px solid #007bff",
  borderRadius: "10px",
};

export default function Singer2({ id, name, age, gender }) {
  return (
    <div style={styleSinger2}>
      <h1>Singer2 Component</h1>
      <h2>Id: {id}</h2>
      <h2> Name:{name}</h2>
      <h2> Age:{age}</h2>
      <h2> Gender:{gender}</h2>
    </div>
  );
}
