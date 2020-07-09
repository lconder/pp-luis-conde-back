/**
 @api {post} /users Creación de un nuevo usuario
 @apiName Create User
 @apiGroup User
 @apiPermission None

 @apiParam (body) {Int} age Edad del usuario.
 @apiParam (body) {String} email Email del usuario.
 @apiParam (body) {Boolean} gender Género  del usuario (true-M, false-H).
 @apiParam (body) {String} hobby Pasatiempo del usuario.
 @apiParam (body) {String} password Contraseña del usuario.
 @apiParam (body) {String} phone Teléfono del usuario.
 @apiParam (body) {String} name Nombre del usuario.

 @apiUse User_jwt
 @apiUse User_jwt_json
 @apiUse ThreeErrors
 **/

/**
 @api {delete} /users/:id Borrar un usuario
 @apiName Delete User
 @apiGroup User
 @apiPermission Logged

 @apiParam (body) {String} id ID del usuario a borrar.

 @apiUse User
 @apiUse ThreeErrors
 **/

/**
 @api {get} /users?limit=10&page=0&filter={"search":"running"} Obtener todos los usuarios
 @apiName Get Users
 @apiGroup User
 @apiPermission Logged

 @apiParam (query) {Int} page Página a consultar (default=0).
 @apiParam (query) {Int} limit Límite por página (default=10).
 @apiParam (query) {Object} filter
 @apiParam (query) {String} filter.search Palabra a buscar sobre name y hobby.

 @apiUse Users
 @apiUse ThreeErrors
 **/

/**
 @api {get} /special Query especial
 @apiName Get Users Special
 @apiDescription Ruta que busca a los usuarios masculinos mayores de 18 años, creados en los últimos 3 días, agrupados por pasatiempo.
 @apiGroup User
 @apiPermission None

 @apiUse Special
 @apiUse Special_json
 @apiUse ThreeErrors
 **/

/**
 * @apiDefine User_jwt

 * @apiSuccess (200 Success) {String} id ID del usuario.
 * @apiSuccess (200 Success) {String} jwt JWT de esta sesión.

 */

/**
 * @apiDefine User_jwt_json
 * @apiSuccessExample {json} Success-Response:
 *
 {
   "id": "5ec427b671bd7c0510e555ff",
   "jwt": "eyJ0edaSOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
 }
 **/


/**
 * @apiDefine Special
 *
 * @apiSuccess (200 Success) {Array} response
 * @apiSuccess (200 Success) {String} response._id Pasatiempo
 * @apiSuccess (200 Success) {Array} response.users Usuarios pertenecientes a ese pasatiempo
 * @apiSuccess (200 Success) {Array} response.users.hobby Pasatiempo del usuario
 * @apiSuccess (200 Success) {Array} response.users.phone Teléfono del usuario
 * @apiSuccess (200 Success) {Array} response.users.name Nombre del usuario
 *
 * */

/**
 * @apiDefine Special_json
 * @apiSuccessExample {json} Success-Response:
 {
    "response": [
        {
            "_id": "running",
            "users": [
                {
                    "_id": "5f0668521e3d4f1c3113d781",
                    "hobby": "running",
                    "phone": "2227541239",
                    "name": "Otro Hombre"
                },
                {
                    "_id": "5f0668791e3d4f1c3113d782",
                    "hobby": "running",
                    "phone": "2227541235",
                    "name": "Otro Hombre 2"
                },
                {
                    "_id": "5f071eb9d9c3602c2c1717f7",
                    "hobby": "running",
                    "phone": "2227541235",
                    "name": "Otro Hombre 2"
                }
            ]
        }
    ]
 }
 *
 * */

/**
 * @apiDefine Users

 * @apiSuccess (200 Success) {Array} resources
 * @apiSuccess (200 Success) {String} resources.id ID del usuario.
 * @apiSuccess (200 Success) {Int} resources.age Edad del usuario.
 * @apiSuccess (200 Success) {String} resources.email Email del usuario.
 * @apiSuccess (200 Success) {Boolean} resources.gender Género del usuario.
 * @apiSuccess (200 Success) {String} resources.hobby Pasatiempo del usuario.
 * @apiSuccess (200 Success) {String} resources.phone Teléfono del usuario.
 * @apiSuccess (200 Success) {String} resources.name Nombre del usuario.
 * @apiSuccess (200 Success) {Int} count Contador del total de recursos

 */


/**
 * @apiDefine Users_json
 * @apiSuccessExample {json} Success-Response:
 {
    "resources": [
        {
            "_id": "5f0667d41e3d4f1c3113d77c",
            "age": 18,
            "email": "testpack@mailinator.com",
            "gender": false,
            "hobby": "soccer",
            "phone": "2227541234",
            "name": "Hombre Prueba 1",
            "id": "5f0667d41e3d4f1c3113d77c"
        },
        {
            "_id": "5f06681b1e3d4f1c3113d780",
            "age": 23,
            "email": "testpack4@mailinator.com",
            "gender": true,
            "hobby": "running",
            "phone": "2227541239",
            "name": "Mujer Prueba 2",
            "id": "5f06681b1e3d4f1c3113d780"
        },
        {
            "_id": "5f0668521e3d4f1c3113d781",
            "age": 23,
            "email": "testpack5@mailinator.com",
            "gender": false,
            "hobby": "running",
            "phone": "2227541239",
            "name": "Otro Hombre",
            "id": "5f0668521e3d4f1c3113d781"
        },
        {
            "_id": "5f0668791e3d4f1c3113d782",
            "age": 24,
            "email": "testpack6@mailinator.com",
            "gender": false,
            "hobby": "running",
            "phone": "2227541235",
            "name": "Otro Hombre 2",
            "id": "5f0668791e3d4f1c3113d782"
        },
        {
            "_id": "5f071eb9d9c3602c2c1717f7",
            "age": 24,
            "email": "adminpacknpack@mailinator.com",
            "gender": false,
            "hobby": "running",
            "phone": "2227541235",
            "name": "Otro Hombre 2",
            "id": "5f071eb9d9c3602c2c1717f7"
        }
    ],
    "count": 5
 }
 * */


/**
 * @apiDefine User

 * @apiSuccess (200 Success) {String} id ID del usuario.
 * @apiSuccess (200 Success) {Int} age Edad del usuario.
 * @apiSuccess (200 Success) {String} email Email del usuario.
 * @apiSuccess (200 Success) {Boolean} gender Género del usuario.
 * @apiSuccess (200 Success) {String} hobby Pasatiempo del usuario.
 * @apiSuccess (200 Success) {String} phone Teléfono del usuario.
 * @apiSuccess (200 Success) {String} name Nombre del usuario.

 */
