Z8.define('org.zenframework.z8.template.controls.Audio', {
    extend: 'Z8.form.field.File',

    completeRender: function() {
        this.callParent();
        this.audioContainer = document.createElement("audio");
        this.box.parentElement.append(this.audioContainer);
    },

    setValue: function(value, displayValue) {
        this.callParent(value, displayValue);

        if(value !== undefined && value[0] !== undefined) {
            DOM.setAttribute(this.audioContainer, "controls", true);
            DOM.setAttribute(this.audioContainer, 'src', 
                encodeURI(value[0].path.replace(/\\/g, '/')) + '?&session=' + Application.session + "&id=" + value[0].id);
        }
    },

    getCls: function() {
		return Z8.form.field.Text.prototype.getCls.call(this).pushIf('audio');
	}

});