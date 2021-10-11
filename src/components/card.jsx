export function Card(props){
    
    return(
        <div className="card-body" id="card" style={{backgroundColor: props.color, width:props.width}}>
            {props.children}
        </div>
    )
}

export function CardContent(props){

    const content = {
        alignItems: props.align==='left'?'flex-start':'center',
        flexDirection: props.orientation==='horizontal'?'row':'column',
    }
    
    return(
        <div className="card-content" style={content}>
            {props.children}
        </div>
    )
}