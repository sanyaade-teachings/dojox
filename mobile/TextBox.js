define(["dijit/_WidgetBase", "dijit/form/_FormWidgetMixin", "dijit/form/_TextBoxMixin"], function(WidgetBase,FormWidgetMixin,TextBoxMixin) {

	return dojo.declare("dojox.mobile.TextBox",[WidgetBase,FormWidgetMixin,TextBoxMixin],{
		// summary:
		//		A non-templated base class for textbox form inputs

		baseClass: "mblTextBox",

		// Map widget attributes to DOMNode attributes.
		_setPlaceHolderAttr: "textbox",

		buildRendering: function(){
			if(!this.srcNodeRef){
				this.srcNodeRef = dojo.create("input", {});
			}
			this.inherited(arguments);
			this.textbox = this.focusNode = this.domNode;
		},

		postCreate: function(){
			this.inherited(arguments);
			this.connect(this.textbox, "onfocus", "_onFocus");
			this.connect(this.textbox, "onblur", "_onBlur");
		}
	});
});
