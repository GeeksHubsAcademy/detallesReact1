

import axios from 'axios';

export const rickMorty = async () => {

    let res = await axios.get("https://rickandmortyapi.com/api/character");

    return res;

}