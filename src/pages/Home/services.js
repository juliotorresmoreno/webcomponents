

import { h, Link } from "insensitive";

const products = [
    {
        title: 'Websites development',
        description: `Ofrecemos la creación de sitios web preconfigurados o bien el desarrollo completo de 
                      los mismos, usted podra elegir entre miles de plantillas, un asistente personalizado 
                      o bien solicitar el diseño a mano.`
    },
    {
        title: 'Mobile apps',
        description: `Desarrollamos codigo nativo para todas las plataformas, ¿por qué elegir si pagar más 
                      por tener soporte para iOS, que si es nativo o hibrido? con nosotros las aplicaciones 
                      se hacen en react-native y xamarin, usted podrá disfrutar del desarrollo eficiente de 
                      aplicaciones y podrá ejecutarlo en todas las plataformas.`
    },
    {
        title: 'Reconocimiento facial',
        description: 'Desarrollamos software experimental capaz de realizar reconocimiento de rostros a travez de servidores propios o de terceros.',
        link: '/reconocimento-facial'
    },
    {
        title: 'ODOO',
        description: `Administre toda su empresa con una de nuestras instancias de odoo, podrá tener su 
                      propio servidor privado o compartirlo con otros usuarios, si desea expandir su negocio 
                      podemos crear o modificar extensiones personalizados.`
    },
    {
        title: 'Hosting',
        description: `Almacenamos en la nube su sitio web, no tendrá que preocuparse de tener una persona 
                      encargada de administrarlo, ni de las copias de seguridad ni de actualizarlo.`
    },
    {
        title: 'Ecommerce',
        description: `Su página web con carrito de compras incorporado todo esto gracias a prestashop y 
                      woocommerce.`
    },
    {
        title: 'Microservicios',
        description: `Despliegue o incorpore a su negocio nuevas funcionalidades a medida que su negocio crece.
                    La arquitectura basada en micro-servicios garantiza la escalabilidad y la tolerancia a 
                    fallos.`
    },
    {
        title: 'Software Embebido',
        description: `Expanda las ventajas de rendimiento de los lenguajes de programación compilados en su 
                      proyecto. 
                      A partir de ahora no sera necesario re-implementar todo su sistema si presenta cuellos 
                      de botella, puede añadir u optimizar su aplicación saltándose las barreras del lenguaje 
                      con que fue construido originalmente.`
    },
    {
        title: 'Seguridad',
        description: `Proteja su sitio u aplicación web insegura a través de nuestra api, ofrecemos 
                      actualización en caso de ser posible y/o protección a través de un proxy reverso 
                      que valida las peticiones.`
    },
    {
        title: 'En tiempo real',
        description: `Puede revisar sus estadísticas de uso en tiempo real, incluso puede desplegar un chat 
                      interno dentro de sus aplicaciones.`
    },
    {
        title: 'Backups programados',
        description: 'Programe copias de seguridad de sus bases de datos y restáurelas cuando lo necesite.'
    }
];


export default () => {
    return (
        <div id='services'>
            <div class="row">
                {products.map((v, i) => (
                    <div key={i} class="col-lg-4">
                        {typeof v.link === 'string'?
                            <h2><Link class='link' to={v.link}>{v.title}</Link></h2>:
                            <h2>{v.title}</h2>}
                        <p style={{'text-align': 'justify'}}>{v.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}