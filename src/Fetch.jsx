export function Fetch(){
    return (
        <>
            <button onClick={()=>{
                fetch('https://jsonplaceholder.typicode.com/users6363')
                    .then( resp => resp.json())
                    .then(console.log)
                    .catch(err => console.log(err))
            }}>Traer Datos</button>
        </>
    )
}