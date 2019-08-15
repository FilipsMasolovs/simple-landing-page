(function() {
    const inputElements = document.querySelectorAll('.floating-label-parent');
    const comment = document.getElementById('comment');

    const submitMessageButton = document.getElementById('contact-submit');
    submitMessageButton.addEventListener('click', handleSubmitMessage);

    function validate() {
        let validationData = {};
        const emailRegExp = /\S+@\S+\.\S+/;

        // let nameInput = inputElements[0];
        // let emailInput = inputElements[1];
        // let textInput = inputElements[2];

        // if (!nameInput.value) {
        //     validationData[nameInput.id] = "nevar būt tukšs!";
        // }
        // if (!emailInput.value) {
        //     validationData[emailInput.id] = "nevar būt tukšs!";
        // }
        // if (!textInput.value) {
        //     validationData[textInput.id] = "nevar būt tukšs!";
        // }

        // if (emailInput.value && !emailRegExp.test(emailInput.value)) {
        //     validationData[emailInput.id] = "ir nepareizs!";
        // }

        inputElements.forEach(function(item, index) {
            if (!item.value) {
                validationData[item.id] = "nevar būt tukšs!";
            } else if (item.id === 'contact-email-input' && !emailRegExp.test(item.value)) {
                validationData[item.id] = "ir nepareizs!";
            }
        });
        return validationData
    }

    function handleSubmitMessage() {
        comment.innerHTML = "";
        inputElements.forEach(function(item) {
            item.classList.remove('wrong');
        });
        const validationData = validate();
        console.log(validationData)
        if (Object.keys(validationData).length === 0) {
            comment.innerHTML = "Jūsu ziņa tika veiksmīgi nosūtīta!";
            comment.classList.remove('comment--wrong');
            comment.classList.add('comment--right');
            inputElements.forEach(function(item) {
                item.value = "";
            });
        } else {
            Object.keys(validationData).forEach(function(item) {
                const wrong = document.getElementById(item);
                wrong.classList.add('wrong');
                comment.classList.remove('comment--right');
                comment.classList.add('comment--wrong');
                comment.insertAdjacentHTML('beforeend', `${wrong.dataset.inputType} ${validationData[item]}<br>`);
            });
        };
    }

}());