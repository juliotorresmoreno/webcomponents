

import { Component, h } from "insensitive";

export default class Link extends Component {
    render() {
        return <a href={this.props.to}></a>;
    }
}