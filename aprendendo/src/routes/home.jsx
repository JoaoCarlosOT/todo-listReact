import React, { useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import User from '../componentes/user';
import Loading from '../componentes/loading';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const dummy = useRef();

    useEffect(() => {
        setLoading(true);

        Axios.get("http://localhost:5000/todos/")
            .then(({ data }) => {
                setTodos(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        dummy.current && dummy.current.scrollIntoView({ behavior: "smooth" });
    }, [todos]);

    if (loading) {
        return <h1><Loading/></h1>;
    }

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.length === 0 ? document.body.style.background ='grey' : document.body.style.background ='white'}
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <User data={todo} />
                        </tr>
                    ))}
                </tbody>
            </table>
            <div ref={dummy}></div>
        </>
    );
}

export default Home;
