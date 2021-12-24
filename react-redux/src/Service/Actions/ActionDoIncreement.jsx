import {INCREEMENT} from '../constants'
export const doIncrement =(data)=>{

    console.log('STEP 2 ACTION : Data on action')
    console.log(data)
    return {
        type:INCREEMENT,
        data:data
    }
}
