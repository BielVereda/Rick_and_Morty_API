import axios from "axios";
import "./style.css";

export const Card = () => {

    axios.get("https://rickandmortyapi.com/api/character")
        .then(res => console.log(res.data.results))
        .catch(err => console.log(err));

    return (
        <h1>Card</h1>
    );
};