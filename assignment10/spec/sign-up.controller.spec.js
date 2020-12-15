describe('SignUpController.checkFavItem()', function () {
    beforeEach(module('public'));
    var $httpBackend, ApiBasePath, $controller, signUpController;

    beforeEach(inject(function (_$controller_, _$httpBeckend_, MenuServiceMock, StoreDataServiceMock) {
        $controller = _$controller_;
        $httpBackend = _$httpBeckend_;

        signUpController = $controller('SignUpController', {'MenuService': MenuServiceMock, 'StoreDataService': StoreDataServiceMock});
    }));
    beforeEach(function () {
        module(function ($provide) {
            $provide.service('MenuServiceMock', function() {
                var service = this;

                service.getMenuShortName = function (shortName) {
                    var dummyData = {data: {"id":91,"short_name":"CU21","name":"Curry Chicken","description":"white meat chicken sauteed with ionions, peas, carrots, and broccoli","price_small":11.95,"price_large":14.95,"small_portion_name":"pint","large_portion_name":"large","created_at":"2020-11-19T00:35:47.270Z","updated_at":"2020-11-19T00:35:47.270Z","category_short_name":"CU","image_present":true}};
                    $httpBackend.whenGET(ApiBasePath + '/menu_items/CU21.json').respond([dummyData]);
                    $httpBackend.flush();
                };
            }),
            $provide.service('StoreDataServiceMock', function() {
                var service = this;

                service.setUser = function (user) {
                    return;
                };
            });
        });
    });

    it('should return json blob of favorite item', function() {
        var user = {"firstname":"Jane","lastname":"Doe","email":"janedoe@yahoo.com","phone":"123-456-7890","favItem":"CU21"};
        var promise = signUpController.checkFavItem(user.favItem);

        promise.then(function() {
            expect(signUpController.favItemNotFound).toBeFalsy();
        })
    });
});