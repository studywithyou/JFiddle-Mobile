// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: mpocket
// Controller: MyController
// ==========================================================================
//a list expects an array with listItemViews
m_require( "app/views/webViewPage.js" );

mpocket.MyController = M.Controller.extend({

    /* sample controller property */
    listObject: null,
	
    url: null,
	
    userName: null,

    record: null,
    
    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {
        //alert( 'init' );
        
        if(isFirstLoad) {
           if( !this.loadUser() ) {
               this.set("userName", "bsorrentino");
               //this.inputUser();
               
               if( typeof device !== 'undefined' ) {
                    alert( "platform " + device.platform)
               }
               
           }
           
           this.loadJSFiddle(this.hidePullHeader, this.hidePullHeader);
        }
        /* do something, for any other load. */
    },
    hidePullHeader: function( t ) {
        var _pullToRefresh = M.ViewManager.getView( mpocket.home, "content");
        var f = function() {  
            console.log('hidePullHeader'); 
            _pullToRefresh.hidePullHeader(false); 
        }
        window.setTimeout( f , (t!==undefined) ? t : 1 );
        
    },        
    inputUser: function() {
       var that = this;
       mpocket.UserDialog.inputUser({ 
               callbacks: {
                   confirm: {
                       action: function(dlg) {
                           console.log( "user: " + that.userName);
                           that.loadJSFiddle( 
                                   function() { // success
                                       that.saveUser();
                                       dlg.hide();
                                       that.hidePullHeader(500);
                                   },
                                   function(xhr, msg) { // error  
                                       M.DialogView.alert({
                                           title: msg,
                                           message: "" + xhr.statusText + " - (" + xhr.status +")"
                                       });
                                       
                                   });

                       }
                   }
               },
               contentBinding: {
                   target: that,
                   property: 'userName'
               }        

       });
        this.observable.notifyObservers("userName"); 
    },
    saveUser: function() {
           
        if( this.record === null ) {
            
            var that = this;
            
            var rec = this.record = mpocket.userModel.createRecord( {
                name: that.userName
            });
            this.set("record", rec);
        }
        else {
            this.record.set("name", this.userName);
        }
        
        this.record.save();
        
        
    },
    loadUser: function() {
        var r = mpocket.userModel.find();
        
        if( r.length > 0 ) {
            
            this.set( "record", r[0]);
            this.set( "userName", r[0].get("name"));
            return true;
        }
        
        return false;

    },
    
    loadJSFiddle : function( success, error) {
	    var self = this;
        
        var _url;
        if( isMobile.any() ) {
            _url = 'http://jsfiddle.net/';
        }
        else {
            _url = '/jsfiddle/';
        }
        _url += 'api/user/'+ this.userName + '/demo/list.json?callback';
       
        M.LoaderView.show('Loading Public Fiddles ....')
        M.Request.init({
                    url: _url,
                    method: 'GET',
                    isJSON: YES,
                    onSuccess: function(data, msg, xhr) { 
                        M.LoaderView.hide();
                    	self.set( 'listObject', data );
                        if( success ) success( data, msg, xhr );
                    },
                    onError: function(xhr, msg) {
                        M.LoaderView.hide();
                        console.log('Error: ' + msg);
                        if( error ) error( xhr, msg );
                    }
                }).send();  // 'cause init returns the request object, we can chain the send call
    }, 	
    switchToHome: function( domId, itemId) {
        this.loadJSFiddle();
        this.switchToPage('home', M.TRANSITION.FLIP, NO, NO);
    },
    switchToPreview: function( domId, itemId) {
        /* switch to a page called 'examplePage' */
        if( !M.Environment.phonegap ) {
            var history = YES;
            this.switchToPage('preview', M.TRANSITION.FLIP, YES, history);
        }
        else {
            var _target = '_blank'; /*_self'| _blank | _system*/
            
            var ref = window.open( this.url, _target, "location=no" );
            //ref.addEventListener('loadstart', function() {  });
            //ref.addEventListener('loadstop', function() {  });
            ref.addEventListener('exit', this.hidePullHeader );
        }
    },
    showActionSheet: function( domId, itemId) {
        window.setTimeout( function() {
            this._showActionSheet( domId, itemId );
        }, 200 );
            
    },
    _showActionSheet: function( domId, itemId) {
        var self = this;
        
        M.DialogView.actionSheet({
            title: 'Fiddle Action',
            //destructiveButtonValue: 'Crunch Time!',
            cancelButtonValue: 'Cancel',
            otherButtonValues:[ 'Preview', 'Download'],
            otherButtonTags: ['preview', 'download'],
            callbacks: {
                destruction: {
                    target: null,
                    action: null
                },
                cancel: {
                    target: null,
                    action: null
                },
                other: {
                    target: null,
                    action: function(tag) {
                        var url = self.listObject[ itemId ].url;
                        var title = self.listObject[ itemId ].title;

                        self.set( "url", url + "show" );

                        switch(tag) {
                            case 'preview':
                                self.switchToPreview(domId,itemId);
                            break;    
                            case 'download':                              
                                self.native_download( title );
                            break;
                            default:
                        }
                    }
                }
            }
        }); 
    },
    native_download: function( name ) {
        if( !M.Environment.phonegap ) {
            M.DialogView.alert({
                title: 'Cordova',
                message: 'Cordova is unavailable!',
                confirmButtonValue: 'Continue',
                callbacks: {
                    confirm: {
                        action: function() {
                        }
                    }
                }
            });
            return;
        }
        cordova.exec( 
             function(winParam) {
                console.log('Success: ' + winParam);
             }, 
             function(error) {
                console.log('Error: ' + error);
             }, 
             "PhonegapUtils",
             "download", [ this.url, name ]);
    },
    android_handleBackButton: function() {
        
        var page = M.ViewManager.getCurrentPage();
        
        //alert( 'currentPage ' + page.type );
        
        if( page === mpocket.preview ) {
            this.switchToPage('home', M.TRANSITION.SLIDE, NO, NO);
        }

    }
    
});


