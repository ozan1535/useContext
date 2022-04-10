import { mainContext } from "../../App";
import { useContext } from "react";
const HeaderRight = () => {

    const { counter } = useContext(mainContext);

    return (
        <div>
            HeaderRight
            <p>{counter}</p>
        </div>
    );
}

export default HeaderRight;