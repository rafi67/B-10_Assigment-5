document.getElementById('history-btn').addEventListener('click', function() {
    showSectionGetById('history-section');
    removeClassFromDiv('footer', 'mt-20');
    addClassToDiv('footer', 'mt-72');
    selectButton('donation-btn', 'history-btn', false);
});


document.getElementById('history-anchor').addEventListener('click', function() {
    showSectionGetById('history-section');
    removeClassFromDiv('footer', 'mt-20');
    addClassToDiv('footer', 'mt-72');
});

document.getElementById('donation-btn').addEventListener('click', function() {
    showSectionGetById('donation-section');
    removeClassFromDiv('footer', 'mt-72');
    addClassToDiv('footer', 'mt-20');
    selectButton('donation-btn', 'history-btn', true);
});

document.getElementById('donation-anchor').addEventListener('click', function() {
    showSectionGetById('donation-section');
    removeClassFromDiv('footer', 'mt-72');
    addClassToDiv('footer', 'mt-20');
});

function addHistory(id, amount) {
    const historyTitle = createHistoryTitle(id, amount);
    const dateTime = 'Date : '+createDateTime();
    createElementById('history-section' ,historyTitle, dateTime);
}