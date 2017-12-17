import Core from "../../core";

export default class Toolbar extends Core {    
    render() {
        const {props} = this;
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-light-blue">
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
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a 
                                class="nav-link dropdown-toggle" 
                                href="#" id="navbarDropdown" 
                                role="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">
                                Archivo
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a 
                                    class="dropdown-item" href="#" 
                                    click={() => console.log('sd')}>
                                    Nuevo
                                </a>
                                <a 
                                    class="dropdown-item" href="#" 
                                    click={() => console.log('sd')}>
                                    Guardar
                                </a>
                                <a
                                    class="dropdown-item" href="#"
                                    click={() => console.log('sd')}>
                                    Ejecutar
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};