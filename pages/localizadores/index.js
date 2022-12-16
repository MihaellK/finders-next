import styles from '../../styles/AtivLista.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  return {
    props: { localizadores: data }
  }

}

const Localizadores = ({ localizadores }) => {
    return ( 
    <div>
      <h1>Todos Equipamentos</h1>
      {localizadores.map(localizador => (
        <Link legacyBehavior href={'/localizadores/' + localizador.id} key={localizador.id}>
          <a className={styles.single}>
            <h3>{ localizador.name }</h3>
          </a>
        </Link>
      ))}
    </div>
     );
}
 
export default Localizadores;