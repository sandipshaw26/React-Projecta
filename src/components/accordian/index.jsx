import { useState } from "react";
import data from "./data";
import './style.css';

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const[enablemultiselection, setEnablemultiselection] =useState(false);
    const[multiple,setMultiple] = useState([]);
    
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    // function changePlus(){
    //     document.querySelector("span.opr").innerHTML = "-";
    // }

    function handleMultiSelection(getCurrentId){
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId,1)
    
    setMultiple(copyMultiple);
    console.log(findIndexOfCurrentId);
    }
    console.log(selected);
    return(
    <div className="wrapper">
    <button onClick={()=>setEnablemultiselection(!enablemultiselection)}>Enable Multi selected</button>
        <div className="accordian">
        <h1><u>Accordian FAQ</u></h1>
            {
                data && data.length > 0 ? (
                    data.map(dataItem => <div className="item">
                        <div onClick={
                            enablemultiselection
                        ?()=>handleMultiSelection(dataItem.id)
                        :()=>handleSingleSelection(dataItem.id)
                        } className="title">
                            <h3>{dataItem.question}</h3>
                            <span className="opr">+</span>
                        </div>
                        {
                            enablemultiselection ?
                            multiple.indexOf(dataItem.id) !== -1 &&  (
                                <div className="answer">
                                {dataItem.answer}
                            </div>) 
                            : selected === dataItem.id && (
                            <div className="answer">
                                {dataItem.answer}
                            </div>)
                        }
                        {/* {
                            selected === dataItem.id || multiple.indexOf(dataItem.id)!== -1 ? (
                            <div className="answer">
                                {dataItem.answer}
                            </div>)
                            : null
                        } */}
                    </div>))
                    : <div>No Data Found !</div>
            }
        </div>
    </div>
    )
}