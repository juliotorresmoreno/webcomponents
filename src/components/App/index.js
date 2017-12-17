import Core from "../../core";
import Toolbar from '../Toolbar';
import Body from '../Body';
import Services from '../Services';

export default class App extends Core {
    render() {
        return (
            <div class="">
                <Services />

                <Toolbar />
                <Body />
            </div>
        );
    }
};