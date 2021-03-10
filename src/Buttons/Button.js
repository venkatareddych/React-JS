import React,{useState} from 'react';

export default function Button(props) {   // props are used to catch and store the data in any data type object array
    let [title,setTitle] = useState('Submit From Function')    // this is called hook
    return (
        <button onClick ={()=>setTitle('you got updated value')}>{title}</button>
    )
}