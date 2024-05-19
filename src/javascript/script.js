const messageForm = document.getElementById('messageForm');
const customerID = document.getElementById('regularCustomerID');
const regularCustomerBox = document.getElementById('regularCustomerBox');

const messageSentToast = document.getElementById('messageSentToast');
const regularMessageSentToast = document.getElementById('regularMessageSentToast');
const errorMessageToast = document.getElementById('errorMessageToast');

regularCustomerBox.onchange = function () {
    customerID.disabled = !this.checked;
};

messageForm.addEventListener('submit', e => { 
    e.preventDefault();

    if (regularCustomerBox.checked == true) {
        let isNumber = /^\d+$/.test(customerID.value);
        if (isNumber != true) {
            showToast(errorMessageToast);
        } else {
            showToast(regularMessageSentToast);
        }
    }
    else {
        showToast(messageSentToast);
    }
});


function showToast(toast) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
    toastBootstrap.show();
}