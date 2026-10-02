//Actor2.jsx Style using inline style declaring object
const actor2Style = {
  margin: "20px",
  padding: "20px",
  backgroundColor: "lightyellow",
  borderRadius: "10px",
  border: "5px solid yellow",
};

export default function Actor2({ name, age, gender }) {
  return (
    <div style={actor2Style}>
      <h1>Actor2 Component</h1>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Gender: {gender}</h2>
    </div>
  );
}
