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
          <paper-button id="logout-button" on-tap="logout">
            <iron-icon icon='kubeflow:logout' title="Logout"></iron-icon>
          </paper-button>
        `;
    }

    static get properties() {
        return {
            logoutUrl: {
                type: String,
            },
        };
    }

    /**
     * Redirects to the logout url.
     */
    logout() {
        window.top.location.href = this.logoutUrl;
    }
}

customElements.define('logout-button', LogoutButton);
