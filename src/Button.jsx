export function Button() {

    function onlyLetters(event){
        if(/[^a-zA-Z\s]/.test(event.key))
            event.preventDefault()
    }
    
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>Ejemplo de Eventos</h2>
          </div>
          <div className="card-body">
            <button
              className="btn btn-secondary"
              onClick={() => alert("Hello World!!")}
            >
              Saludar
            </button>
            <input onKeyPress={ onlyLetters } ></input>
          </div>
        </div>
      </div>
    </>
  );
}
