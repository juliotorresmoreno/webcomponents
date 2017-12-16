import h from 'h';
//import Menu from "../Menu";
import './index.scss';

export default function Body() {
    const grid = (
        <div class="grid">

            <div class="item">
                <div class="item-content">
                    This can be anything.
                </div>
            </div>

            <div class="item">
                <div class="item-content">
                    <div class="my-custom-content">
                        Yippee!
                    </div>
                </div>
            </div>

        </div>
    );
    setTimeout(() => {
        console.log(new Muuri('.grid'));
    }, 1000)
    return grid;
};