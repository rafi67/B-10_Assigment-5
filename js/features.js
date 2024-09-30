function showHistory() {
    showSectionGetById('history-section');
    removeClassFromDiv('footer', 'mt-20')
    addClassToDiv('footer', 'mt-72')
}

function showDonation() {
    showSectionGetById('donation-section');
    removeClassFromDiv('footer', 'mt-72');
    addClassToDiv('footer', 'mt-20');
}

function addHistory(id, amount) {
    const historyTitle = createHistoryTitle(id, amount);
    const dateTime = createDateTime();
    createElementById('history-section' ,historyTitle, dateTime);
}