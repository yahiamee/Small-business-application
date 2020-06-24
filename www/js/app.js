// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })
    .state('app.sapoon', {
        url: '/sapoon',
        views: {
            'menuContent': {
                templateUrl: 'templates/sapoon.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-sapoon').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })
    .state('app.mohamasa', {
        url: '/mohamasa',
        views: {
            'menuContent': {
                templateUrl: 'templates/mohamasa.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-mohamasa').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })
    
    .state('app.makhadat', {
        url: '/makhadat',
        views: {
            'menuContent': {
                templateUrl: 'templates/makhadat.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-makhadat').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.afrah', {
        url: '/afrah',
        views: {
            'menuContent': {
                templateUrl: 'templates/afrah.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-afrah').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.asmak', {
        url: '/asmak',
        views: {
            'menuContent': {
                templateUrl: 'templates/asmak.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-asmak').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.hasharat', {
        url: '/hasharat',
        views: {
            'menuContent': {
                templateUrl: 'templates/hasharat.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-hasharat').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.tbashear', {
        url: '/tbashear',
        views: {
            'menuContent': {
                templateUrl: 'templates/tbashear.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-tbashear').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.faham', {
        url: '/faham',
        views: {
            'menuContent': {
                templateUrl: 'templates/faham.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-faham').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.fool', {
        url: '/fool',
        views: {
            'menuContent': {
                templateUrl: 'templates/fool.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-fool').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.moajanat', {
        url: '/moajanat',
        views: {
            'menuContent': {
                templateUrl: 'templates/moajanat.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-moajanat').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-about').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })
    .state('app.up', {
        url: '/signup',
        views: {
            'menuContent': {
                templateUrl: 'templates/signup.html',
                controller: 'signupCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-signup').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })
    .state('app.msg', {
        url: '/msg',
        views: {
            'menuContent': {
                templateUrl: 'templates/msg.html',
                controller: 'signupCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-msg').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })


       .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('app.login').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })
	
    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
