const initialState = {
    heroDetails: {
        id:null,
        name:"Abaddon",
        primary:"",
        spellInfoQ:"",
        spellInfoW:"",
        spellInfoE:"",
        spellInfoR:"",
    },
    show: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HERODETAILS':
            return {
                ...state,
                heroDetails: action.details
            }
        case 'SET_MODALTRUE':
            return {
                ...state,
                show: true
            }
        case 'SET_MODALFALSE':
            return {
                ...state,
                show: false
            }
        default:
            return state;
    }
}

export default reducer;