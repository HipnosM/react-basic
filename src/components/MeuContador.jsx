import { useState } from "react";

export default function MeuContador(props) {
    let [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    };

    return (
        <div className="eventos">
            <h2>{props.section_title}</h2>
            <h3>{props.section_subtitle}</h3>
            <p>{props.description}</p>

            <h3>{contador > 1 ? contador + ' Cliques' : contador + ' Clique'}</h3>
            <div className="botoes">
                <button onClick={aumentar}>Click</button>
                <button onClick={() => setContador(0)}>Limpar</button>
            </div>
        </div>
    );
};