import {Component} from 'angular2/core';
import {WelcomeComponent} from "./authentication/welcome.component";

@Component({
    selector: 'my-app',
    template: `
        <div id="main-content">
        <section id="register">
            <welcome></welcome>
        </section>
        </div>

        <footer></footer>
    `,
    directives: [WelcomeComponent]
})
export class AppComponent {
}