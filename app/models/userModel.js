// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: mpocket
// Model: userModel
// ==========================================================================

mpocket.userModel = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'userModel',

    /* Sample model properties: */

    name: M.Model.attr('String',{
            isRequired:YES
    })
/*
    lastName: M.Model.attr('String', {
        isRequired:YES
    }),

    zip: M.Model.attr('Integer', {
        isRequired:NO,
        validators: [M.NumberValidator]
    })
*/
}, M.DataProviderLocalStorage);
