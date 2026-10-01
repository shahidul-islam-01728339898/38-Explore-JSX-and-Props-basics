// import Actors from "./Actors";
import "./App.css";
import BookStore from "./BookStore";
// import Singer from "./Singer";
// import Todo from "./Todo";

const appStyle = {
  textAlign: "center",
  margin: "20px",
  padding: "20px",
  border: "5px solid #aa3838",
  backgroundColor: "#587c94",
  borderRadius: "10px",
};
// const actors = [
//   { name: "John Doe", age: 30, gender: "Male" },
//   { name: "Jane Smith", age: 25, gender: "Female" },
//   { name: "Bob Johnson", age: 28, gender: "Male" },
//   { name: "Alice Williams", age: 32, gender: "Female" },
//   { name: "Michael Brown", age: 27, gender: "Male" },
// ];

// const singers = [
//   { name: "Adele", age: 33, gender: "Female" },
//   { name: "Ed Sheeran", age: 30, gender: "Male" },
//   { name: "Beyoncé", age: 39, gender: "Female" },
//   { name: "Bruno Mars", age: 36, gender: "Male" },
//   { name: "Taylor Swift", age: 31, gender: "Female" },
// ];

const books = [
  { id: "01", name: "Physics", author: "Author 1", price: 10 },
  { id: "02", name: "Chemistry", author: "Author 2", price: 15 },
  { id: "03", name: "Biology", author: "Author 3", price: 20 },
  { id: "04", name: "Mathematics", author: "Author 4", price: 25 },
  { id: "05", name: "Computer Science", author: "Author 5", price: 30 },
];
function App() {
  return (
    <div style={appStyle}>
      <h1>Vite + React: Project</h1>

      {/* <BookStore></BookStore> */}
      {books.map(({ id, name, author, price }) => (
        <BookStore id={id} name={name} author={author} price={price} />
      ))}

      {/* <Singer name="Adele Singers Default" age={33} gender="Female"></Singer>
      {singers.map(({ name, age, gender }) => (
        <Singer name={name} age={age} gender={gender}></Singer>
      ))}

      <Actors name="Bappa Raz Default" age={35} gender="Male"></Actors>
      <br></br>
      {actors.map(({ name, age, gender }) => (
        <Actors name={name} age={age} gender={gender}></Actors>
      ))} */}

      {/* <Todo task="Learn React using props :" isDone={true}></Todo>
      <Todo task="Explore JSX and Props Core Concept :" isDone={false}></Todo> */}
      {/* <Student name="John Doe" grade="A" score={95}></Student>
      <Student name="Jane Smith" grade="B" score={85}></Student>
      <Student name="Bob Johnson" grade="A" score={90}></Student>
      <Student name="Alice Williams" grade="B" score={80}></Student>
      <Student></Student> */}
      {/* <Developer></Developer> */}
      {/* <Device name="Laptop" type="Computer" />
      <Device name="Cell Phone" type="Mobile" />
      <Device name="Tablet" type="Mobile" /> */}
    </div>
  );
}

// Student component
// const studentStyle = {
//   margin: "20px",
//   padding: "20px",
//   backgroundColor: "lightcoral",
//   borderRadius: "10px",
//   border: "5px solid red",
// };

// function Student({ name = "Wasenat", grade = "A+", score = "99" }) {
//   return (
//     <div className="student" style={studentStyle}>
//       <h1>Name: {name}</h1>
//       <h2>Grade: {grade} </h2>
//       <h2>Score: {score} </h2>
//     </div>
//   );
// }

// function Developer() {
//   const developerStyle = {
//     margin: "20px",
//     padding: "20px",
//     backgroundColor: "lightblue",
//     borderRadius: "10px",
//     border: "5px solid blue",
//   };

//   return (
//     <div style={developerStyle}>
//       <h2>This is developer</h2>
//       <p>Coding: </p>
//       <p>Full Stack: </p>
//     </div>
//   );
// }

// Device component
// const deviceStyle = {
//   margin: "20px",
//   padding: "20px",
//   backgroundColor: "lightgreen",
//   borderRadius: "10px",
//   border: "5px solid green",
// };

// function Device(props) {
//   console.log(props);
//   return (
//     <div style={deviceStyle}>
//       <h1>This is device</h1>
//       <h2>Device Name: {props.name}</h2>
//       <h2>Device Type: {props.type}</h2>
//     </div>
//   );
// }

export default App;
