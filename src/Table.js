import React,{useState} from 'react'
import './Table.css'

function Table() {
    const [number1,setNumber1]= useState("click me");
    const [number2,setNumber2]= useState("click me");
    const [number3,setNumber3]= useState("click me");
    const [number4,setNumber4]= useState("click me");
    const [number5,setNumber5]= useState("click me");
    const [number6,setNumber6]= useState("click me");
    const [number7,setNumber7]= useState("click me");
    const [number8,setNumber8]= useState("click me");
    const [number9,setNumber9]= useState("click me");
    const[row1,setRow1]=useState(0)
    const[row2,setRow2]=useState(0)
    const[row3,setRow3]=useState(0)
    const[col1,setCol1]=useState(0);
    const[col2,setCol2]=useState(0);
    const[col3,setCol3]=useState(0);
    const[result,setResult] =useState(0);
    
    // const popUp = document.getElementsByClassName('option');
  return (
    <div className='table-container'>
        <h1>Click on 'click me' to Add/Edit numbers</h1>
        <table className='add-table'>
            <tbody>
                <tr>
                    <th><button className='inside-button' onClick={()=>{setNumber1(prompt("Enter any number"))}}>{number1}</button><button className='del-btn' onClick={()=>setNumber1(0)}>Delete</button></th>
                    <th><button className='inside-button' onClick={()=>{setNumber2(prompt("Enter any number"))}}>{number2}</button><button className='del-btn' onClick={()=>setNumber2(0)}>Delete</button></th>
                    <th><button className='inside-button' onClick={()=>{setNumber3(prompt("Enter any number"))}}>{number3}</button><button className='del-btn' onClick={()=>setNumber3(0)}>Delete</button></th>
                    <th>{col1}</th>
                </tr>
                <tr>
                    <th><button className='inside-button' onClick={()=>{setNumber4(prompt("Enter any number"))}}>{number4}</button><button className='del-btn' onClick={()=>setNumber4(0)}>Delete</button></th>
                    <th><button className='inside-button' onClick={()=>{setNumber5(prompt("Enter any number"))}}>{number5}</button><button className='del-btn' onClick={()=>setNumber5(0)}>Delete</button></th>
                    <th><button className='inside-button' onClick={()=>{setNumber6(prompt("Enter any number"))}}>{number6}</button><button className='del-btn' onClick={()=>setNumber6(0)}>Delete</button></th>
                    <th>{col2}</th>
                </tr>
                <tr>
                    <th><button className='inside-button' onClick={()=>{setNumber7(prompt("Enter any number"))}}>{number7}</button><button className='del-btn' onClick={()=>setNumber7(0)}>Delete</button></th>
                    <th><button className='inside-button' onClick={()=>{setNumber8(prompt("Enter any number"))}}>{number8}</button><button className='del-btn' onClick={()=>setNumber8(0)}>Delete</button></th>
                    <th><button className='inside-button' onClick={()=>{setNumber9(prompt("Enter any number"))}}>{number9}</button><button className='del-btn' onClick={()=>setNumber9(0)}>Delete</button></th>
                    <th>{col3}</th>
                </tr>
                <tr>
                    <th>{row1}</th>
                    <th>{row2}</th>
                    <th>{row3}</th>
                    <th>{result}</th>
                </tr>
            </tbody>
        </table>
        <button className='AddBtn' onClick={()=>{
            
            setCol1(parseInt(number1)+parseInt(number2)+parseInt(number3))
            setCol2(parseInt(number4)+parseInt(number5)+parseInt(number6))
            setCol3(parseInt(number7)+parseInt(number8)+parseInt(number9))
            setRow1(parseInt(number1)+parseInt(number4)+parseInt(number7))
            setRow2(parseInt(number2)+parseInt(number5)+parseInt(number8))
            setRow3(parseInt(number3)+parseInt(number6)+parseInt(number9))
            setResult(parseInt(number1)+parseInt(number2)+parseInt(number3)+parseInt(number4)+parseInt(number5)+parseInt(number6)
           +parseInt(number7)+parseInt(number8)+parseInt(number9)+parseInt(number1)+parseInt(number4)+parseInt(number7)+parseInt(number2)+parseInt(number5)+parseInt(number8)+
           parseInt(number3)+parseInt(number6)+parseInt(number9))

        }}>Addition</button>
    </div>
  )
}

export default Table