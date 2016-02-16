import {Component} from 'angular2/core';
import {WelcomeComponent} from "./authentication/welcome.component";
import {ToolbarComponent} from "./toolbar.component";
import {RegisterComponent} from "./authentication/register.component";

@Component({
    selector: 'my-app',
    template: `
        <toolbar></toolbar>

        <div id="main-content">
        <section id="register">
            <register></register>
        </section>
        </div>

        <footer>
            <p>test <a>link</a></p>
        </footer>
    `,
    directives: [ToolbarComponent, RegisterComponent]
})
export class AppComponent {
}