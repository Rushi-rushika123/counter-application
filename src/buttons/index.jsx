/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */

export default function({Increment,Decrement,Reset}){
    return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <button onClick={()=>Increment()}>+</button>
        <button onClick={()=>Reset()}>0</button>
        <button onClick={()=>Decrement()}>-</button>
        
    </div>
         
    )              
          
}