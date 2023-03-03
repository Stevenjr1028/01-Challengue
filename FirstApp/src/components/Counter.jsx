import { useCounter } from "../Hooks/useCounter";

export const Counter =({value}) =>{
    const {counter, handleAdd, handleReset,handleSubsstract}= useCounter(1)

    

    return (
        <>
        <h1> Increment </h1>
        <span> {counter} </span>
        <button onClick={()=> handleAdd()}>+1</button>

        <h1> Decrement </h1>
        <span> {counter} </span>
        <button onClick={()=> handleSubsstract()}>-1</button>

        <h1> Reset </h1>
        <span> {counter} </span>
        <button onClick={()=> handleReset()}>=1</button>
        </>

        
    )

}
