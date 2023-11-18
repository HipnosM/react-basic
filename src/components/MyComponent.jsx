export default function MyComponent(props) {
    return (
        <div className="container-header">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
};