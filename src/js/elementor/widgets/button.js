import * as CONFIG from '../config';
import Base from './base';

export default class Button extends Base {
    constructor(attributes, options) {
        let defaultAttributes;

        defaultAttributes = {};

        super(attributes, options);

        this._initWidget(CONFIG.WIDGETS.BUTTON, defaultAttributes);
    }

    _createValidationErrors() {
        // No Validation Errors Is Required!
    }

    _createLabel() {
        // No Label Required.
    }

    /**
     * Only Call this Method from Base.
     *
     * @returns {*|jQuery|HTMLElement}
     * @private
     */
    _createElement() {
        let $element;

        $element = $('<button>');
        $element.text(this.attributes.text);
        delete this.attributes.text;

        this.$element = $element;

    }

    _initEvents() {
        this.$element.on('click', this.options.events.click);
    }
}