export default unix => (
    new Date(unix * 1000).toTimeString().split(" ")[0]
);