
import React, {useState, useEffect} from 'react';
import Changer from '../../Components/Changer/Changer';
import {rickMorty} from '../../Services/apiCalls';
import './Home.css';


const Home = () => {

    const [characters, setCharacters] = useState([]);

    //Cuando se ha cargado el componente, hemos creado el hook characters, al setearlo a array vacio, se ejecutará...al ejecutarse llama al useEffect

    useEffect(()=> {

        if(characters.length === 0){

            rickMorty().then(
                res => {
                    setCharacters(res.data.results)
                }
            )
        }


    },[characters])


    const selectedPerson = (escogido) => {

        console.log(escogido);

    }

    return (
        <div className="homeDesign">soy Home

            <Changer destino={"/login"} titulo={"Login"}/>

            {characters.length > 0 &&

                characters.map(
                    person => {
                        return (
                            <div onClick={()=> selectedPerson(person)} key={person.id}>{person.name}</div>
                        )
                    }
                )
            
            
            }


        </div>
    )
}

export default Home;