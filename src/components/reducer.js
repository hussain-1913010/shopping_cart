export const reducer = (state, action) => {

    if (action.type === "REMOVE_ITEM") {
        return {
            ...state, item: state.item.filter((curr) => { 
                return curr.id !== action.payload; 
            })
        };
    };

    if (action.type === "CLEAR_ALL") {
        return { ...state, item: []}
    };

    if (action.type === "INCREMENT") {
        const updateCart = state.item.map((curr) => {
            if (curr.id === action.payload) {
                return {...curr, quantity: curr.quantity + 1};
            };
            return curr;
        }) ;
        return {...state, item: updateCart};   
    };

    if (action.type === "DECREMENT") {
        const updateCart = state.item.map((curr) => {
            if (curr.id === action.payload) {
                return {...curr, quantity: curr.quantity - 1};
            };
            return curr;
        }).filter((curr) => curr.quantity !== 0);
        return {...state, item: updateCart}
    };

    if (action.type === "GET_TOTAL") {
        let {totalItem, totalAmount} = state.item.reduce((accum, curr) => {
            let {price, quantity} = curr;
            let updateTotalAmount = price * quantity;
            accum.totalAmount += updateTotalAmount;
            accum.totalItem += quantity;
            return accum;
        }, {totalItem: 0, totalAmount: 0});
        return {...state, totalItem, totalAmount};
    };

    return state;
};