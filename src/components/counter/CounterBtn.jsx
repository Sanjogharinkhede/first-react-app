import "../Tabs/Tabs.css"
import { useState } from "react";
export  function CounterBtn(props){
    const [count, setcount] = useState(0);
    const [classNameValue, setclassNameValue] = useState("yellow");
    function handleClick(addUpto){
        setcount(count+addUpto)
        if(count>=100){
            setclassNameValue("red");
        }else if(count>=0){
            setclassNameValue("yellow");

        }
    }
    function handleClickRemove(subUpto){
        setcount(count-subUpto)
        if(count<=0){
            setclassNameValue("blue");
        }else if(count<100) {
            setclassNameValue("yellow");
        }
    }
    return (
        <>
        <h4 className={classNameValue}>{count}</h4>
        <li><button onClick={()=>handleClick(props.inc)}>{props.children} ADD</button></li>
        <li><button onClick={()=>handleClickRemove(props.dec)}>{props.children} SUB</button></li>
        </>
    )
}