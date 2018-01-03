import { Component, h, Route } from "insensitive";
import Toolbar from 'components/Toolbar';
import Home from 'pages/Home';
import Footer from 'components/Footer';
import Auth from 'services/auth';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.services.auth = new Auth();
    }
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