const Challanger = () => {

    const a = 5;
    const b = 9
    var somaab = a + b;

    return (
        <div>
            <h1>Números usados: {a} e {b}</h1>
            <button onClick={() => {console.log(somaab)}}>Clique aqui para somar.</button>
        </div>
    )
}

export default Challanger;