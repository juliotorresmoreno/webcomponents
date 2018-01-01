import { Component, h } from "insensitive";
import Toolbar from 'components/Toolbar';
import Body from 'components/Body';
import Services from 'components/Services';

export default class App extends Component {
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