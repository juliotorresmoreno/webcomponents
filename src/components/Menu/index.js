

export default function Menu() {
    return (
        <div style={{display: 'inline-block', padding: '10px'}}>
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
            <form class="px-4 py-3">
                <div class="form-group">
                    <label>Learning rate</label>
                    <input
                        type="decimal" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary">
                    Actualizar
                </button>
            </form>
        </div>
    );
};