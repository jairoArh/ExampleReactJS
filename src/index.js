import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./Greeting";
import { TaskCard } from "./Task";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
import { Button } from "./Button";
import { Fetch } from "./Fetch";
import { Table } from "./Table";
import { Selects } from "./Selects";

const root = ReactDOM.createRoot(document.getElementById('root'))

function Counter(){
    const [cont,setCont] = useState(10)

    useEffect(()=>{
        console.log('Observador')
    },[cont])

    return(
        <>
            <h1>Contador = {cont}</h1>
            <button onClick={()=>{
                setCont( cont + 1)
            }}>Contar + 1</button>
        </>
    )
}

root.render(<>
    {/* <Greeting name="Lola" happy={true}/>
    <Greeting name="Pedro" happy={false}/>
    <Greeting name="Maria" happy={true}/> */}

   {/*  <TaskCard ready={true}/>
    <Button />
    <Fetch />  
    <Counter />  

    <Table />*/}
    <Selects />
</>
)