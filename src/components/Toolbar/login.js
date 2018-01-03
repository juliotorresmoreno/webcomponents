import { Component, h } from "insensitive";


let that;
export default class Services extends Component {
    constructor(props) {
        super(props);
        this.usuario = '';
        this.password = '';
        that = this;
    }
    handleSignIn() {
        that.services.auth.login({
            usuario: that.usuario,
            password: that.password
        });
    }
    handleInputChange(store) {
        const that = this;
        return function({target: {value}}) {
            that[store] = value;
        }
    }
    render() {
        return (
            <div class="modal fade" id="loginDialog" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Credentials</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label
                                        for="recipient-user"
                                        class="col-form-label">
                                        Username:
                                    </label>
                                    <input
                                        change={this.handleInputChange('usuario')}
                                        type="text" value={this.usuario}
                                        class="form-control"
                                        id="recipient-user" />
                                </div>
                                <div class="form-group">
                                    <label
                                        value={this.pass}
                                        for="recipient-pass"
                                        class="col-form-label">
                                        Password:
                                    </label>
                                    <input
                                        change={this.handleInputChange('password')}
                                        type="password"
                                        class="form-control"
                                        id="recipient-pass" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button
                                click={this.handleSignIn}
                                type="button"
                                class="btn btn-primary">
                                Sign in
                            </button>
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}