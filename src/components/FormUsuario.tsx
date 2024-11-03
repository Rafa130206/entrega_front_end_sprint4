import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaLocationArrow, FaRegTimesCircle } from "react-icons/fa";

export default function FormUsuario() {
    const router = useRouter();
    const { id } = router.query;

    const [novo, setNovo] = useState({
        cpf: id || "",
        nome: "",
        rg: "",
        cep: "",
    });

    const metodo = id ? "PUT" : "POST";

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNovo({ ...novo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        fetch(`http://localhost:8080/usuario/${novo.cpf}`, {
            method: metodo,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novo),
        }).then(() => {
            router.push("/");
        });
    };

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/usuario/${id}`)
                .then((resp) => resp.json())
                .then((data) => setNovo(data))
                .catch((error) => console.error(error));
        }
    }, [id]);

    return (
        <div className="w-7/10 mx-auto font-sans">
            <h1 className="text-center text-2xl font-bold mb-6">Formulário de Usuários</h1>
            <form onSubmit={handleSubmit} className="w-4/5 mx-auto">
                <label htmlFor="cpf" className="block font-semibold mb-2">CPF do Usuário:</label>
                <input 
                    type="text" 
                    name="cpf" 
                    value={novo.cpf} 
                    placeholder="CPF do Usuário" 
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded" 
                />

                <label htmlFor="nome" className="block font-semibold mb-2">Nome do Usuário:</label>
                <input 
                    type="text" 
                    name="nome" 
                    value={novo.nome} 
                    placeholder="Nome do usuário" 
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded" 
                />

                <label htmlFor="rg" className="block font-semibold mb-2">RG do Usuário:</label>
                <input 
                    type="text" 
                    name="rg" 
                    value={novo.rg} 
                    placeholder="RG" 
                    onChange={handleChange} 
                    step="0.01" 
                    className="w-full p-2 mb-4 border rounded" 
                />

                <label htmlFor="cep" className="block font-semibold mb-2">CEP:</label>
                <input 
                    type="text" 
                    name="cep" 
                    value={novo.cep} 
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded" 
                />

                <button type="submit" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded mr-4">
                    <FaLocationArrow />
                </button>

                <Link href="/">
                    <a className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded">
                        <FaRegTimesCircle />
                    </a>
                </Link>
            </form>
        </div>
    );
}