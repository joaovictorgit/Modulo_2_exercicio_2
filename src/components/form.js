import React from "react"
import api from "../service/api.js";
import './form.css';

import {FaUserAlt} from 'react-icons/fa';
import {BiBookAlt} from 'react-icons/bi';
import {BiLinkAlt} from 'react-icons/bi';
import {BsSearch}  from 'react-icons/bs';


const Form = () =>{
    const [author, setAuthor] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleChange = event => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }

    const componentDidMount = async (value) =>{
        if(value === null){}
        const response = await api.get(value);
        setAuthor(response.data.hits);
        console.log(response.data);
    }

    const enviar = () =>{
        componentDidMount(searchTerm);
    }    

   
    

    return(
        <div className="forms">
                <h1>Pesquisar autores</h1>
                <input type="text" onChange={handleChange} className="camp_text"></input>
                <button type="button" className="buttonSend" onClick={enviar}><BsSearch/></button>
                
                <div>
                    {author.map(a => (
                        <li className="information">
                            <h4 className="inputs1">{a.objectID}</h4>
                            <h4 className="inputs"><FaUserAlt/> {a.author}</h4> 
                            <h4 className="inputs"><BiBookAlt/> {a.title}</h4>
                            <h4 className="inputs"><BiLinkAlt/> {a.url}</h4>
                        </li>
                    ))}
                </div>
                
            </div>
    );
}

export default Form;
