

import { Component, h } from "insensitive";
import Banner from './banner';
import Technologies from './technologies';
import Services from './services';
import Clients from './clients';

export default class Home extends Component {
    render() {
        return (
            <div class='container' style={{background: 'white'}}>
                <br />
                <Banner />
                <br />
                <br />

                <Services />
                <br />
                <br />

                <Technologies />
                <br />
                <br />

                <Clients />
                <br />
                <br />
            </div>
        );
    }
}
