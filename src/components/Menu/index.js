import Core from "../../core";
import classnames from "classnames";

const handleTabChange = (that) => (e) => {
    e.preventDefault();
    that.salida = e.target.name === 'salida';
    that.entrada = e.target.name === 'entrada';
    that.update();
}

export default class Menu extends Core {
    constructor(props) {
        super(props);
        this.entrada = true;
        this.salida = false;
        this.renderForm = this.renderForm.bind(this);
        this.handleTabChange = handleTabChange(this);
    }
    renderForm() {
        if (this.entrada) {
            return (
                <form class="px-4 py-3">
                    <div class="form-group">
                        <label>Ruta</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Learning rate</label>
                        <input type="decimal" class="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Actualizar
                    </button>
                </form>
            );
        }
        return (
            <form class="px-4 py-3">
                <div class="form-group">
                    <label>No. neuronas</label>
                    <input
                        type="decimal" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Tipo de problema</label>
                    <select class="form-control">
                        <option value='clasificacion'>Clasificacion</option>
                        <option value='regresion'>Regresion</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">
                    Actualizar
                </button>
            </form>
        );
    }
    render() {
        const
            salida = this.salida,
            entrada = this.entrada;
        return (
            <div class='menu'>
                <div class="card item">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a
                                href="" click={this.handleTabChange} name='entrada'
                                class={"nav-link "+classnames({active: entrada})}>
                                Entrada
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                href="" click={this.handleTabChange} name='salida'
                                class={"nav-link "+classnames({active: salida})}>
                                Salida
                            </a>
                        </li>
                    </ul>
                    <this.renderForm />
                </div>
            </div>
        );
    };
}