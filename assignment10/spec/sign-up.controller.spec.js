describe('Unit Test for Favorite Item Method:', function () {
    var $httpBackend, ApiBasePath, $controller, signUpController;

    beforeEach(function () {
        module(function ($provide) {
            $provide.service('MenuServiceMock', function() {
                var service = this;

                service.getMenuShortName = function (shortName) {
                    var dummyData = {data:{"id":91,"short_name":"CU21","name":"Curry Chicken","description":"white meat chicken sauteed with ionions, peas, carrots, and broccoli","price_small":11.95,"price_large":14.95,"small_portion_name":"pint","large_portion_name":"large","created_at":"2020-11-19T00:35:47.270Z","updated_at":"2020-11-19T00:35:47.270Z","category_short_name":"CU","image_present":true}};
                    $httpBackend.whenGET(ApiBasePath + '/menu_items/CU21.json').respond([200, dummyData]);
                    menu.getMenuShortName(shortName).then(function(response) {
                        expect(response.data).toEqual([200, dummyData]);
                    });
                    $httpBackend.flush();
                };
            });
            $provide.service('StoreDataServiceMock', function() {
                var service = this;

                service.setUser = function (user) {
                    return;
                };
            });
        });
        module('public');
    });

    beforeEach(inject(function (_$controller_, MenuServiceMock, StoreDataServiceMock) {
        $controller = _$controller_;

        signUpController = $controller('SignUpController', {MenuService: MenuServiceMock, StoreDataService: StoreDataServiceMock});
    }));

    it('should return favorite item details', function() {
        signUpController.checkFavItem();
        expect(signUpController.favItemNotFound).toBe(false);
    });
});