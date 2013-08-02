// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: mpocket
// View: pull_to_refresh
// ==========================================================================

M.PullToRefreshScrollView = M.View.extend(
/** @scope M.ScrollView.prototype */ {

    /**
     * The type of this object.
     *
     * @type String
     */
    type: 'M.PullToRefreshScrollView',


    /**
     * Renders in three steps:
     * 1. Rendering Opening div tag with corresponding data-role
     * 2. Triggering render process of child views
     * 3. Rendering closing tag
     *
     * @private
     * @returns {String} The scroll view's html representation.
     */
    render: function() {
        this.html = '<div id="' + this.id + '" data-role="content"' + ' data-scrollz="pull"' + this.style() + '>';
        //this.html = '<div id="content" data-role="content"' + ' data-scrollz="pull"' + this.style() + '>';

        this.renderChildViews();

        this.html += '</div>';

        
        return this.html;
    },

    /**
     * Applies some style-attributes to the scroll view.
     *
     * @private
     * @returns {String} The button's styling as html representation.
     */
    style: function() {
        var html = '';
        if(this.cssClass) {
            html += ' class="' + this.cssClass + '"';
        }
        return html;
    },
    registerEvents: function() {
 
        var that = this;
        this.internalEvents = {
                pulled: {
                     target: that,
                     action: 'firePulled'
                }
        
            };
        this.bindToCaller(this, M.View.registerEvents)();
    },
    /*
     * @private
     */
    firePulled: function() {
        if( this.events.pulled ) {
            M.EventDispatcher.callHandler( this.events.pulled, null, false, null );
        }
        this.hidePullHeader(true);

    },
    hidePullHeader: function( animation ) {
        $( "#"+this.id ).scrollz('hidePullHeader', animation);                     
    }
    
});

