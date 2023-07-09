import {Outlet} from "react-router-dom";


const PainelLayout = () => {
    return (
        <div>
            <h1>Painel</h1>
            <Outlet />
        </div>
    )
}


export default PainelLayout