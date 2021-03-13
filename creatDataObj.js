//------------We can add attribute "action" with our url and add "method" "post" in teg "form"  or:

//if we have a server, before loading page, we send XMLHttpRequest 'get' on current url:
//let requestURL = sendRequest('GET', URL).then(data => console.log(data)).catch(err => console.log(err));

//but now for example i created response from server:
let requestURL = new URL('https://smthExample.com/search?FName=Dzmitry&LName=Palyka&Sex=Male&Skills=HTML|CSS|JavaScript&Department=FrontEnd|SalesForce');  //enter your url here
const btn = document.getElementById('button');
const DataObj = {};

//=========================================================Task №3=============================================
//-------------------fill in the fields with the available data
document.getElementById('FName').value = requestURL.searchParams.get('FName');
document.getElementById('LName').value = requestURL.searchParams.get('LName');
document.getElementById('Email').value = requestURL.searchParams.get('Email');
document.getElementById('Phone').value = requestURL.searchParams.get('Phone');

//for radio button
if (requestURL.searchParams.get('Sex') === 'Male') {
    document.getElementsByName('Sex')[0].checked = true;
} else if (requestURL.searchParams.get('Sex') === 'Female') {
    document.getElementsByName('Sex')[1].checked = true;
};

//for select Skills
let arrSkillsFromData = requestURL.searchParams.get('Skills').split('|');
for (let i = 0; i < arrSkillsFromData.length; i++) {
    document.getElementById(`${arrSkillsFromData[i]}`).checked = true;
};

//for Department select
let arrDepartmentsFromData = requestURL.searchParams.get('Department').split('|');
for (let i = 0; i < arrDepartmentsFromData.length; i++) {
    document.getElementById(`${arrDepartmentsFromData[i]}`).selected = true;
};

//==================================================Task №1==================
//-----------------------------Click on the button 'submit'
btn.addEventListener('click', function () {
    function validateForm() {
        if (Object.values(DataObj).some((item) => item === '') || DataObj.Skills.length == 0 || DataObj.Department.length == 0) {
            alert("Please, fill in all fields");
        };
    };

    function getCheckedCheckBoxes() {
        const checkboxes = document.getElementsByClassName('checkbox');
        let checkboxesChecked = [];
        for (let index = 0; index < checkboxes.length; index++) {

            if (checkboxes[index].checked) {
                checkboxesChecked.push(checkboxes[index].value);
            }
        }
        
        return checkboxesChecked;
    };

    function getCheckedRadioValue() {
        var elements = document.getElementsByName('Sex');
        for (var i = 0, len = elements.length; i < len; ++i)
            if (elements[i].checked) return elements[i].value;
    };

    function getSelectedOptionsDepartment() {
        let result = [];
        let options = document.getElementById('Department').options;

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                result.push(options[i].value);
            }
        }
        console.log(result);

        return result;
    };

    DataObj.FName = document.getElementById('FName').value;
    DataObj.LName = document.getElementById('LName').value;
    DataObj.Email = document.getElementById('Email').value;
    DataObj.Phone = document.getElementById('Phone').value;
    DataObj.Sex = getCheckedRadioValue();
    DataObj.Skills = getCheckedCheckBoxes();
    DataObj.Department = getSelectedOptionsDepartment();
    validateForm();

    //=-=========================================================Task №2=============================================
    //creat query string
    requestURL = `https://smthExample.com/search?FName=${DataObj.FName}&LName=${DataObj.LName}&Email=${DataObj.Email}&Phone=${DataObj.Phone}&Sex=${DataObj.Sex}&Skills=${DataObj.Skills.join('|')}&Department=${DataObj.Department.join('|')}`

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

});
