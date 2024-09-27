function showHistory() {
    showSectionGetById('history-section');
    removeClassFromDiv('footer', 'mt-20')
    addClassToDiv('footer', 'mt-24')
}

function showDonation() {
    showSectionGetById('donation-section');
    removeClassFromDiv('footer', 'mt-24');
    addClassToDiv('footer', 'mt-20');
} 