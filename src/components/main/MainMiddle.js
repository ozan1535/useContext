import { mainContext } from "../../App";
import { useContext } from "react";

const MainMiddle = () => {

    const { color, setColor } = useContext(mainContext)
    const changeTheme = () => {
        setColor(!color);
    }

    return ( 
        <div>
            MainMiddle
            <button onClick={changeTheme}>Change Theme</button>
        </div>
     );
}
 
export default MainMiddle;