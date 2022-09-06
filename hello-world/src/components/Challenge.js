const Challenge = () => {
    const PRIMEIRO_NUMERO = 1000;
    const SEGUNDO_NUMERO = 2000;  
    const handleSoma = () => {
        console.log(PRIMEIRO_NUMERO + SEGUNDO_NUMERO);
    } 
    return (
        <div>
            <p>Primeiro Numero: {PRIMEIRO_NUMERO}</p>
            <p>Segundo Numero: {SEGUNDO_NUMERO}</p>
            <button onClick={handleSoma}>Clique aqui pra somar</button>
        </div>
    )
}

export default Challenge;