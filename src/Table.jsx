import { useState,useEffect } from "react";

function GetData(){
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
                    .then( resp => resp.json())
                    .then( resp => setData(resp))
                    .catch(err => console.log(err))
    },[])

    console.log( 'hay' + data)
    return data
}

export function Table() {
    const users = GetData()

  return (
    <>
      <div className="container" align="center">
        <h1>Datos de los Usuarios</h1>
        <div class="row">
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Telefono</th>
                  <th>Ciudad</th>
                  <th>Sitio Web</th>
                </tr>
              </thead>
              <tbody>
                {
                    users.map( user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.address.city}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
