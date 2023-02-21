
import './App.css';
import {useState} from 'react';
import Even from './Even';
import Odd from './Odd';
import Buttons from './buttons';
function App() {
  const[count,setCount]=useState(0);
  const countStyle = {
    backgroundColor:  count===0? 'black' :count >= 0 ? 'red' : 'green' ,
    width:'200px',
    padding: '20px',
    color: '#fff',
    textAlign:'center' 
  
    
  };
  return (
    <div className="App"  style={{display:'flex',flexDirection:'column',alignItems:'center',
    justifyContent:'center',border:'1px solid black',width:'700px',padding:'20px',marginLeft:'400px',marginTop:'30px'
    }}>
      
      <div style={countStyle}>{count}</div>
      {count%2===0? <Even/>: <Odd/>}
      <Buttons Increment={()=>setCount(count+1)}  Decrement={()=>setCount(count-1)} Reset={()=>setCount(count*0)} />
      
    </div>
  );
}

export default App;
