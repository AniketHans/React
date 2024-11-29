//my way
// import "./App.css";
// function App() {
//   const setBackgroundColor = (color) => {
//     document.querySelector("body").style.background = color;
//   };
//   const colors = [
//     {
//       color: "#b91c1c",
//       styleClass: "bg-red-700 m-2 rounded-3xl",
//       btnTxt: "Red",
//     },
//     {
//       color: "#1d4ed8",
//       styleClass: "bg-blue-700 m-2 rounded-3xl",
//       btnTxt: "Blue",
//     },
//     {
//       color: "#c2410c",
//       styleClass: "bg-orange-700 m-2 rounded-3xl",
//       btnTxt: "Orange",
//     },
//     {
//       color: "#a16207",
//       styleClass: "bg-yellow-700 m-2 rounded-3xl",
//       btnTxt: "Yellow",
//     },
//     {
//       color: "#be185d",
//       styleClass: "bg-pink-700 m-2 rounded-3xl",
//       btnTxt: "Pink",
//     },
//     {
//       color: "#a21caf",
//       styleClass: "bg-fuchsia-700 m-2 rounded-3xl",
//       btnTxt: "Fucia",
//     },
//     {
//       color: "#15803d",
//       styleClass: "bg-green-700 m-2 rounded-3xl",
//       btnTxt: "Green",
//     },
//   ];
//   return (
//     <div className="bg-white p-2 rounded-3xl">
//       {/* <button
//         className="bg-red m-2 rounded-3xl"
//         onClick={() => setBackgroundColor("red")}
//       >
//         Red
//       </button>
//       <button
//         className="bg-blue-700 m-2 rounded-3xl"
//         onClick={() => setBackgroundColor("blue")}
//       >
//         Blue
//       </button>
//       <button
//         className="bg-orange-700 m-2 rounded-3xl"
//         onClick={() => setBackgroundColor("orange")}
//       >
//         Orange
//       </button>
//       <button
//         className="bg-yellow-700 m-2 rounded-3xl"
//         onClick={() => setBackgroundColor("yellow")}
//       >
//         Yellow
//       </button>
//       <button
//         className="bg-pink-700 m-2 rounded-3xl"
//         onClick={() => setBackgroundColor("pink")}
//       >
//         Pink
//       </button>
//       <button
//         className="bg-fuchsia-700 m-2 rounded-3xl"
//         onClick={() => setBackgroundColor("grey")}
//       >
//         Grey
//       </button>
//       <button
//         className="bg-green-700 m-2 rounded-3xl"
//         onClick={() => setBackgroundColor("purple")}
//       >
//         Purple
//       </button> */}
//       {colors.map((color) => (
//         <button
//           key={color.color} //Key is important to be provided here.
//           className={color.styleClass}
//           onClick={() => setBackgroundColor(color.color)}
//         >
//           {color.btnTxt}
//         </button>
//       ))}
//     </div>
//   );
// }
// export default App;

//HC way

import { useState } from "react";
import "./App.css";
function App() {
  const [color, setColor] = useState("white");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
        <div className="flex flex-wrap bg-white p-2 rounded-3xl">
          <button
            className="bg-red-700 m-2 rounded-3xl"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-blue-700 m-2 rounded-3xl"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="bg-orange-700 m-2 rounded-3xl"
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="bg-yellow-700 m-2 rounded-3xl"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="bg-pink-700 m-2 rounded-3xl"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="bg-fuchsia-700 m-2 rounded-3xl"
            onClick={() => setColor("purple")}
          >
            Fushia
          </button>
          <button
            className="bg-green-700 m-2 rounded-3xl"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
