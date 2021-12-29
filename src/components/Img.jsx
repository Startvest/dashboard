import '../styles/Img.css'
export function Img(props){
    return(
        <img src={props.src} width={props.width} height={props.height} alt={props.alt}></img>
    )
}