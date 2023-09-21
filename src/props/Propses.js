import React from 'react'
import PropsDate from './PropsDate'


// ---------------------------------------TYPE-I--(Good / Easy to Understand) ---------------------------------------------------------------------//
const Propses = (props) => {  
  return (
    <div>
      <PropsDate xxx={props.time}/> {/* props passing to propsDate component and re-rendering here*/}
      <hr/>
        <h3>{props.title}</h3>
        <h3>{props.rupees}</h3>
        <h3>{props.time.toISOString()}</h3>   {/* ---output is 2023-03-06T18:30:00.000Z------ */}
        <hr/>
    </div>
  )
}
export default Propses
// ---------------------------------------TYPE-I ---------------------------------------------------------------------//


// ---------------------------------------TYPE-I--(Good / Easy to Understand) ---------------------------------------------------------------------//
// const Propses = (props) => {  
//   return (
//     <div>
//         <h3>{props.title}</h3>
//         <h3>{props.rupees}</h3>
//         <h3>{props.time.toISOString()}</h3>   {/* ---output is 2023-03-06T18:30:00.000Z------ */}
//         <hr/>
//     </div>
//   )
// }
// export default Propses
// ---------------------------------------TYPE-I ---------------------------------------------------------------------//


// ---------------------------------------TYPE-II ---------------------------------------------------------------------//
// const Propses = (props) => {  
//     return (
//       <div>
//           <h1>{props.details.name}</h1>
//           <h1>{props.details.amount}</h1>
//           <h1>{props.details.date.toISOString()}</h1>    
//       </div>
//     )
//   }
//   export default Propses
  // ---------------------------------------TYPE-II ---------------------------------------------------------------------//


  // ---------------------------------------TYPE-III ---------------------------------------------------------------------//
// const Propses = ({title, rupees, time}) => {  
//   return (    //---------------This is an Objects Destructuring--------------------------
//     <div>
//         <h1>{title}</h1>
//         <h1>{rupees}</h1>
//         <h1>{time.toISOString()}</h1>    
//     </div>
//   )
// }
// export default Propses
// ---------------------------------------TYPE-III ---------------------------------------------------------------------//

// ---------------------------------------DATE and TIME Format ---------------------------------------------------------------------//
// const Propses = (props) => {  

//       const month = props.time.toLocaleString('en-US',{month:'long'});
//       const day = props.time.toLocaleString('en-US',{day:'2-digit'});
//       const year = props.time.getFullYear();
//     return (
//       <div>
//           <h3>{props.title}</h3>
//           <h3>{props.rupees}</h3>
//           <h3>{props.time.toISOString()}</h3> {/* ---output is 2023-03-06T18:30:00.000Z------ */}
//           <h3>{month}</h3> {/* ---output is 'March, July, October'------ */}
//           <h3>{day}</h3>   {/* ---output is 07, 10, 11------ */}
//           <h3>{year}</h3>  {/* ---output is 2023, 2023, 2023------ */}
//           <hr/>
//       </div>
//     )
//   }
//   export default Propses
  // ---------------------------------------TYPE-I ---------------------------------------------------------------------//
  