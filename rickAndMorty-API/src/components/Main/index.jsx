import "./style.css"

import illustrationRick from "./../../assets/images/illustrationRick.webp"
import logoRickAndMorty from "./../../assets/images/logoRickAndMorty.webp"

export const Main = () => {
    return (
        <main>
            <div>
                <img src={illustrationRick} alt="Rick" />
            </div>

            <div className="main-content">
                <img src={logoRickAndMorty} alt="Rick and Morty" className="logo-main" />
                <h1>Bem-vindos ao <span>consumo de API</span> do Rick and Morty</h1>
                <p>Aqui você encontra informações sobre os personagens de Rick and Morty.</p>
                <div className="container-btn-main">
                    <a className="btn-primary" href="">Veja Agora</a>
                    <a className="btn-secondary" href="">Saiba Mais</a>
                </div>
            </div>
        </main>
    )
}