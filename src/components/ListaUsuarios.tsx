import { useEffect, useState } from "react";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Usuario {
    cpf: string;
    nome: string;
    rg: string;
    cep: string;
}

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/usuario")
            .then((resp) => resp.json())
            .then((resp) => {
                setUsuarios(resp);
                console.log(resp);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDelete = (id: string) => {
        fetch(`http://localhost:8080/usuario/${id}`, {
            method: "delete",
        })
            .then(() => {
                window.location.href = "/"; // Use window.location.href para redirecionar
            })
            .catch((error) => {
                console.log(error);
            });
    };    

    return (
        <div className="w-7/10 mx-auto font-sans">
            <h1 className="text-2xl font-bold mb-5">Lista de Remédios</h1>
            <Link href="/incluir">
                <a className="no-underline px-3 py-2 mb-5 inline-block bg-yellow-500 text-white">Inserir Remédio</a>
            </Link>
            <table className="w-full mx-auto">
                <thead>
                    <tr className="bg-blue-900 text-white">
                        <th className="p-2">Nome</th>
                        <th className="p-2">Preço</th>
                        <th className="p-2">Data de Fabricação</th>
                        <th className="p-2">Data de Validade</th>
                        <th className="p-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.cpf} className="even:bg-gray-300">
                            <td className="p-2">{usuario.nome}</td>
                            <td className="p-2">R$ {usuario.rg}</td>
                            <td className="p-2">{usuario.rg}</td>
                            <td className="p-2">
                                <Link href={`/editar/${usuario.cpf}`}>
                                    <a className="text-blue-500 mr-2"><FaEdit /></a>
                                </Link>
                                <button onClick={() => handleDelete(usuario.cpf)} className="text-red-500 border-none bg-transparent cursor-pointer p-2">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="text-center bg-gray-800 text-white p-2 colSpan-5">Produtos do Banco de Dados</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
