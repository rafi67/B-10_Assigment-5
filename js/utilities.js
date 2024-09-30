function showSectionGetById(id) {
    addClassToDiv('donation-section', 'hidden');
    addClassToDiv('history-section', 'hidden');
    removeClassFromDiv(id, 'hidden');
}


function createElementById(id, title, date) {
    let newDiv = document.createElement('div');
    let header = document.createElement('h3');
    let paragraph = document.createElement('p');
    header.innerText = title;
    paragraph.innerText = date;
    header.classList.add('text-xl', 'font-bold', 'text-text-primary');
    paragraph.classList.add('text-base', 'font-light');
    newDiv.appendChild(header);
    newDiv.appendChild(paragraph);
    newDiv.classList.add('w-11/12', 'border-2', 'border-neutral-100', 'rounded-2xl', 'p-8', 'mx-auto', 'mt-6');
    document.getElementById(id).appendChild(newDiv);
}

function createHistoryTitle(id, donationAmount) {
    let data;
    if(id==="donation-1") data = donationAmount+"Taka is Donated for famine-2024 at Noakhali, Bangladesh";
    else if(id==="donation-2") data = donationAmount+"Taka is Donated for Flood Relief in Feni,Bangladesh";
    else data = donationAmount+"Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh";
    return data;
}

function createDateTime() {
    return new Date();
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

function removeClassFromDiv(id, cls) {
    document.getElementById(id).classList.remove(cls);
}