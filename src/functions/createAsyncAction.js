const createAsyncAction = (acitonsObj, fn) => {
    const actions = getActions(acitonsObj);

    return () => (dispatch, prevState) => {
        fn({
            actions: actions,
            dispatch: dispatch,
            prevState: prevState
        })
    };
};

function getActions(actions) {
    return Object.entries(actions)
        .reduce((obj, item) => {
            const [key, value] = item;
            const {getAction} = value;
            obj[key] = getAction;
            return obj;
        }, {});
}

export {createAsyncAction};