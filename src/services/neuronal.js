import { Component, h } from "insensitive";
import actions from "actions";
import state from "store";

class Neuronal extends Component {
    constructor(props) {
        super(props, state);
        this.services.neuronal = this;
    }

    add() {
        this.state.capas.push({
            neuronas: 3,
            algoritmo: ''
        });
        this.dispatchEvent({
            types: [
                actions.neuronas.change
            ]
        });
    }
    
    remove(index) {
        if (this.state.capas.length === 1)
            return;
        this.state.capas.splice(index, 1);
        this.dispatchEvent({
            types: [
                actions.neuronas.change
            ]
        });
    }

    neuronasUpdate(index, value) {
        this.state.capas[index].neuronas = value;
    }

    algoritmoUpdate(index, value) {
        this.state.capas[index].algoritmo = value;
    }
}

export default Neuronal;
