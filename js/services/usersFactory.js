var KEY = 'secureContactLF';
app.factory('usersFactory', function ($http, $q, $localForage) {
    var factory = {
        users: false,
        getUsers: function () {
            var defered = $q.defer();

            // $http.get("assert/data.json")
            //     .success(function (users) {
            //         factory.users = users;
            //         defered.resolve(factory.users);
            //     })
            //     .error(function (users) {
            //         defered.reject('error while updating users');
            //     });

            $localForage.getItem(KEY).then(function (users) {
                if(users){
                    factory.users = users;
                }else{
                    factory.users = [];
                }
                defered.resolve(factory.users);


            });

            return defered.promise;
        },
        selectUser: function (selectedUser) {
            factory.selectedUser = selectedUser;
        },
        getSelectedUser: function () {
            return factory.selectedUser;
        },
        storeUsers: function (users) {
            $localForage.setItem(KEY, users);
        }
    };
    return factory;


});