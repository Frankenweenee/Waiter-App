import { OrderList } from "./orderMenu";
import style from "../../styles/allListStyles.module.css";
export function ClientMenu() {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    return (
            <div className={style.canvasContainer}>
                <div className={style.companyLogoContainer}>
                    <h4>Nombre de la empresita</h4>
                </div>
                <OrderList />  
            </div>
    );
}
