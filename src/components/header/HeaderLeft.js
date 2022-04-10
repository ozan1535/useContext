import { mainContext } from "../../App";
import { useContext } from "react";

const HeaderLeft = () => {
    const { themes, color } = useContext(mainContext);

    return (
        <div>
            <p style={color == true ? themes.dark : themes.light}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque cupiditate beatae fugiat, aspernatur sequi dolorem porro, ex iusto sed debitis obcaecati vitae distinctio sapiente rem accusantium, quasi facilis blanditiis provident.</p>

        </div>
    );
}

export default HeaderLeft;