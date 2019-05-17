import * as utilties from "../utilities";

const {addKeysToObject, copyObject, objectLength, throwErrorIf, concatObjects} = utilties;

const createAction = ({name, payload = []}) => (Object.freeze({
    getName: name,
    getAction: function(args, fn = args => args) {
        const actionPayload = addKeysToObject({}, payload);
    
        let action = addKeysToObject({type: name}, payload);
    
        const createActionObjectPayload = JSON.stringify({type: name, payload: payload});
    
        action = assignActionPayload(action, actionPayload, args, createActionObjectPayload);
    
        action = concatObjects(action, fn(action));
    
        throwErrorIf({
            boolean: !name,
            message: `createAction(${createActionObjectPayload}) missing the argument "name"`
        })
    
        throwErrorIf({
            boolean: !payload,
            message: `createAction(${createActionObjectPayload}) missing the argument "payload"`
        })
    
        return action;
    }
}));

function assignActionPayload(action, actionPayload, args, createActionObjectPayload) {
    action = copyObject(action);
    actionPayload = copyObject(actionPayload);
    args = copyObject(args);
 
    throwErrorIf({
        boolean: objectLength(args) === 0 && objectLength(actionPayload) !== 0,
        message: `createAction(${createActionObjectPayload}).action() missing arguments`
    })
   
    for (let key in args) {
        const value = args[key];
       
        const hasPayloadKey = actionPayload[key] === null;
 
        if (hasPayloadKey) {
            action[key] = value
        }
 
        throwErrorIf({
            boolean: !hasPayloadKey,
            message: `The parameter "${key}" does not exist in createAction(${createActionObjectPayload}).action({${key}: ${value}})`
        })
    }
 
    return action;
}

export {createAction};