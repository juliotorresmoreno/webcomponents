import Core from "../../core";

const handleAdd = (that) => (e) => {
    e.preventDefault();
    if (that.state.neuronas === 10)
        return;
    that.state.neuronas++;
    that.dispatchEvent({type: '@neuronas/change'});
}

const handleRemove = (that) => (e) => {
    e.preventDefault();
    if (that.state.neuronas === 1)
        return;
    that.state.neuronas--;
    that.dispatchEvent({type: '@neuronas/change'});
}

export default class Toolbar extends Core {
    constructor(props) {
        super(props);
        this.handleAdd = handleAdd(this);
        this.handleRemove = handleRemove(this);
    }
    
    render() {
        const {props} = this;
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#">
                    {props.state.title}
                </a>
                <button 
                    class="navbar-toggler" 
                    type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a 
                            class="nav-link" href=""
                            click={this.handleAdd}>
                            Agregar
                        </a>
                    </li>
                    <li class="nav-item">
                        <a 
                            class="nav-link" href="" 
                            click={this.handleRemove}>
                            Eliminar
                        </a>
                    </li>
                </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a 
                                class="nav-link dropdown-toggle" 
                                href="#" id="navbarDropdown" 
                                role="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" click={() => console.log('sd')}>Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};