/**
 * Check for conversations that need tooltips every 5 seconds
 */
module.exports = (els, Storage, interval = true) => {
    const addTooltip = (el, name) => {
        el.setAttribute('data-hover', 'tooltip');
        el.setAttribute('data-tooltip-position', 'right');
        el.setAttribute('data-tooltip-content', name);
    };

    const checkTooltips = () => {
        // Conversations
        const convos = els.conversations.querySelectorAll('._1ht1');
        [].forEach.call(convos, conversation => {
            if(!conversation.classList.contains('Mess-injected-tooltip')) {
                conversation.classList.add('Mess-injected-tooltip');

                const avatar = conversation.querySelector('._4ldz');
                const convoName = conversation.querySelector('._1qt4 ._1qt5 ._1ht6');
                if(avatar && convoName) {
                    addTooltip(avatar, convoName.textContent);
                }
            }
        });

        // Active contacts
        const activeContacts = els.conversations.querySelectorAll('._5l37');
        [].forEach.call(activeContacts, contact => {
            if(!contact.classList.contains('Mess-injected-tooltip')) {
                contact.classList.add('Mess-injected-tooltip');

                const avatar = contact.querySelector('._4ldz');
                const contactName = contact.querySelector('._364g');
                if(avatar && contactName) {
                    addTooltip(avatar, contactName.textContent);
                }
            }
        });
    };

    if(interval) {
        checkTooltips();
        window.setInterval(checkTooltips, 5000);
    }

    return checkTooltips;
};
