// import React, { useState } from 'react'
// import './Todo.css';
// const Todo = () => {

//     const [val, setVal]=useState("");
//     const [arr,setArr]=useState([]);

//     const handleVal=()=>{
//         setArr([...arr,val]);
//         setVal("");
//         console.log(arr);
//     }

//   return (
//     <div className='feeder'>

//       <input name='in' value={val} placeholder='enter the city' onChange={(e)=>{setVal(e.target.value)}}/>
//       <button onClick={handleVal}>ADD</button>
//       <div className="content">
//             <ul>
//             {arr.map((city, index) => (
//             <li key={index}>{city}</li>
//             ))}
//             </ul>
//       </div>
//     </div>
//   )
// }

// export default Todo



import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

    const [val, setVal] = useState('');
    const [arr, setArr] = useState([]);

    const handleval = () => {
        setArr([...arr, val]);
        setVal('');
        console.log(arr);
    }

    const handleclear = () => {
        setArr([]);
    }

    const deleteA=(index)=>{
        console.log(index);
        let n11=[...arr];
        n11.splice(index,1);
        setArr([...n11]);
    }
    return (
        <div className='container'>
            <input placeholder='enter the city' value={val} onChange={(e) => {
                setVal(e.target.value);
            }} />
            <button onClick={handleval}>Add</button>
            <button onClick={handleclear} >Clear</button>

            <div className="info">
                <ul>
                    {arr.map((city, index) => (
                        <div className="deleteb">
                            <li key={index}>{city}</li>
                            <div className="icon">
                                <i className="fa-solid fa-trash" onClick={(e)=>{deleteA(index)}}></i>
                            </div>
                        </div>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Todo
