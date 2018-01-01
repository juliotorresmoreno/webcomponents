import { Component, h } from "insensitive";
import Menu from "components/Menu";
import Grid from "components/Grid";

class Body extends Component {
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
