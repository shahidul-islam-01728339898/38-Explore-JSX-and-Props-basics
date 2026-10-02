// export default function Todo2({ task, isDone }) {
//   return (
//     <div>
//       <h1>Todo2 Component</h1>
//       <h2>Done: {task}</h2>
//       <h2>Is Done: {isDone ? "Yes" : "No"}</h2>
//     </div>
//   );
// }
const todoStyle = {
  margin: "20px",
  padding: "20px",
  backgroundColor: "lightblue",
  borderRadius: "10px",
  border: "5px solid blue",
};

// export default function Todo2({ task, isDone }) {
//   return (
//     <div style={todoStyle}>
//       <h1>Todo2 Component</h1>
//       <h2>Task: {task}</h2>
//       <h2>Is Done: {isDone ? "Yes" : "No"}</h2>
//     </div>
//   );
// }

export default function Todo2({ task, isDone }) {
  return (
    <div style={todoStyle}>
      <h1>Todo2 Component</h1>
      <h2>Task: {task}</h2>
      <h2>Is Done: {isDone ? "Yes" : "No"}</h2>
    </div>
  );
}
