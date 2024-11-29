function SomarDoisValores() {

    function sumTwoValues() {
        const a = document.getElementById('one').value;
        const b = document.getElementById('two').value;

        return alert(`A soma dos valores é de: ${Number(a) + Number(b)}`);
    }

    return (
        <>
            <div>
                <span>Digite um número: </span>
                <input id="one" type="number" required />
            </div>

            <div>
                <span>Digite outro valor: </span>
                <input id="two" type="number" required />
            </div>

            <div>
                <button onClick={sumTwoValues} >Somas os valores!</button>
            </div>
        </>
    )
}

export default SomarDoisValores