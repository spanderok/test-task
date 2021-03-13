export default function () {
    //if we have a server, before loading page, we send XMLHttpRequest 'get' on current url:
    //let requestURL = sendRequest('GET', URL).then(data => console.log(data)).catch(err => console.log(err));

    //but now for example i created response from server:
    let requestURL = new URL('https://smthExample.com/search?FName=Dzmitry&LName=Palyka&Sex=Male&Skills=HTML|CSS|JavaScript&Department=FrontEnd|SalesForce');  //enter your url here

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
};
