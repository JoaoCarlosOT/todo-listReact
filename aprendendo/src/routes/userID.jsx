import {useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'
import Axios from 'axios'

const UserID = () => {
    const {id} = useParams();

    const [todos, setTodos] = useState("");
    
    useEffect(() => {

        Axios.get(`http://localhost:5000/todos/${id}`)
            .then(({ data }) => {
                setTodos(data);  
            })
            .catch((error) => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    return(
        <>
            <div>
                <p>{todos.nome}</p>
                <p>{todos.email}</p>
            </div>
        </>
    )
}

export default UserID;