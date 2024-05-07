import { useEffect, useState } from 'react';
import Axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom';

const Editar = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:5000/todos/${id}`)
            .then(({ data }) => {
                
                setNome(data.nome);
                setEmail(data.email);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    }, [id]);

    const handleEdit = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:5000/todos/${id}`, {
            nome,
            email
        })
            .then(() => {
                alert("Editado com sucesso");
                navigate("/");
            });

    }

    return (
        <>
            <form onSubmit={(e) => handleEdit(e)}>
                <h1>Editar</h1>
                <div className="mb-3">
                    <label>Nome
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </label>
                </div>
                <div className="mb-3">
                    <label>Email
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <input type="submit" value="Editar" />
            </form>
        </>
    )
}

export default Editar;
