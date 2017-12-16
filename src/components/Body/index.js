import Core from "../../core";
import './index.scss';

class Body extends Core {    
    dispatch(action) {
        this.update();
    }
    render() {
        const length = this.state.neuronas;
        const width = 100 / (length + 2) + '%';
        const columns = [];
        for (let index = 0; index < length; index++) {
            columns.push(index);
        }
        return (
            <div class="grid" style={{padding: '20px'}}>
                <div class="column" style={{width}}>Entradas</div>
                {columns.map((v) => (
                    <div class="column" style={{width}}>{v}</div>
                ))}
                <div class="column" style={{width}}>Salida</div>
            </div>
        );
    };
}

export default Body;
