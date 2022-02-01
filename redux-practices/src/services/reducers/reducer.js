const initialState = {
    cardData: [],
    items: 0
}
function cardItem(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cardData: [...state.cardData, action.data],
                items: state.items + 1
            }
            break;
        default:
            return state
    }
}

export default cardItem