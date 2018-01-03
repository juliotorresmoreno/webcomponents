import { Component, h } from "insensitive";
import Login from './login';

export default class Toolbar extends Component {    
    render() {
        return (
            <span>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <img style={{height: '40px'}} src="/icons/1_Primary_logo_on_transparent_300x65.png"/>
                    </a>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#tecnologies">Tecnologies</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav mr-right">
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="modal" data-target="#loginDialog" href="javascript: void(0)">Sign in</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Login />
            </span>
        );
    }
};

