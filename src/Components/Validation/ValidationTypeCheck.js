export const validateInputs = (inputText, type) => {
    switch (type) {
        case 'string': {
            if (inputText.trim()) {
                const strings = /^[A-Za-z0-9'\-,(,),@,:,#./\s]+$/i;
                if (inputText.trim() && inputText.match(strings)) {
                    return true;
                } else {
                    return false;
                }
            }
            return 'empty';
        }

        case 'alphabetics':
            if (inputText) {
                const alphabetics = /^[a-zA-Z\s]+$/i;
                return alphabetics.test(inputText);
            }
            return 'empty';

        case 'email':
            if (inputText) {
                const emails = /^(?:[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:|\\)*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:|\\)+)\])$/;
                return emails.test(inputText);
            }
            return 'empty';



        default:
    }
    return type;
}