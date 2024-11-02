import Link from "next/link";

export default function Menu(){
    return(
        <nav className="flex">
            <ul className="flex gap-6 links">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>Cadastro</Link></li>
                <li><Link href={'/'}>Serviços</Link></li>
                <li><Link href={'/'}>Página de Integrantes</Link></li>
                <li><Link href={'/'}>Contato</Link></li>
                
                
            </ul>
        </nav>
    )
}