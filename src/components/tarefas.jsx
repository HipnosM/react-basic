import { useEffect, useState } from "react";

export default function Tarefas() {

    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        async function buscarDados() {
            const resultado = await fetch('https://jsonplaceholder.typicode.com/todos');
            const resultadoFinal = await resultado.json();
            return resultadoFinal;
        };
        buscarDados().then(res => setTarefas(res));
    }, []);

    return (
        <div className="tarefas">
            <h2>Buscando dados</h2>
            <ol>
                {tarefas.map((tarefa) => {
                    if (tarefa.id <= 20) {
                        return (
                            <li key={tarefa.id}>
                                {tarefa.title}
                                <b>{tarefa.completed ? ' - Tarefa concluída' : null}</b>
                            </li>
                        );
                    }
                })}
            </ol>
        </div>
    );
};