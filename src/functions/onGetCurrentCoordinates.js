export const onGetCurrentCoordinates = (successFn = () => {}, failureFn = () => {}) => {
    navigator.geolocation.getCurrentPosition(
        data => {
            const lat = data.coords.latitude;
            const lon = data.coords.longitude;
            successFn({lat, lon});
        },

        error => {
            failureFn(error);
        },
        {enableHighAccuracy: true}
    )
};
