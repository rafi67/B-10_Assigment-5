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
    if (id === "donation-1") data = donationAmount + " Taka is Donated for famine-2024 at Noakhali, Bangladesh";
    else if (id === "donation-2") data = donationAmount + " Taka is Donated for Flood Relief in Feni,Bangladesh";
    else data = donationAmount + " Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh";
    return data;
}

function createDateTime() {
    return new Date();
}

function selectButton(donation_id, history_id, donation) {
    
    const btnDonation = document.getElementById(donation_id);
    const btnHistory = document.getElementById(history_id);
    if (donation) {
        btnDonation.classList.remove('bg-white', 'border-2', 'text-xl', 'font-medium', 'text-nav-end-text', 'border-neutral-200', 'rounded-lg');
        btnDonation.classList.add('btn-active', 'bg-button-primary', 'border-none', 'hover:bg-button-primary', 'text-xl', 'font-semibold', 'text-text-primary');
        btnHistory.classList.remove('btn-active', 'bg-button-primary', 'border-none', 'hover:bg-button-primary', 'text-xl', 'font-semibold', 'text-text-primary');
        btnHistory.classList.add('bg-white', 'border-2', 'text-xl', 'font-medium', 'text-nav-end-text', 'border-neutral-200', 'rounded-lg');
    }
    else {
        btnDonation.classList.remove('bg-button-primary', 'border-none', 'hover:bg-button-primary', 'text-xl', 'font-semibold', 'text-text-primary');
        btnDonation.classList.add('bg-white', 'border-2', 'text-xl', 'font-medium', 'text-nav-end-text', 'border-neutral-200', 'rounded-lg');
        btnHistory.classList.remove('bg-white', 'border-2', 'text-xl', 'font-medium', 'text-nav-end-text', 'border-neutral-200', 'rounded-lg');
        btnHistory.classList.add('btn-active', 'bg-button-primary', 'border-none', 'hover:bg-button-primary', 'text-xl', 'font-semibold', 'text-text-primary');   
    }
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