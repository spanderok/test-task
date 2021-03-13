export default function () {
    const DataObj = {};

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
    console.log(DataObj);
    return DataObj;
};