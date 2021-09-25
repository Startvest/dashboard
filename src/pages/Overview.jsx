import { IonPage, IonHeader, IonContent } from "@ionic/react";
import { Toolbar, ToolbarItem, DropdownMenu, DropdownItem } from "../Toolbar";
import '../styles/fonts.css';
import '../styles/Overview.css';
import '../styles/Toolbar.css';
import { menuController } from "@ionic/core";
import { caretDownOutline, logOut, settings, lockClosed } from 'ionicons/icons'
export function Overview(){
    
    async function openMenu(){
        
        await menuController.open();
    }
    var link = "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
    return(
        <IonPage>
            <IonHeader> 
                <Toolbar>
                   <ToolbarItem className="profile" url={link} iconRight={caretDownOutline}>
                       <DropdownMenu>
                           <DropdownItem icon={settings}>
                                Settings
                           </DropdownItem>

                           <DropdownItem icon={lockClosed}>
                               2FA Security
                           </DropdownItem>

                           <DropdownItem icon={logOut}>
                               Log Out
                           </DropdownItem>

                       </DropdownMenu>
                   </ToolbarItem>
                </Toolbar>
            </IonHeader>
            <IonContent>
                <h3>Welcome</h3> 

            </IonContent>
        </IonPage>
    )
}