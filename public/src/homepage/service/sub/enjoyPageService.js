/**
 * Created by Administrator on 2018/2/28.
 */
var homePageModule = angular.module('Angular.homepage');

homePageModule.factory('EnjoyPageSer', function ($http, $window, $timeout, $location, HomePageDataSer, HomePageSer,OverallDataSer) {

    var getEnjoyInfo = function() {
        var userOpenid=OverallDataSer.overallData['userInfo']['openid'];
        console.log(userOpenid);
    }

    return {
        getEnjoyInfo: getEnjoyInfo,
    }

});