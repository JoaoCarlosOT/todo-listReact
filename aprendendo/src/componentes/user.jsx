import React from 'react'
import propTypes from 'prop-types';
import { MdDelete,MdEdit } from "react-icons/md";

import {useNavigate, Link} from 'react-router-dom';

import Axios from 'axios';


const User = ({data}) => {
    const navigate = useNavigate();
    const {id,nome,email} = data;

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:5000/todos/${id}`) 
            .then(() => {
                alert("Deletado com sucesso");
                navigate("/");
            });
            
            
    }

    return(
        <>
            <td>{nome}</td>
            <td>{email}</td>
            <td>
            <button type="button" class="btn btn-primary">
                <Link to={`/editar/${id}`}>
                    Editar
                    <MdEdit />
                </Link>
            </button>
            <button type="button" class="btn btn-danger" onClick={() => handleDelete(id)}>excluir
                <MdDelete />
            </button>
            <button type="button" class="btn btn-primary">
                <Link to={`/cadastrar/${id}`}>Detalhes</Link>
            </button>
            </td>
        </>
    )
                
}

export default User;

User.propTypes = {
    data: propTypes.object
}.isRequired;