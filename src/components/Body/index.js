import Menu from "../Menu";
import Grid from "../Grid";
import Core from "../../core";

class Body extends Core {
    render() {
        return (
            <div class='document'>
                <Grid />
                <Menu />
            </div>
        );
    };
}

export default Body;
