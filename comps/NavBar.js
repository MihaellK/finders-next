import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logoIPT.png" width={102} height={41}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/localizadores/info">Info</Link>
            <Link href="/localizadores/">Localizadores</Link>
        </nav>
     );
}
 
export default NavBar;