

import { Component, h } from "insensitive";

export default class Route extends Component {
    render() {
        const location = window.location.pathname;
        const { path = /.*/, component } = this.props;
        if (!path.test(location)) {
            return <i />;
        }
        return h(component);
    }
}