/*
POST http://localhost:8080/auth/register
Host: localhost:8080
content-type: application/json

{
    "nombres": "julio",
    "apellidos": "torres",
    "usuario": "jtorres990",
    "email": "jtorres990@gmail.com",
    "password": "123456",
    "passwordConfirm": "123456"
}
*/
import { Component, h } from 'insensitive';
import { protocol, server } from 'config';
import { request } from '../util';

export default class Auth extends Component {
    constructor(props) {
        super(props);
    }
    login(data) {
        const url = `${protocol}://${server}/auth/login`;
        return request(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    register(data) {
        const url = `${protocol}://${server}/auth/register`;
        return request(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
}