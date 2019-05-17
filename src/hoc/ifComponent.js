export default props => {
    let component = props.children;

    if (props.expression) {
        component = props.render;
    }

    return (
        component
    );
}