Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
//------------------------------------------------------------------------------
  $stateProvider
  //landing page
    .state('home',{
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'LoginCtrl as login'
    })
  //login of user
    .state('login', {
      url: '/login',
      templateUrl: 'views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
  //registration of user
    .state('register', {
      url: '/register',
      templateUrl: 'views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
  //showing all users
    .state('usersIndex',{
      url: '/users',
      templateUrl: 'views/users/index.html',
      controller: 'UsersIndexCtrl as UsersIndex'
    })
  //showing the clicked user
    .state('usersShow',{
      url: '/users/:id',
      templateUrl: 'views/users/show.html',
      controller: 'UsersShowCtrl as UsersShow'
    })
  //mood show with playlist
    .state('moodsShow',{
      url: '/moods',
      templateUrl: 'views/moods/show.html',
      controller: 'SpotifyCtrl as spotify'
    })
    .state('playlistShow', {
      url: 'playlists/:playlistId',
      template: 'views/playlists/show.html',
      controller: 'SpotifyCtrl as spotify'
    })
    .state('moodsNew',{
      url: '/moods/new',
      templateUrl: 'views/moods/new.html',
      controller: 'MoodsNewCtrl as moodsNew'
    });
  $urlRouterProvider.otherwise('/');
}
export default Router;
