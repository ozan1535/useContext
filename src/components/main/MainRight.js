import { mainContext } from "../../App";
import { useContext } from "react";

const MainRight = () => {

    const { counter, setCounter } = useContext(mainContext);

    const decrease = () => {
        setCounter(counter - 1)
    }

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            MainRight
            <button onClick={decrease}>Decrease</button>
            <button onClick={increase}>Increase</button>
        </div>
    );
}

export default MainRight;