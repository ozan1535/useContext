import MainLeft from "./MainLeft";
import MainMiddle from "./MainMiddle";
import MainRight from "./MainRight";
import "../../styles/header.css"

const Main = () => {

    return (
        <div className="header">
            <MainLeft />
            <MainMiddle />
            <MainRight />
        </div>
    );
}

export default Main;