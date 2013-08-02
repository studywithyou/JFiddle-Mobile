// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: mpocket
// View: jfiddle_list_view_template
// ==========================================================================

mpocket.jsfiddle_list_view_template = M.ListItemView.design({

    events: {
        tap: {
            target: mpocket.MyController,
            action:'showActionSheet'
        }
    },
    
    cssClass: 'jsfiddle_list_view_template',

    //childViews: 'image name subtitle1 subtitle2',
    childViews: 'name subtitle1 subtitle2',

    image: M.ImageView.design({

        computedValue: {

            valuePattern: '<%= framework %>',

            operation: function(v) {

                return 'theme/images/jsfiddle_60x60.png';

            }

        },

        cssClass: 'jsfiddle_image'

    }),

    name: M.LabelView.design({

        valuePattern: '<%= title %>'

    }),

    subtitle1: M.LabelView.design({

        valuePattern: '<%= framework %>',

        cssClass: 'jsfiddle_subtitle1'

    }),
    subtitle2: M.LabelView.design({

        computedValue: {

            valuePattern: '<%= description %>',

            operation: function(v) {

                return '[' + v + ']';

            }

        },

        cssClass: 'jsfiddle_subtitle2'

    })

});

