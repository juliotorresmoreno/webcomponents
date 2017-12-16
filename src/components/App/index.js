import Core from "../../core";
import Toolbar from '../Toolbar';
import Body from '../Body';
import state from "../../store";

export default class App extends Core {
    constructor(props) {
        super(props, state);
    }
    render() {
        return (
            <div class="">
                <Toolbar state={state} />
                <Body />
            </div>
        );
    }
};