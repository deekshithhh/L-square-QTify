import LogoImage from "../../assets/Logo.png"
import React from "react"
import logo from './logo.module.css'

export default function AppLogo(){
    return (<img className={logo} src={LogoImage} alt="Logo"/>)
}