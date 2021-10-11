export function IconCircle(props){

    const myStyle = {
        borderRadius: '50%', 
        width: '35px',
        height: '35px',
        maxWidth: '55px',
        maxHeight: '55px',
        backgroundColor: props.color==null?'#ececec':props.color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return(
        <div style={myStyle}>
            {props.children}
        </div>
    )
}