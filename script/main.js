(function() {

    const contactName = document.getElementById('contact-name-input');
    const contactEmail = document.getElementById('contact-email-input');
    const contactMessage = document.getElementById('contact-message-input');

    const comment = document.getElementById('comment');

    const submitMessageButton = document.getElementById('contact-submit');
    submitMessageButton.addEventListener('click', handleSubmitMessage);
    document.addEventListener("keyup", function() {
        if (event.keyCode == 13) {
            handleSubmitMessage()
        }
    })

    function handleSubmitMessage() {

        const contactNameValue = contactName.value;
        const contactEmailValue = contactEmail.value;
        const contactMessageValue = contactMessage.value;

        if (contactNameValue) {
            if (contactEmailValue) {
                if (contactEmailValue) {
                    if (contactMessageValue) {
                        contactMessage.classList.remove('wrong');
                        comment.insertAdjacentHTML('beforeend', `ALL IS OK BRO!<br>`)
                    } else {
                        contactEmail.classList.remove('wrong');
                        contactMessage.classList.add('wrong');
                        comment.insertAdjacentHTML('beforeend', `Komentārs nevar būt tukšs!<br>`)
                    }
                } else {
                    contactEmail.classList.add('wrong');
                    comment.insertAdjacentHTML('beforeend', `Nepareizs e-pasts!<br>`)
                }
            } else {
                contactName.classList.remove('wrong');
                contactEmail.classList.add('wrong');
                comment.insertAdjacentHTML('beforeend', `E-pasts nevar būt tukšs!<br>`)
            }
        } else {
            contactName.classList.add('wrong');
            comment.insertAdjacentHTML('beforeend', `Vārds, uzvārds nevar būt tukšs!<br>`)
        }

    }



}());