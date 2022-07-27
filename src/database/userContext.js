// import React, {Children, createContext, useContext, useState} from "react";

// const userContext = createContext();

// export function useUser() {
//     return useContext(userContext);
// }

// export default function UserProvider(props) {
//     const [data, setUserData] = useState();

//     function fillUserData(breakfastRecipes, dinnerRecipes, bread, dairy, fruit, protein, random, snacks, vegetables, lunchRecipes, snackRecipes) {
//         const userData = {
//             BreakfastRecipes: breakfastRecipes,
//             DinnerRecipes: dinnerRecipes,
//             GroceryList: {
//                 Bread: bread,
//                 Dairy: dairy,
//                 Fruit: fruit,
//                 Protein: protein,
//                 Random: random,
//                 Snacks: snacks,
//                 Vegetables: vegetables
//             },
//             LunchRecipes: lunchRecipes,
//             SnackRecipes: snackRecipes
//         }
    
//         setUserData(userData);
//     }
    

//     const value = {
//         data,
//         fillUserData
//     }

//     return(
//         <UserProvider.Provider value={value}>
//             {props.children}
//         </UserProvider.Provider>
//     )
// }
