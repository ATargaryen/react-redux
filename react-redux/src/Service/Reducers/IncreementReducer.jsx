import { INCREEMENT } from '../constants'

export default function IncreementReducer(state = [], action) {

    switch (action.type) {
        case INCREEMENT:
            console.log('STEP 3 REDUCER')
            return [
                ...state,
                { cart_value : action.data}
            ]
        default:
            return state
    }
}
