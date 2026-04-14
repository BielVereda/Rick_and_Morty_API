import "./style.css";

import Specie from "./../../assets/images/icons/alienIcon.png"
import Alive from "./../../assets/images/icons/aliveIcon.png"
import Planet from "./../../assets/images/icons/planetIcon.png"

export const Card = ({image, name, specie, status, location}) => {


    return (
        <div className="card-characters">
            <img src={image} alt="Person Image" />
            <h3>{name}</h3>
            <div className="description-characters">
                <ul>
                    <li>
                        <img src={Specie} alt="Specie" />
                        {specie}
                    </li>
                    <li>
                        <img src={Alive} alt="Status" />
                        {status}
                    </li>
                    <li>
                        <img src={Planet} alt="Location" />
                        {location}
                    </li>
                </ul>
            </div>
        </div>
    );
};