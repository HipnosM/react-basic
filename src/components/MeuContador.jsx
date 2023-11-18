import { useState } from "react";

export default function MeuContador(props) {
    let [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    };
    function diminuir() {
        setContador(contador - 1);
    };

    if (contador >= 10) {
        return (
            <div className="eventos">
                <h3>{props.section_subtitle}</h3>
                <p>{props.description}</p>

                <h3>{contador}</h3>
                <h3>Valor muito alto!</h3>
                <div className="botoes">
                    <button onClick={diminuir}>Diminuir</button>
                    <button onClick={() => setContador(0)}>Limpar</button>
                </div>
            </div>
        );
    };

    return (
        <div className="eventos">
            <h2>{props.section_title}</h2>
            <h3>{props.section_subtitle}</h3>
            <p>{props.description}</p>

            <h3>{contador}</h3>
            <div className="botoes">
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
                <button onClick={() => setContador(0)}>Limpar</button>
            </div>
        </div>
    );
};