import { mainContext } from "../../App";
import { useContext } from "react";

const MainLeft = () => {

    const { setColorName } = useContext(mainContext);

    const purpleState = () => {
        setColorName('purple');
    }
    const yellowState = () => {
        setColorName('yellow');
    }

    return (
        <div>
            MainLeft
            <button onClick={purpleState}>Purple</button>
            <button onClick={yellowState}>Red</button>
        </div>
    );
}

export default MainLeft;