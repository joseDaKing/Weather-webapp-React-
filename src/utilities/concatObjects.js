export const concatObjects = (...objects) => (
    objects.reduce((concatedObject, object) => ({...concatedObject, ...object}))
)