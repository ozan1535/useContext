import { useContext } from "react";
import { mainContext } from "../../App";


const HeaderMiddle = () => {

    const { color, colorName } = useContext(mainContext);

    return (
        <div>
            HeaderMiddle
            <p style={{ color: colorName == "purple" ? "purple" : "red" }}>{color === true ? "True" : "False"}</p>
        </div>
    );
}

export default HeaderMiddle;