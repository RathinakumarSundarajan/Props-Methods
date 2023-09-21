import React from 'react'
import Propses from './Propses'

const App = () => {

    const expenses = [{name:'ram', amount: 25, date: new Date(2023,2,7)},     //------array index 0 -------------//
                      {name:'jayam', amount: 10, date: new Date(2023,6,10)},  //------array index 1 -------------//
                      {name:'laxman', amount: 13, date: new Date(2023,9,11)}  //------array index 2 -------------//
                    ]

// ------------------------------------------------TYPE-I----(Good / Easy to Understand)---------------------------------------------------------------//
return (
   <div>
        <Propses title={expenses[0].name} rupees={expenses[0].amount} time={expenses[0].date}/>
        <Propses title={expenses[1].name} rupees={expenses[1].amount} time={expenses[1].date}/>
        <Propses title={expenses[2].name} rupees={expenses[2].amount} time={expenses[2].date}/>
    </div>
  )
}
export default App
// ------------------------------------------------TYPE-I ---------------------------------------------------------------------//


// ------------------------------------------------TYPE-II ---------------------------------------------------------------------//
// return (
//     <div>
//          <Propses details={expenses[0]}></Propses>
//          <Propses details={expenses[1]}></Propses>
//          <Propses details={expenses[2]}></Propses>
//      </div>
//    )
//  }
//  export default App
 // ------------------------------------------------TYPE-II ---------------------------------------------------------------------//


 // ------------------------------------------------TYPE-III ---------------------------------------------------------------------//
// return (
//    <div>
//         <Propses title={expenses[0].name} rupees={expenses[0].amount} time={expenses[0].date}></Propses>
//         <Propses title={expenses[1].name} rupees={expenses[1].amount} time={expenses[1].date}></Propses>
//         <Propses title={expenses[2].name} rupees={expenses[2].amount} time={expenses[2].date}></Propses>
//     </div>
//   )
// }
// export default App
// ------------------------------------------------TYPE-III ---------------------------------------------------------------------//


