
let waiting = [];
let elements = [];
const ready = () => {
    const rest = [];
    while (waiting.length > 0) {
        const element = waiting.shift();
        if (document.body === element.DOM || document.body.contains(element.DOM)) {
            element.ready();
            elements.push(element);
        } else {
            rest.push(element);
        }
    }
    waiting = rest;
};

const dispatchEvent = (action) => {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.dispatch(action);
        element.compareAndRefresc(action);
    }
}

const services = {};
const state = {};

export default class Core {
    constructor(props, newState = {}) {
        for (const key in newState) {
            if (newState.hasOwnProperty(key)) {
                state[key] = newState[key];
            }
        }
        this.state = state;
        this.props = props;
        this.services = services;
        this.subscribe = {};
        waiting.push(this);
    }
    ready() {

    }
    componentWillMount() {
    }
    compareAndRefresc(action) {
        if (Object.keys(this.subscribe) === 0)
            return;
        for (let index = 0; index < action.types.length; index++) {
            if (this.subscribe[action.types[index]]) {
                this.update();
                return;
            }            
        }
    }
    apply(element) {
        element.appendChild(this.renderComponent());
        ready();
    }
    dispatch() {

    }
    dispatchEvent(action) {
        dispatchEvent(action);
    }
    update() {
        if (document.body === this.DOM || document.body.contains(this.DOM)) {
            const newTree = this.render();
            this.DOM.parentNode.replaceChild(newTree, this.DOM);
            this.DOM = newTree;
            this.ready();
        }
    }
    updateElement(oldElement, newElement) {
        if (document.body === this.DOM || document.body.contains(this.DOM)) {
            oldElement.parentNode.replaceChild(newElement, this.DOM);
            this.ready();
        }
    }
    renderComponent() {
        this.componentWillMount();
        return this.DOM = this.render();
    }
    render() {
        return null;
    }
}