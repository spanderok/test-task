export default function (DataObj) {
    //creat query string
    let requestURL = `https://smthExample.com/search?FName=${DataObj.FName}&LName=${DataObj.LName}&Email=${DataObj.Email}&Phone=${DataObj.Phone}&Sex=${DataObj.Sex}&Skills=${DataObj.Skills.join('|')}&Department=${DataObj.Department.join('|')}`

    //----------another method creat query string:

    // requestURL.searchParams.set('FName', DataObj.FName);
    // requestURL.searchParams.set('LName', DataObj.LName);
    // requestURL.searchParams.set('Email', DataObj.Email);
    // requestURL.searchParams.set('Phone', DataObj.Phone);
    // requestURL.searchParams.set('Sex', DataObj.Sex);
    // requestURL.searchParams.set('Skills', DataObj.Skills.join('|'));
    // requestURL.searchParams.set('Department', DataObj.Department.join('|'));

    //----------creat XMLHttpRequest
    function sendRequest(method, url, body = null) {   //function request
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.open(method, url)
            xhr.responseType = ''
            xhr.setRequestHeader('Content-Type', 'userForm/string')

            xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject(xhr.response)
                } else {
                    resolve(xhr.response)
                }
            }

            xhr.onerror = () => {
                reject(xhr.response)
            }

            xhr.send();
        });
    };

    //---------send request
    sendRequest('POST', requestURL)
        .then(data => console.log(data))
        .catch(err => console.log(err))
};
