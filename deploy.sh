TARGET=/Volumes/SSD/Users/softphone/WORKSPACES/IOS/CORDOVA/Cordova-poc-2.0.0/jsfiddle
#
# invoke first: espresso build
#
rm -r $TARGET/* 
cp -r  build/13*/* $TARGET 
cp start.html $TARGET 
rm -rf build
