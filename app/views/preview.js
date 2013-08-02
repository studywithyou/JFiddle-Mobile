// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: mpocket
// View: webViewPage
// ==========================================================================
mpocket.preview = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    
    events: {
        pageshow: {
            target: null,
            action: function() {
                //M.LoaderView.show( "Loading preview ....");

            }
        }
    },
    
    cssClass: 'webViewPage',

    childViews: isMobile.Android() ? 'content' : 'header content',

    header: M.ToolbarView.design({
        anchorLocation: M.TOP,
        showBackButton: YES,
        isFixed:NO,
        childViews: 'back title',
        back: M.ButtonView.design({
                anchorLocation: M.LEFT,
                value: 'Back',
                icon: 'arrow-l',
                events: {
                    tap: {
                        target: mpocket.MyController,
                        action: 'switchToHome'
                    }
                }
            }),
       title: M.LabelView.design({
            anchorLocation: M.CENTER,
            value: 'PREVIEW'
        })

    }),

    content: M.ContainerView.design({
        cssClass: 'container',
        childViews: 'container',
        container: M.WebView.design({
                value: '',
                cssClass: 'ui-overlay-c preview',
                isScrollable: YES,
                contentBinding: {
                    target: mpocket.MyController,
                    property: 'url'
                },
                events: {
                    load: {
                        action: function(id) {
                                //$('#' + id).animate({ opacity: 1 }, 500);
                                //M.LoaderView.hide();
                        }
                   }
                }
        })

    }),

    footer: M.ToolbarView.design({
        value: 'FOOTER',
        anchorLocation: M.BOTTOM
    })

});

