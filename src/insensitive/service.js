import patch from './patch';


const dispatchEvent = (action) => {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.dispatch(action);
        element.compareAndRefresc(action);
    }
}

const services = {};
const state = {};
const events = [];


export default class Component {
    constructor(props, newState = {}) {
        for (const key in newState) {
            if (newState.hasOwnProperty(key)) {
                state[key] = newState[key];
            }
        }
        this.state = state;
        this.props = props || {};
        this.services = services;
        this.subscribe = {};
    }
    begin() {
        events.splice(0, events.length);
    }
    commit() {
        const event = {
            types: events.map((v) => v.type),
            events: events
        }
        dispatchEvent(event);
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
    dispatch() {

    }
    dispatchEvent(action) {
        events.push(event);
    }
}