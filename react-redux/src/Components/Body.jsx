import React from "react";
import User from "../containers/UserContainer";

export default function Body(props){

    function increementHandler(){

        const data = '2' ;

        console.log('STEP 1 VIEW : Data on body component')
        props.doIncreementHandler(data)
    }

    console.log('STEP 5 : Data Back To View Body Component')

    return ( <>
    
     <header>This is Body</header>

     <button onClick={ ()=> {increementHandler()}}>Add</button> <h2>Data From Store { props.data.length }</h2>

     <User/>

    </>)

}

