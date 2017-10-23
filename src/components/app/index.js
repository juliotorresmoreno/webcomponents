import h from 'h';
import toolbar from '../toolbar';

const state = {
    title: 'uno'
};

export default h.registerElements.app = function app() {
    setTimeout(() => state.title = 'dos');
    return (
        <div class="container">
            <toolbar state={state} prop={3} />
        </div>
    )
};