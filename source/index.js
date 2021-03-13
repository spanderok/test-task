//------------We can add attribute "action" with our url and add "method" "post" in teg "form"  or:

import './styles.css';
import fillFieldsFromAvailableData from './Task3/fillFieldsFromAvailableData.js'
import creatObjWithDataFromForm from './Task1/creatObjWithDataFromForm.js'
import queryStrAndXMR from './Task2/queryStrAndXMR.js'

const btn = document.getElementById('button');

//=========================================================Task №3=============================================
//-------------------fill in the fields with the available data
fillFieldsFromAvailableData();

//==================================================Task №1==================
//-----------------------------Click on the button 'submit'
btn.addEventListener('click', function () {
    let dataObj = creatObjWithDataFromForm();
    //=-=========================================================Task №2=============================================
    queryStrAndXMR(dataObj);
});
