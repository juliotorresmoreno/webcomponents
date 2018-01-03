
import { Component, h } from "insensitive";

const technologies = [
    '/images/aws.png',
    '/images/redux.png',
    '/images/wordpress.png',
    '/images/react2.png',
    '/images/react-native.png',
    '/images/golang.png',
    '/images/odoo.png',
    '/images/python_sh-600x600.png',
    '/images/nodejs.png',
    '/images/kong.png'
];

export default () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <h3>¿Que tecnologías manejamos?</h3>
                    <br />
                </div>
                <div className="col-lg-12" style={{margin: '-10px'}}>
                    <center>
                        {technologies.map((v, i) => {
                            return <img style={{height:'200px', margin: '10px'}} key={i} alt='' src={v} />
                        })}
                    </center>
                </div>
            </div>
        </div>
    );
}