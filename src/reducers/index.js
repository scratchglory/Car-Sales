const newLocal =
  "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg";
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image: newLocal,
    features: []
  },
  items: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

// must have state = initialState
// if state is undefined, it will default back to initialState
export const rootReducer = (state = initialState, action) => {
  console.log("RootReducer:", state);
  switch (action.type) {
    case "ADD_ITEM":
      // find and match the ID assoc. feature ID
      const storeItems = state.items.find(item => {
        return item.id === action.payload.id;
      });
      // Triggers when 'add' is clicked

      const newItems = state.items.filter(item => {
        return item.id !== storeItems.id;
      });
      // renders array of current items

      return {
        ...state,
        additionalPrice: (state.additionalPrice += action.payload.price),
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        items: [...newItems]
      };

    case "REMOVE_ITEM":
      const cartItems = state.car.features.find(item => {
        return item.id === action.payload.id;
      });
      console.log("cartItems", cartItems);
      const updatedCart = state.car.features.filter(item => {
        return item.id !== cartItems;
      });
      console.log(("updatedCart", updatedCart));
      return {
        ...state,
        additionalPrice: (state.additionalPrice -= action.payload.price),
        car: { ...state.car, features: [...updatedCart] },
        items: [...state.items, action.payload]
      };

    default:
      return state;
  }
};
