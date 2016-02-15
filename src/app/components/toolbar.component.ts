import {Component} from 'angular2/core';
import {SignInComponent} from "./authentication/sign-in.component";

@Component({
    selector: 'toolbar',
    templateUrl: 'html/toolbar.html',
    directives: [SignInComponent]
})
export class ToolbarComponent {
}