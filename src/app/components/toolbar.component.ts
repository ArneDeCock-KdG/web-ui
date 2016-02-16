import {Component} from 'angular2/core';
import {SignInComponent} from "./authentication/sign-in.component";
import {UserToggleComponent} from "./authentication/user-toggle.component";

@Component({
    selector: 'toolbar',
    templateUrl: 'html/toolbar.html',
    directives: [UserToggleComponent]
})
export class ToolbarComponent {
}