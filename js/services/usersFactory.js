app.factory('usersFactory', function ($http, $q) {
   var factory = {
       users: false,
       getUsers: function () {
           var defered = $q.defer();

           $http.get("assert/data.json")
               .success(function (users) {
                   factory.users = users;
                   defered.resolve(factory.users);
               })
               .error(function (users) {
                    defered.reject('error while updating users');
               });

           return defered.promise;
       }
   };
   return factory;


});