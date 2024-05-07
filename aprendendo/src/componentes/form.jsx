import React from 'react'
import {useState} from 'react'

import {useNavigate} from 'react-router-dom'
import Axios from "axios"

import './form.css'

const Form = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            id:Math.random().toString(),
            nome, 
            email,
        };

        Axios.post("http://localhost:5000/todos/", user);
        alert("Cadastrado com sucesso!!!");

        navigate("/");

        setNome("");
        setEmail("");
    }


    return(
        <>
        <form className='form'  onSubmit={(e)=>handleSubmit(e)}>
            <div class="mb-3">
                <label >Nome
                    <input type="text" onChange={(e) => setNome(e.target.value)}/>    
                </label>    
            </div>
            <div class="mb-3">
                <label >Email
                    <input type="email"  onChange={(e) => setEmail(e.target.value)}/>
                </label>    
            </div>
        <input type="submit" value="Enviar"/>
        </form>
        </>
    )
}

export default Form;