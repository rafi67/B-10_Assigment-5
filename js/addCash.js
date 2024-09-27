function addCash(id) {
    const inputBalance = getInputFieldById('input-balance' + '-' + id);
    const availableBalance = getTextFieldById('balance');
    const totalBalance = getTextFieldById('total-balance' + '-' + id);
    const newTotalBalance = totalBalance + inputBalance;
    const newBalance = availableBalance - inputBalance;

    if (availableBalance>=inputBalance && inputBalance>0) {
        setTextFieldById('total-balance' + '-' + id, newTotalBalance + ' BDT');
        setTextFieldById('balance', newBalance + ' BDT');
        setInputFieldById('input-balance' + '-' + id, "");
        my_modal_2.showModal();
    }
    else {
        alert('insufficient balance');
        setInputFieldById('input-balance' + '-' + id, "");
    }

}

document.getElementById('btn-donation-1').addEventListener('click', function () {
    addCash('1');
});

document.getElementById('btn-donation-2').addEventListener('click', function () {
    addCash('2');
});

document.getElementById('btn-donation-3').addEventListener('click', function () {
    addCash('3');
});