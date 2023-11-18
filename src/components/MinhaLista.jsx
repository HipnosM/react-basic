import { useEffect, useState } from "react";

const minhaLista = [
    { id: '1', title: 'Netflix', value: 'https://www.netflix.com/' },
    { id: '2', title: 'PrimeVideo', value: 'https://www.primevideo.com/' },
    { id: '3', title: 'Disney+', value: 'https://www.disneyplus.com/' }
];


export default function MinhaLista(props) {
    const [products, setProducts] = useState(minhaLista);
    const [search, setSearch] = useState('');

    useEffect(
        () => {
            if (search) {
                const newList = minhaLista.filter((item) => {
                    return item.value.toLowerCase().includes(search.toLowerCase());
                });
                setProducts(newList);
            }
            else {
                setProducts(minhaLista);
            }
        }
        , [search]);

    return (
        <div className="container_list">
            <h2>{props.section_title}</h2>
            <h3>{props.section_subtitle}</h3>
            <h3>{props.section_subtitle2}</h3>
            <h4>{props.section_h4}</h4>

            <input
                className="search_box"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="pesquise aqui..." />
            
            {products.map((item) => {
                return (
                    <div key={item.id}>
                        <h4><a href={item.value} target="_blank">{item.title}</a></h4>
                    </div>
                );
            })}
        </div>
    );
};