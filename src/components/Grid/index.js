import Menu from "../Menu";
import Core from "../../core";
import './index.scss';
import neuronas from "./neuronas";
import actions from "../../actions";

const handleAdd = (that) => (e) => {
    e.preventDefault();
    that.state.capas.push({neuronas: 3});
    that.dispatchEvent({type: actions.neuronas.change});
}

const handleRemove = (that) => (e) => {
    e.preventDefault();
    const index = e.target.dataset.tag;
    if (that.state.capas.length === 1)
        return;
    that.state.capas.splice(index, 1);
    that.dispatchEvent({type: actions.neuronas.change});
}

class Grid extends Core {
    constructor(props) {
        super(props);
        this.handleAdd = handleAdd(this);
        this.handleRemove = handleRemove(this);
    }
    dispatch(action) {
        switch(action.type) {
            case actions.neuronas.change:
                this.update();
                break;
        }
    }
    handleNeuronasChange(capa) {
        const that = this;
        return ({target: {value}}) => {
            that.state.capas[capa].neuronas = value;
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
                                class="form-control"
                                value={v.neuronas} type='number'
                                change={this.handleNeuronasChange(i)} />
                        </div>
                        <div class="form-group">
                            <label style={{display: 'block'}}>
                                Algoritmo
                            </label>
                            <select class="form-control">
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
