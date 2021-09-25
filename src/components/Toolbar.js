import { IonAvatar, IonIcon } from '@ionic/react';
import { caretDownOutline } from 'ionicons/icons';
import { useState } from 'react';
export function Toolbar(props){

    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

export function ToolbarItem(props){

    const [open, setOpen] = useState(false);

    return(
        <li className="toolbar-item profile">
            <a href="#" className="dropdown-btn" onClick={()=>setOpen(!open)}>
                <IonAvatar className="avatar"> 
                    <img className="logo" src={props.url}/>
                </IonAvatar>
                <IonIcon className="icon" slot="end" color={open ? 'primary':'dark'} icon={caretDownOutline} />
            </a>

            {open && props.children}
        </li>
    )
}

export function DropdownMenu(props){

    
    return(
        <div className="dropdown-menu">
            {props.children}
        </div>
    )
}

export function DropdownItem(props){

    return(
        <a className="dropdown-item">
            <IonIcon slot="start" size={props.size} className="dropdown-icon" icon={props.icon}/>
            {props.children}
        </a>
    )
}


