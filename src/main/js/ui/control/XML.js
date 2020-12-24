Z8.define('org.zenframework.z8.template.controls.XML', {
    extend: 'Z8.form.field.TextArea',
    
    scrollable: false,
    tag: "code",
    inputCls: "lang-xml",

    controlMarkup: function() {
        var markup = this.callParent();
        markup[0].contenteditable = true;
		return [{ tag: "pre", cn: markup }];
    },

    completeRender: function() {
        this.callParent();
        this.codeContainer = this.selectNode("code");
    },

    getValue: function() {
        return this.codeContainer ? this.codeContainer.innerText : "";
    },

    setValue: function(value, displayValue) {
        this.callParent(value, displayValue);
        if(this.codeContainer !== null && value !== undefined) {
            this.codeContainer.innerText = value;
            hljs.highlightBlock(this.codeContainer);
        }
    },

    onFocusOut: function(event, target) {
        this.callParent(event, target);
        hljs.highlightBlock(this.codeContainer);
    },

});