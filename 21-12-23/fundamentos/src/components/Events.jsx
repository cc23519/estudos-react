const Events = () =>{

    const handleMyEvent = () => (
        console.log("Apertou")
    )

    const render = (x) =>{
        if(x){
            return(
                <h1>Oi renderizou...</h1>
            )
        }
        else{
            return(
                <h2>não renderizou</h2>
            )
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Aqui")}>Clique aqui também</button>
            </div>
            {render(true)}
            {render(false)}
        </div>
    )
}

export default Events;