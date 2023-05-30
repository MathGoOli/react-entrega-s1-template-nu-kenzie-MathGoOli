import logo from "../../assets/nu-kenzie.svg"
import style from "./style.module.css"

export const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo} src={logo} alt="" />

        </header>
    )
}