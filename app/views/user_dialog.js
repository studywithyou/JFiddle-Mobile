// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: mpocket
// View: user_dialog
// ==========================================================================

/**
 * @class
 *
 * This is the prototype for any alert dialog view. It is derived from M.DialogView
 * and mainly used for implementing a alert dialog view specific render method.
 *
 * @extends M.DialogView
 */
mpocket.UserDialog = M.DialogView.extend(
/** @scope M.AlertDialogView.prototype */ {

    /**
     * The type of this object.
     *
     * @type String
     */
    type: 'mpocket.UserDialog',

    /**
     * The default title of an alert dialog.
     *
     * @type String
     */
    title: 'JSFiddle User',

    /**
     * If set, contains the dialog's callback in a sub object named 'confirm' or as a function named confirm.
     *
     * @type Object
     */
    callbacks: null,

    /**
     * 
     */
    contentBinding: null,

    /**
     * @type M.FormView
     */
    form: null,

    /**
     * @param obj {object} name description
     */
    inputUser: function(obj) {
        /*
        if(M.DialogView.isActive) {
            M.DialogView.enqueue('inputUser', obj);
        } else {
            M.DialogView.isActive = YES;
            mpocket.UserDialog.design(obj).show();
        }
        */
        mpocket.UserDialog.design(obj).show();
    },

    /**
     * Renders an alert dialog as a pop up
     *
     * @private
     * @returns {String} The alert dialog view's html representation.
     */
    render: function() {
        this.html = '<div class="tmp-dialog-background"></div>';
        this.html += '<div id="' + this.id + '" class="tmp-dialog">';
        this.html += '<div class="tmp-dialog-header">';
        this.html += this.title ? this.title : '';
        this.html +='</div>';
        
        
        //
        // CONTENT
        //
        var binding = this.contentBinding;
        
        this.form = M.FormView.design({
            childViews: 'userName',
            showAlertDialogOnError: YES,
            userName: M.TextFieldView.design({
                        isGrouped: NO,
                        initialText: 'Please, your JSfiddle user ...',
                        cssClassOnInit: 'initialText',
                        cssClass: 'ui-input-text ui-body-c',
                        validators: [M.PresenceValidator],
                        cssClassOnError: 'err',
                        contentBinding: binding,
                        contentBindingReverse: binding
            })

        });
 
        //this.html += '<div class="tmp-dialog-content">';
        this.html += '<div style="margin: 0px 10px 55px 10px" class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c">';
        this.html += this.form.render();
        this.html +='</div>';
        
        //
        // FOOTER
        //
        var button;
        this.html += '<div class="tmp-dialog-footer">';
        var that = this;
        button = M.ButtonView.design({
            value: 'CONFIRM',
            dataTheme: 'b tmp-dialog-smallerbtn',
            events: {
                tap: {
                    target: that,
                    action: 'handleCallback'
                }
            }
        });
        this.html += button.render();
        this.html += '</div>';
        
        
        this.html += '</div>';

        $('body').append(this.html);
        
        if(button.type) {
            button.registerEvents();
            button.theme();
        }
        if(this.form.type) {
            this.form.registerEvents();
            this.form.theme();
        }
    },

    handleCallback: function() {
        if( this.form.validate() ) {
            
            if(this.callbacks && M.EventDispatcher.checkHandler(this.callbacks.confirm)){
                this.bindToCaller(this.callbacks.confirm.target, this.callbacks.confirm.action, this)();               
            }
            else {
                this.hide();
            }
        }
    }

});


