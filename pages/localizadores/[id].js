export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(localizador => {
        return {
            params: { id: localizador.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { localizador: data }
    }
}

const Details = ({ localizador }) => {
    return ( 
        <div>
            <h1>{ localizador.name }</h1>
            <p>{ localizador.email }</p>
            <p>{ localizador.website }</p>
            <p>{ localizador.address.city }</p>
        </div>
     );
}
 
export default Details;