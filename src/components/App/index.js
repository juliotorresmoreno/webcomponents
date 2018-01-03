import { Component, h, Route } from "insensitive";
import Toolbar from 'components/Toolbar';
import Home from 'pages/Home';
import Footer from 'components/Footer';

export default class App extends Component {
    render() {
        return (
            <div class="">
                <Toolbar />
                <Route path={/^\/$/} component={Home} />

                <Footer />
            </div>
        );
    }
};