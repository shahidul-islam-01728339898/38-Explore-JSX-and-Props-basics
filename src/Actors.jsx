export default function Actors({ name, age, gender }) {
  const actorsStyle = {
    margin: "20px",
    padding: "20px",
    backgroundColor: "lightyellow",
    borderRadius: "10px",
    border: "5px solid yellow",
  };

  return (
    <div style={actorsStyle}>
      <h1>Actors Name: {name}</h1>
      <h1>Actors Age: {age}</h1>
      <h1>Actors Gender: {gender}</h1>
    </div>
  );
}
