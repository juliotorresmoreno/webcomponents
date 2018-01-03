
import { h } from "insensitive";

export default () => {
    return (
        <div>
            <div class="row">
                <div class="col-lg-12">
                    <h3>¿Con quién hemos trabajado?</h3>
                    <br />
                </div>
                <div class="col-lg-3 col-sm-6" />
                <div class="col-lg-3 col-sm-6">
                    <span class="thumbnail">
                        <img 
                            alt="100%x180" data-src="holder.js/100%x180" 
                            style={{height: '240px', width: '240px', display: 'block'}} 
                            src="/images/fundacion-idi.png" 
                            data-holder-rendered="true"/>
                    </span>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <span class="thumbnail">
                        <img 
                            alt="100%x180" data-src="holder.js/100%x180" 
                            style={{height: '180px', width: '100%', display: 'block'}} 
                            src="/images/MLSDataTools.png" 
                            data-holder-rendered="true"/>
                    </span>
                </div>
            </div>
        </div>
    );
}