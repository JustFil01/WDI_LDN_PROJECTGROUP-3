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
      templateUrl: 'views/auth/register.html'
    })
  //showing all users
    .state('usersIndex',{
      url: '/users',
      templateUrl: 'views/users/index.html'
    })
  //showing the clicked user?
    .state('usersShow',{
      url: '/users/:id',
      templateUrl: 'views/users/show.html'
      // controller: 'insert controller'
    })
  //currently logged in user show
    .state('usersProfileShow',{
      url: '/users/user/:id',
      templateUrl: 'views/users/user.html'
      // controller: 'insert controller'
    })
  //mood show with playlist
    .state('moodsShow',{
      url: '/moods',
      templateUrl: 'views/moods/show.html'
      // controller: 'insert controller'
    });
  $urlRouterProvider.otherwise('/');
}
export default Router;
