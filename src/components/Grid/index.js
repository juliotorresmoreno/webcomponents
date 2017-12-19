import Menu from "../Menu";
import Core from "../../core";
import './index.scss';
import neuronas from "./neuronas";
import actions from "../../actions";

let that;

class Grid extends Core {
    constructor(props) {
        super(props);
        this.subscribe = {
            [actions.neuronas.change]: true
        };
        that = this;
    }
    handleAdd() {
        that.services.neuronal.add();
    }
    handleRemove(e) {
        e.preventDefault();
        const index = e.target.dataset.tag;
        that.services.neuronal.remove(index);
    }
    handleNeuronasChange(capa) {
        return ({target: {value}}) => {
            that.services.neuronal.neuronasUpdate(capa, value);
        }
    }
    handleAlgoritmoChange(capa) {
        return ({target: {value}}) => {
            that.services.neuronal.algoritmoUpdate(capa, value);
        }
    }
    ready() {
        const capas = this.state.capas.map((v, i) => (
            <div class="card item" style={{display: 'inline-block'}}>
                <div class="card-body">
                    <a 
                        style={{float: 'right'}} href='' data-tag={i}
                        click={this.handleRemove}>
                        &times;
                    </a>
                    <form>
                        <div class="form-group">
                            <label style={{display: 'block'}}>
                                No. neuronas
                            </label>
                            <input 
                                class="form-control" min={1}
                                value={v.neuronas} type='number'
                                change={this.handleNeuronasChange(i)} />
                        </div>
                        <div class="form-group">
                            <label style={{display: 'block'}}>
                                Algoritmo
                            </label>
                            <select
                                class="form-control" value={v.algoritmo}
                                change={this.handleAlgoritmoChange(i)}>
                                {neuronas.map((v) => (
                                    <option value={v}>{v}</option>
                                ))}
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        ));
        capas.push(
            <div class="card item" style={{
                display: 'inline-block', 
                height: '202px',
                width: '202px',                
            }}>
                <div class="card-body" 
                    style={{
                        'vertical-align': 'middle',
                        'text-align': 'center',
                    }}>
                    <button
                        class="btn btn-primary"
                        click={this.handleAdd}
                        style={{
                            'margin-top': '55px'
                        }}>
                        Agregar
                    </button>
                </div>
            </div>
        );
        const grid = new Muuri(this.grid, {
            dragEnabled: false,
            items: capas
        });
    }
    render() {
        return (
            <div class='content'>
                {this.grid = <div class="grid" />}
            </div>
        );
    };
}

export default Grid;
