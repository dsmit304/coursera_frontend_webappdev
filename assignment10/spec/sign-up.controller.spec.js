describe('SignUpController', function () {
    beforeEach(module('public'));
    var $httpBackend, ApiPath, $controller, signUpController, user;

    beforeEach(function () {
        module(function ($provide) {
            $provide.service('MenuServiceMock', function() {
                var service = this;

                service.getMenuShortName = function (shortName) {
                    var httpResponse = [{"id":91,
                                         "short_name":"CU21",
                                         "name":"Curry Chicken",
                                         "description":"white meat chicken sauteed with ionions, peas, carrots, and broccoli",
                                         "price_small":11.95,
                                         "price_large":14.95,
                                         "small_portion_name":"pint",
                                         "large_portion_name":"large",
                                         "created_at":"2020-11-19T00:35:47.270Z",
                                         "updated_at":"2020-11-19T00:35:47.270Z",
                                         "category_short_name":"CU","image_present":true}];
                    $httpBackend.expectGET(ApiPath + '/menu_items/CU21.json').respond(200, httpResponse);
                    $httpBackend.flush();
                };
            }),
            $provide.service('StoreDataServiceMock', function() {
                var service = this;

                service.setUser = function (user) {
                    user = user;
                };
            });
        });
    });

    beforeEach(inject(function (_$controller_, _$httpBackend_, _ApiPath_, MenuServiceMock, StoreDataServiceMock) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        ApiPath = _ApiPath_;

        signUpController = $controller('SignUpController', {'MenuService': MenuServiceMock, 'StoreDataService': StoreDataServiceMock});
    }));

    it('controller is defined', function() {
        expect(signUpController).toBeDefined();
    });

    describe('checkFavItem()', function () {
        it('favorite menu item exists', function() {
            user = {"firstname":"Jane","lastname":"Doe","email":"janedoe@yahoo.com","phone":"123-456-7890","favItem":"CU21"};
            signUpController.user = user;
            signUpController.checkFavItem(user.favItem);

            expect(signUpController.favItemNotFound).toBeFalsy();
        });
    });
});