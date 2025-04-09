export const EnumMessages = (messages: number) => {
    switch (messages){
        case 1: return 'SUCCESS';
        case 0: return 'ALREADY EXISTS';
        case -1: return 'FAILED';
        case -2: return 'EMPTY';
        default: return 'DOES NOT MATCH';
    }
};

