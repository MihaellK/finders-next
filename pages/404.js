import Link from "next/link";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
        // router.go(-1)
        // router.go(1)
        router.push('/')
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Erro!</h1>
            <h2>Página não encontrada :/</h2>
            <p>Por favor retorne para <Link legacyBehavior href={"/"}><a>Homepage</a></Link> </p>
        </div>
     );
}
 
export default NotFound
