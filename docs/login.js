/**
 @api {post} /login Iniciar sesión
 @apiName Login
 @apiGroup Login
 @apiPermission None
 @apiParam (body) {String} email Email del usuario (enviar si es un login con email & password)
 @apiParam (body) {String} password Password del usuario (enviar si es un login con email & password)

 @apiUse User_jwt
 @apiUse User_jwt_json
 @apiUse ThreeErrors
 **/
