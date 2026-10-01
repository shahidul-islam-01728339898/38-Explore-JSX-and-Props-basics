// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return (
//       <div>
//         <h1> Task: {task} Completed</h1>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1> Task: {task} Not Completed</h1>
//       </div>
//     );
//   }
// }

//Condtiotnal Rendering using Ternary Operator option: 03
// export default function Todo({ task, isDone }) {
//   return (
//     <div>
//       <h1>
//         Task: {task} {isDone ? "Completed" : "Not Completed"}
//       </h1>
//     </div>
//   );
// }

// //Conditional rendering using && operator option: 04
// export default function Todo({ task, isDone }) {
//   return (
//     <h1>
//       {task} {isDone && "Not Completed Do It Now!"}
//     </h1>
//   );
// }

//Conditional rendering using || operator option: 05
// export default function Todo({ task, isDone }) {
//   return (
//     <h1>
//       {/* {task}
//       {isDone && "Not Completed Do It Now!"} */}
//       {task}
//       {isDone || "Not Completed Do It Now!"}
//     </h1>
//   );
// }

//Conditional rendering using if else statement decleation of variable option: 06

// export default function Todo({ task, isDone }) {
//   let listItem;
//   if (isDone) {
//     listItem = <h1>Task: {task} Completed Option 6 </h1>;
//   } else {
//     listItem = <h1>Task: {task} Not Completed option 6 </h1>;
//   }
//   return listItem;
// }
