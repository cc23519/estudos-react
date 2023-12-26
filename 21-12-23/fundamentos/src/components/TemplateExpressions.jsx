import MeuComponente from "./MeuComponente";

const TemplateExpressions = () =>{

    const nome =  'Guilherme'
    
    return(
        <div>
            <MeuComponente/>
            <h1>Olá {nome}, tudo bem?</h1>
        </div>
    )
}

export default TemplateExpressions;