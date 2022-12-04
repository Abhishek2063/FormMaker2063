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

            case 'onlyNumber' : 
            if (inputText) {
                const onlyNumber = /^[0-9]+$/;
                return onlyNumber.test(inputText.trim());
            }
            return 'empty';
            
            case 'urlCheck' : 
            if (inputText) {
                const urlCheck = /^http[s]?:\/\/www\.linkedin\.com\/(?:in|pub|public-profile\/in|public-profile\/pub)\/(?:[\w]{1,}-[\w]{1,}-[\w]+)$/ 
                return urlCheck.test(inputText.trim());
            }
            return 'empty';

            
            case 'password' : 
            if (inputText) {
                const onlyNumber = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&?@ "]).*$/;
                return onlyNumber.test(inputText.trim());
            }
            return 'empty';

        default:
    }
    return type;
}