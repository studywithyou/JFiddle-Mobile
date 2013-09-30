// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: mpocket
// View: home
// ==========================================================================
m_require("app/views/jsfiddle_list_view_template.js");
m_require("app/views/pull_to_refresh.js");

mpocket.home = M.PageView.design({
    events: {
        //pagebeforeshow: {
        //  target: mpocket.MyController,
        //  action: 'hidePullHeader'
        //},
        pageshow: {
            target: mpocket.MyController,
            action: 'init'
        },
        orientationdidchange: {
            target: mpocket.MyController, 
            action: function() { this.hidePullHeader(500); }
        }
        
    },
    //childViews: isMobile.Android() ? 'content' : 'header content',
    childViews: 'content',
    
    header: M.ToolbarView.design({
        //value: 'Fiddle(s)',
        //anchorLocation: M.TOP,
        
        childViews: "label btnRight",

        label: M.LabelView.design({
            anchorLocation: M.CENTER,
            value: 'Fiddle(s)'
        }),
        
        btnRight: M.ButtonView.design({
            anchorLocation: M.RIGHT,
            value: 'user',
             //isIconOnly: true,
            icon: 'gear',
            events: {
                tap: {
                    target: mpocket.MyController,
                    action: 'inputUser'
                }
            }
        })
    }),
    content: M.PullToRefreshScrollView.design({
        
        events: {
                pulled: {
                     target: mpocket.MyController,
                     action: 'loadJSFiddle'
                }
        
            },
          
        childViews: 'controlsList',
        controlsList: M.ListView.design({
            listItemTemplateView: mpocket.jsfiddle_list_view_template,
            contentBinding: {
                target: mpocket.MyController,
                property: 'listObject'
            },
            //idName: 'url'
            useIndexAsId: YES
        })
    }),
    footer: M.ToolbarView.design({
        value: 'FOOTER',
        anchorLocation: M.BOTTOM
    })

    
});

