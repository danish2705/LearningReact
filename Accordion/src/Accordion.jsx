import React, { useEffect, useState } from "react";

// function Accordion({ items }) {
//   const [value, setValue] = useState(null);
//   const handleValue = (i) => {
//     if (value == i) {
//       setValue(null);
//     } else {
//       setValue(i);
//     }
//   };
//   return (
//     <div>
//       {items.map((item, i) => (
//         <div key={i} className="box" onClick={() => handleValue(i)}>
//           <h2>{item.title}</h2>
//           <span>{value === i ? "-" : "+"}</span>
//           {value === i && (
//             <div className="data">
//               <h3>{item.content}</h3>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

function Accordion({ items }) {
  const [value, setValue] = useState(null);
  const handleValue = (i) => {
    if (value === i) {
      setValue(null);
    } else {
      setValue(i);
    }
  };
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div className="items" key={i} onClick={() => handleValue(i)}>
          <div className="title">
            <h1>{item.title}</h1>
            <span>{value === i ? "-" : "+"}</span>
          </div>
          <div className="content">
            <h2>{value === i && item.content}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
