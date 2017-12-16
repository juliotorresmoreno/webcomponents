import h from 'h';
import Toolbar from '../Toolbar';
import Body from '../Body';

const state = {
    title: 'uno'
};

export default function App() {
    return (
        <div class="">
            <Toolbar state={state} />
            <Body />
        </div>
    )
};