import React from "react";
import style from "../styles/init.module.css";
import logo from "../img/home.img/logo.png";
import { CiYoutube,  CiTwitter, CiFacebook, CiInstagram } from "react-icons/ci";

export function Init() {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    return (
        <>
        <div className={style.mainContainer}>
            <nav className={style.navContainer}>
                <div className={style.companyContainer}>
                    <div>
                        <img className={style.companyLogo} src={logo} alt="Un plato con un tenedor t un cuchillo encima" />
                    </div>
                    <div>
                        <h3 className={style.companyName}>Virtual Waiter</h3>
                    </div>
                </div>
                <div className={style.navHeaderContainer}>
                    <a className={style.navButton} href={"*"}>
                        INICIO
                    </a>
                    <a className={style.navButton} href={"*"}>
                        GESTOR EMPRESA
                    </a>
                    <a className={style.navButton} href={'/carta'}>
                        CARTA
                    </a>
                    <a className={style.navButton} href={"*"}>
                        PASARELA DE PAGO
                    </a>
                </div>
            </nav>
            <div>
                <main>
                    <div className={style.descriptionCenterContainer}>
                        <p>
                            Damos herramientas para
                            <br />
                            gestionar tus sueños
                        </p>
                    </div>
                </main>
            </div>
            <footer>
                    <h4>
                        Created by: <a href={"*"}>Ex_Machina</a>
                    </h4>
                <div className={style.politicsContainer}>
                    <a href={"*"}>Politica de privacidad</a>
                    <a href={"*"}>politica de cookies</a>
                    </div>
                <div className={style.iconsContainer}>
                    <CiInstagram />
                    <CiFacebook />
                    <CiTwitter />
                    <CiYoutube />
                </div>
            </footer>
        </div>
        </>
    );
}
