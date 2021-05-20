export default function (DataObj) {
    //creat query string
    //----------one of method creat query string:

    let newUrl = `?FName=${DataObj.FName}&LName=${DataObj.LName}&Email=${DataObj.Email}&Phone=${DataObj.Phone}&Sex=${DataObj.Sex}&Skills=${DataObj.Skills.join('|')}&Department=${DataObj.Department.join('|')}`
    // let newUrl = currentUrl+'?FName='+DataObj.FName+'&LName='DataObj.LName+'&Email='DataObj.Email+'&Phone='DataObj.Phone+'&Sex='+DataObj.Sex+'&Skills='+DataObj.Skills.join('|')+'&Department='+DataObj.Department.join('|');
    history.pushState('', '', newUrl);

    //---------------another method:
    // requestURL.set('FName', DataObj.FName);
    // requestURL.set('LName', DataObj.LName);
    // requestURL.set('Email', DataObj.Email);
    // requestURL.set('Phone', DataObj.Phone);
    // requestURL.set('Sex', DataObj.Sex);
    // requestURL.set('Skills', DataObj.Skills.join('|'));
    // requestURL.set('Department', DataObj.Department.join('|'));



    //----------creat XMLHttpRequest
    // function sendRequest(method, url, body = null) {   //function request
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest()
    //         xhr.open(method, url)
    //         xhr.responseType = ''
    //         xhr.setRequestHeader('Content-Type', 'userForm/string')

    //         xhr.onload = () => {
    //             if (xhr.status >= 400) {
    //                 reject(xhr.response)
    //             } else {
    //                 resolve(xhr.response)
    //             }
    //         }

    //         xhr.onerror = () => {
    //             reject(xhr.response)
    //         }

    //         xhr.send();
    //     });
    // };

    // //---------send request
    // sendRequest('POST', requestURL)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
};
