// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: mpocket
// ==========================================================================
m_require("app/controllers/MyController.js");
m_require("app/views/home.js");
m_require("app/views/jsfiddle_list_view_template.js");
m_require("app/views/preview.js");
m_require("app/views/user_dialog.js");


var mpocket  = mpocket || {};


mpocket.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'home',

    preview: mpocket.preview,
    
    jsfiddle_list_view_template: mpocket.jsfiddle_list_view_template,

    home: mpocket.home
    

});

//
//mobileinit
//
(function($) {
    
    // NAVIGATION
    //$.mobile.page.prototype.options.backBtnText = "Go back";
    //$.mobile.page.prototype.options.addBackBtn      = true;
    //$.mobile.page.prototype.options.backBtnTheme    = "d";

    // PAGE
    $.mobile.page.prototype.options.theme    = "a";
    //$.mobile.page.prototype.options.headerTheme = "a";  // Page header only
    //$.mobile.page.prototype.options.contentTheme    = "a";
    //$.mobile.page.prototype.options.footerTheme = "a";

    // LISTVIEW
    //$.mobile.listview.prototype.options.headerTheme = "a";  // Header for nested lists
    //$.mobile.listview.prototype.options.theme           = "c";  // List items / content
    //$.mobile.listview.prototype.options.dividerTheme    = "d";  // List divider

    //$.mobile.listview.prototype.options.splitTheme   = "c";
    //$.mobile.listview.prototype.options.countTheme   = "c";
    //$.mobile.listview.prototype.options.filterTheme = "c";
    //$.mobile.listview.prototype.options.filterPlaceholder = "Filter data...";

    //$.mobile.dialog.prototype.options.theme = "a";
    //$.mobile.selectmenu.prototype.options.menuPageTheme = "a";
    //$.mobile.selectmenu.prototype.options.overlayTheme = "a";
    
    M.Environment.phonegap = false;
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        //alert("PhoneGap Ready! " + device.platform);
        document.addEventListener("backbutton", handleBackButton, false);
        M.Environment.phonegap = true;
    }

    function handleBackButton() {
        mpocket.MyController.android_handleBackButton();
    }
    
}(jQuery));
