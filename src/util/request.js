

export default function(url, params) {
    return new Promise(function(resolve, reject) {
        fetch(url, params)
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                resolve(response);
            })
            .catch(function(error) {
                reject(error);
            });
    });
}