const initialState = {
    heroDetails: {
        id: 0,
        name: "",
        primary: "",
        spellInfoQ: "",
        spellInfoW: "",
        spellInfoE: "",
        spellInfoR: ""
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HERODETAILS':
            return {
                ...state,
                heroDetails: action.details
            }
        default:
            return state;
    }
}

export default reducer;