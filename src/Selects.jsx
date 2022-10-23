import { useState, useEffect } from "react";
import { departments,towns } from "./LocalData";

export function Selects() {

    const [dpto,setDpto] = useState("")
    const [temp,setTemp] = useState([])

    departments.sort( (d1, d2) => d1.name.localeCompare(d2.name))

    useEffect(()=>{
        const aux = towns.filter( t => t.department == dpto ) 
        setTemp( aux )
    },[dpto])

  return (
    <>
      <div className="container" align="center">
        Departamentos
        <select name="" id="" onChange={(event)=> setDpto(event.target.value)}>
          <option disabled value="">
            Seleccione Departamento
          </option>
          {
            departments.map( dpto => {
                return <option key={dpto.code} value={dpto.code}>{dpto.name}</option>
            })
          }
        </select>
        Municipios <select name="" id="">
        <option disabled value="">
            Seleccione Municipio
          </option>
          {
            temp.map( town => (
                <option key={town.code} value={town.code}>{town.name}</option>
            ))
          }
        </select>
      </div>
    </>
  );
}
