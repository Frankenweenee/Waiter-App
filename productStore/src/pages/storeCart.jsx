import { ClientMenu } from "../components/store/clientMenu";
import style from "../styles/storeCart.module.css";
export function StoreCart() {
    //const mediaQuery = window.matchMedia("(max-width: 768px)");

    return (
        <div className={style.mainContainerStore}>
            <ClientMenu/>
        </div>
        )}
