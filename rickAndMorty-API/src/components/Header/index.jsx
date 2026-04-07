import logoGitHub from "./../../assets/images/icons/logoGitHub.svg"
import "./style.css"

export const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <a href="https://github.com/BielVereda" target="_blank">
                    <span>Gabriel Vereda</span>
                    <img src={logoGitHub} alt="GitHub Logo" />
                </a>
            </div>
        </header>
    )
}