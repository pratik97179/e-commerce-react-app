/* API endpoints
1. Get all products: https://api.escuelajs.co/api/v1/products
2. Get all categories: https://api.escuelajs.co/api/v1/categories
3. Get products of a specific categroy id: https://api.escuelajs.co/api/v1/categories/${id}/products
 */

class PathConstant {
    static base_api = "https://api.escuelajs.co/api/v1";
    static products = "products";
    static categories = "categories";
}

export function getApiPath(...endpoint) {
    if (endpoint.length > 1) {
        var apiPath = PathConstant.base_api;
        for (var i = 0; i < endpoint.length; i++) {
            apiPath = apiPath + '/' + endpoint[i];
        }
        console.log(apiPath)
    }
    return PathConstant.base_api + "/" + endpoint;
}

export default PathConstant;
