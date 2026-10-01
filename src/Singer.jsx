export default function Singer({ name, age, gender }) {
  const singerStyle = {
    margin: "20px",
    padding: "20px",
    backgroundColor: "lightpink",
    borderRadius: "10px",
    border: "5px solid pink",
  };

  return (
    <div style={singerStyle}>
      <h1>Singers Name: {name} </h1>
      <h1>Singers Age: {age}</h1>
      <h1>Singers Gender: {gender}</h1>
    </div>
  );
}
