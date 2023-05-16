import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-button/paper-button.js';

/**
 * Logout button component.
 *
 */

export class LogoutButton extends PolymerElement {
    static get template() {
        return html`
            <a href="{{logoutUrl}}">
              <paper-button id="logout-button">
                <iron-icon icon='kubeflow:logout' title="Logout"></iron-icon>
              </paper-button>
            </a>
        `;
    }

    static get properties() {
        return {
            logoutUrl: {
                type: String,
            },
        };
    }
}

customElements.define('logout-button', LogoutButton);
