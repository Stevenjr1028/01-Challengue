import React from "react";
import { useFetch } from "../Hooks/useFetch";
import {useCounter} from "../Hooks/useCounter";

export const MultipleCustomHooks = ()=>{

    const {counter, handleAdd}= useCounter(1)
    const {data, isLoading, hasError}= useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)

    return(
        <>
        <h1>MultipleCustomHooks</h1>
        <hr/>

        {
            isLoading ? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            ): (
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{data[0]?.quote}</p>
                    <footer className="blockquote-footer">{data[0]?.author}</footer>

                </blockquote>
            )
        }

        <button className="btn btn-primary" onClick={()=> handleAdd()}>Nex Quote</button>
        
        
        </>
    )

}