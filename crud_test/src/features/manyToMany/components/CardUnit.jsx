// import React, { useState } from "react";
// import PropTypes from "prop-types";

// CardUnit.propTypes = {
//   product: PropTypes.object,
//   onChange: PropTypes.func,
// };

// function CardUnit({ product, onChange }) {
//   const handlePriceChange = (unit) => {
//     if (onChange) {
//       onChange(unit.id);
//     }
//   };
//   return (
//     <>
//       <select style={{ height: "30px", marginTop: "12px", minWidth: "69px" }}>
//         {product.units.map((unit) => {
//           return (
//             <option key={unit.id} onClick={() => handlePriceChange(unit)}>
//               {unit.name}
//             </option>
//           );
//         })}
//       </select>
//     </>
//   );
// }

// export default CardUnit;
