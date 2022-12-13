
import React from 'react';
import {useNavigate} from  'react-router-dom';

const Changer = ({destino, titulo}) => {

    const navigate = useNavigate();

    const viajar = () => {

        navigate(destino);

    }

    return (

        <div onClick={()=> viajar()}>
            {titulo}
        </div>
    )
}

export default Changer;