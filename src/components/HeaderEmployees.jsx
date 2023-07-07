import "../css/HeaderEmployees.css"
import LogoHeaderHrnet from "../assets/logo-wealthhealth.webp"
import UserConnected from "./UserConnected" 
import { Link } from "react-router-dom"

/**
 * Allows the header to be displayed when "logged in" (by clicking on the HRNet button for the MVP)
 * @param {*} props The use of props on this component will allow to manage the toggle of the modal with the "create an employee" button
 * @returns 'HeaderHrnet' component
 */
export default function HeaderHrnet(props) {

    return(
        <>
            <header className="header-hrnet">
                <Link to="/hrnet"><img className="logo-header-hrnet" src={LogoHeaderHrnet} alt="Logo de Weath Health représentant une sorte de rosace verte." /></Link>

                <UserConnected onClick={props.handleClick} setModalOpen={props.setModalOpen} toggleText={"Create an employee"} />
            </header>
        </>
    )
}