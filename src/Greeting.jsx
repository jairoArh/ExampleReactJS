export function Greeting({name, happy}) {
    const person = {
        "name":"Lola",
        "age":32,
        "married":true
    } 
    
  return (
    <div>
      <h1>Hola {name} estoy { happy ? 'Feliz 😀': 'Triste 😔 ' }</h1>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
}
