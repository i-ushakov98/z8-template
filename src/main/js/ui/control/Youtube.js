Z8.define('org.zenframework.z8.template.controls.Youtube', {
	extend: 'Z8.form.field.Text',

	controlMarkup: function() {
        var markup = this.callParent();
		return [...markup, {tag: "iframe", frameborder: 0, allowfullscreen: true}];
    },

    completeRender: function() {
        this.callParent();
        this.videoContainer = this.selectNode("iframe");
    },

    setValue: function(value, displayValue) {
        this.callParent(value, displayValue);
        DOM.setAttribute(this.videoContainer, 'src', value);
    },

    getCls: function() {
		return Z8.form.field.Text.prototype.getCls.call(this).pushIf('youtube');
	}

});