import {Component} from "angular2/core";
import {SignInComponent} from "./sign-in.component";

@Component({
    selector: 'user-toggle',
    template: `
         <a href="#" class="toolbar-dropdown-toggle dropdown-toggle" data-toggle="dropdown">

                        <div class="toolbar-dropdown-toggle-container">
                            <img class="toolbar-user" src="./img/arne.jpg">
                            <b>Arne De Cock</b>
                            <span class="caret"></span>
                        </div>

                    </a>
                    <ul class="toolbar-dropdown-menu dropdown-menu">
                        <li>
                            <a class="toolbar-dropdown-menu-item">profile</a>
                            <!--TODO: set this when user is not signed in-->
                            <!-- <sign-in></sign-in>-->
                        </li>
                        <li>
                            <a class="toolbar-dropdown-menu-item">settings</a>
                        </li>
                         <li>
                            <a class="toolbar-dropdown-menu-item">help</a>
                        </li>
                        <li>
                            <a class="toolbar-dropdown-menu-item">sign out</a>
                        </li>
                    </ul>
    `,
    directives: [SignInComponent]

})
export class UserToggleComponent {

}
