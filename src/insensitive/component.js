import patch from './patch';

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


export default class Component {
    constructor(props, newState = {}) {
        for (const key in newState) {
            if (newState.hasOwnProperty(key)) {
                state[key] = newState[key];
            }
        }
        this.vDOM = true;
        this.state = state;
        this.props = props || {};
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
        patch(element, this.renderComponent());
        ready();
    }
    dispatch() {

    }
    dispatchEvent(action) {
        dispatchEvent(action);
    }
    update() {
        if (document.body === this.DOM || document.body.contains(this.DOM)) {
            const newElement = this.render();
            if (this.vDOM)
                this.DOM = patch(this.DOM, newElement);
            else {
                this.DOM.parentNode.replaceChild(newElement, this.DOM);
                this.DOM = newElement;
            }
            this.ready();
        }
    }
    updateElement(oldElement, newElement) {
        if (document.body === this.DOM || document.body.contains(this.DOM)) {
            if (this.vDOM)
                this.DOM = patch(oldElement, newElement);
            else
                oldElement.parentNode.replaceChild(newElement, this.DOM);
            this.ready();
        }
    }
    renderComponent() {
        this.componentWillMount();
        if (this.vDOM)
            return this.DOM = patch(this.DOM, this.render());
        return this.DOM = this.render();
    }
    render() {
        return null;
    }
}