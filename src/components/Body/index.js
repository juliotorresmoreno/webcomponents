import classnames from "classnames";
import Core from "../../core";
import './index.scss';

const neuronas = [
    "all_candidate_sampler",
    "atrous_conv2d",
    "atrous_conv2d_transpose",
    "avg_pool",
    "avg_pool3d",
    "batch_norm_with_global_normalization",
    "batch_normalization",
    "bias_add",
    "bidirectional_dynamic_rnn",
    "compute_accidental_hits",
    "conv1d",
    "conv2d",
    "conv2d_backprop_filter",
    "conv2d_backprop_input",
    "conv2d_transpose",
    "conv3d",
    "conv3d_backprop_filter_v2",
    "conv3d_transpose",
    "convolution",
    "crelu",
    "ctc_beam_search_decoder",
    "ctc_greedy_decoder",
    "ctc_loss",
    "depthwise_conv2d",
    "depthwise_conv2d_native",
    "depthwise_conv2d_native_backprop_filter",
    "depthwise_conv2d_native_backprop_input",
    "dilation2d",
    "dropout",
    "dynamic_rnn",
    "elu",
    "embedding_lookup",
    "embedding_lookup_sparse",
    "erosion2d",
    "fixed_unigram_candidate_sampler",
    "fractional_avg_pool",
    "fractional_max_pool",
    "fused_batch_norm",
    "in_top_k",
    "l2_loss",
    "l2_normalize",
    "leaky_relu",
    "learned_unigram_candidate_sampler",
    "local_response_normalization",
    "log_poisson_loss",
    "log_softmax",
    "log_uniform_candidate_sampler",
    "lrn",
    "max_pool",
    "max_pool3d",
    "max_pool_with_argmax",
    "moments",
    "nce_loss",
    "normalize_moments",
    "pool",
    "quantized_avg_pool",
    "quantized_conv2d",
    "quantized_max_pool",
    "quantized_relu_x",
    "raw_rnn",
    "relu",
    "relu6",
    "relu_layer",
    "sampled_softmax_loss",
    "selu",
    "separable_conv2d",
    "sigmoid",
    "softmax",
    "softplus",
    "softsign",
    "static_bidirectional_rnn",
    "static_rnn",
    "static_state_saving_rnn",
    "sufficient_statistics",
    "tanh",
    "top_k",
    "uniform_candidate_sampler",
    "weighted_moments",
    "with_space_to_batch",
    "xw_plus_b",
    "zero_fraction"
];

const handleTabChange = (that) => (e) => {
    e.preventDefault();
    that.salida = e.target.name === 'salida';
    that.entrada = e.target.name === 'entrada';
    that.update();
}

const handleAdd = (that) => (e) => {
    e.preventDefault();
    that.state.capas.push({neuronas: 3});
    that.dispatchEvent({type: '@neuronas/change'});
}

const handleRemove = (that) => (e) => {
    e.preventDefault();
    const index = e.target.dataset.tag;
    if (that.state.capas.length === 1)
        return;
    that.state.capas.splice(index, 1);
    that.dispatchEvent({type: '@neuronas/change'});
}

class Body extends Core {
    constructor(props) {
        super(props);
        this.entrada = true;
        this.salida = false;
        this.handleAdd = handleAdd(this);
        this.renderForm = this.renderForm.bind(this);
        this.handleRemove = handleRemove(this);
        this.handleTabChange = handleTabChange(this);
    }
    dispatch(action) {
        this.update();
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
                                value={v.neuronas} type='number'
                                change={this.handleNeuronasChange(i)} />
                        </div>
                        <div class="form-group">
                            <label style={{display: 'block'}}>
                                Example select
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
            dragEnabled: true,
            items: capas
        });
    }
    renderForm() {
        if (this.entrada) {
            return (
                <form class="px-4 py-3">
                    <div class="form-group">
                        <label>Ruta</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Learning rate</label>
                        <input type="decimal" class="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Actualizar
                    </button>
                </form>
            );
        }
        return (
            <form class="px-4 py-3">
                <div class="form-group">
                    <label>No. neuronas</label>
                    <input
                        type="decimal" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Tipo de problema</label>
                    <select class="form-control">
                        <option value='clasificacion'>Clasificacion</option>
                        <option value='regresion'>Regresion</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">
                    Actualizar
                </button>
            </form>
        );
    }
    render() {
        const
            salida = this.salida,
            entrada = this.entrada;
        return (
            <div class='document'>
                <div class='content'>
                    {this.grid = <div class="grid" />}
                </div>
                <div class='menu'>
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
                    <this.renderForm />
                </div>
            </div>
        );
    };
}

export default Body;
