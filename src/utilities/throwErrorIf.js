export const throwErrorIf = ({message, boolean}) => {
    if (boolean) {
        throw new Error(message)
    }
}