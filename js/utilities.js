function showSectionGetById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}


function hideSectionById(id) {
    document.getElementById(id).classList.add('hidden');
}

function getInputFieldById(id) {
    const input = document.getElementById(id).value;
    return parseFloat(input);
}

function getTextFieldById(id) {
    const text = document.getElementById(id).innerText;
    return parseFloat(text);
}

function setTextFieldById(id, value) {
    document.getElementById(id).innerHTML = value;
}

function setInputFieldById(id, value) {
    document.getElementById(id).value = value;
}

function addClassToDiv(id, cls) {
    document.getElementById(id).classList.add(cls);
}

function RemoveClassFromDiv(id, cls) {
    document.getElementById(id).classList.add(cls);
}