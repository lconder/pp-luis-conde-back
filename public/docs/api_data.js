define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Iniciar sesión",
    "name": "Login",
    "group": "Login",
    "permission": [
      {
        "name": "None"
      }
    ],
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario (enviar si es un login con email &amp; password)</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password del usuario (enviar si es un login con email &amp; password)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "docs/login.js",
    "groupTitle": "Login",
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>JWT de esta sesión.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"id\": \"5ec427b671bd7c0510e555ff\",\n  \"jwt\": \"eyJ0edaSOiJKV1QiLCJhbGciOiJIUzI1NiJ9\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400,401,500 Error": [
          {
            "group": "400,401,500 Error",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Lista de errores</p>"
          },
          {
            "group": "400,401,500 Error",
            "type": "String",
            "optional": true,
            "field": "errors.code",
            "description": "<p>Código del error</p>"
          },
          {
            "group": "400,401,500 Error",
            "type": "String",
            "optional": false,
            "field": "errors.description",
            "description": "<p>Información acerca del error</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Creación de un nuevo usuario",
    "name": "Create_User",
    "group": "User",
    "permission": [
      {
        "name": "None"
      }
    ],
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "Int",
            "optional": false,
            "field": "age",
            "description": "<p>Edad del usuario.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario.</p>"
          },
          {
            "group": "body",
            "type": "Boolean",
            "optional": false,
            "field": "gender",
            "description": "<p>Género  del usuario (true-M, false-H).</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "hobby",
            "description": "<p>Pasatiempo del usuario.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del usuario.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del usuario.</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "docs/user.js",
    "groupTitle": "",
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>JWT de esta sesión.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"id\": \"5ec427b671bd7c0510e555ff\",\n  \"jwt\": \"eyJ0edaSOiJKV1QiLCJhbGciOiJIUzI1NiJ9\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400,401,500 Error": [
          {
            "group": "400,401,500 Error",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Lista de errores</p>"
          },
          {
            "group": "400,401,500 Error",
            "type": "String",
            "optional": true,
            "field": "errors.code",
            "description": "<p>Código del error</p>"
          },
          {
            "group": "400,401,500 Error",
            "type": "String",
            "optional": false,
            "field": "errors.description",
            "description": "<p>Información acerca del error</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Borrar un usuario",
    "name": "Delete_User",
    "group": "User",
    "permission": [
      {
        "name": "Logged"
      }
    ],
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario a borrar.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "docs/user.js",
    "groupTitle": "",
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "Int",
            "optional": false,
            "field": "age",
            "description": "<p>Edad del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "Boolean",
            "optional": false,
            "field": "gender",
            "description": "<p>Género del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "hobby",
            "description": "<p>Pasatiempo del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Teléfono del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400,401,500 Error": [
          {
            "group": "400,401,500 Error",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Lista de errores</p>"
          },
          {
            "group": "400,401,500 Error",
            "type": "String",
            "optional": true,
            "field": "errors.code",
            "description": "<p>Código del error</p>"
          },
          {
            "group": "400,401,500 Error",
            "type": "String",
            "optional": false,
            "field": "errors.description",
            "description": "<p>Información acerca del error</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users?limit=10&page=0&filter={\"search\":\"running\"}",
    "title": "Obtener todos los usuarios",
    "name": "Get_Users",
    "group": "User",
    "permission": [
      {
        "name": "Logged"
      }
    ],
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "Int",
            "optional": false,
            "field": "page",
            "description": "<p>Página a consultar (default=0).</p>"
          },
          {
            "group": "query",
            "type": "Int",
            "optional": false,
            "field": "limit",
            "description": "<p>Límite por página (default=10).</p>"
          },
          {
            "group": "query",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": ""
          },
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "filter.search",
            "description": "<p>Palabra a buscar sobre name y hobby.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "docs/user.js",
    "groupTitle": "",
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "Array",
            "optional": false,
            "field": "resources",
            "description": ""
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "resources.id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "Int",
            "optional": false,
            "field": "resources.age",
            "description": "<p>Edad del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "resources.email",
            "description": "<p>Email del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "Boolean",
            "optional": false,
            "field": "resources.gender",
            "description": "<p>Género del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "resources.hobby",
            "description": "<p>Pasatiempo del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "resources.phone",
            "description": "<p>Teléfono del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "resources.name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "200 Success",
            "type": "Int",
            "optional": false,
            "field": "count",
            "description": "<p>Contador del total de recursos</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400,401,500 Error": [
          {
            "group": "400,401,500 Error",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Lista de errores</p>"
          },
          {
            "group": "400,401,500 Error",
            "type": "String",
            "optional": true,
            "field": "errors.code",
            "description": "<p>Código del error</p>"
          },
          {
            "group": "400,401,500 Error",
            "type": "String",
            "optional": false,
            "field": "errors.description",
            "description": "<p>Información acerca del error</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/special",
    "title": "Query especial",
    "name": "Get_Users_Special",
    "description": "<p>Ruta que busca a los usuarios masculinos mayores de 18 años, creados en los últimos 3 días, agrupados por pasatiempo.</p>",
    "group": "User",
    "permission": [
      {
        "name": "None"
      }
    ],
    "version": "0.0.0",
    "filename": "docs/user.js",
    "groupTitle": "",
    "success": {
      "fields": {
        "200 Success": [
          {
            "group": "200 Success",
            "type": "Array",
            "optional": false,
            "field": "response",
            "description": ""
          },
          {
            "group": "200 Success",
            "type": "String",
            "optional": false,
            "field": "response._id",
            "description": "<p>Pasatiempo</p>"
          },
          {
            "group": "200 Success",
            "type": "Array",
            "optional": false,
            "field": "response.users",
            "description": "<p>Usuarios pertenecientes a ese pasatiempo</p>"
          },
          {
            "group": "200 Success",
            "type": "Array",
            "optional": false,
            "field": "response.users.hobby",
            "description": "<p>Pasatiempo del usuario</p>"
          },
          {
            "group": "200 Success",
            "type": "Array",
            "optional": false,
            "field": "response.users.phone",
            "description": "<p>Teléfono del usuario</p>"
          },
          {
            "group": "200 Success",
            "type": "Array",
            "optional": false,
            "field": "response.users.name",
            "description": "<p>Nombre del usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"response\": [\n       {\n           \"_id\": \"running\",\n           \"users\": [\n               {\n                   \"_id\": \"5f0668521e3d4f1c3113d781\",\n                   \"hobby\": \"running\",\n                   \"phone\": \"2227541239\",\n                   \"name\": \"Otro Hombre\"\n               },\n               {\n                   \"_id\": \"5f0668791e3d4f1c3113d782\",\n                   \"hobby\": \"running\",\n                   \"phone\": \"2227541235\",\n                   \"name\": \"Otro Hombre 2\"\n               },\n               {\n                   \"_id\": \"5f071eb9d9c3602c2c1717f7\",\n                   \"hobby\": \"running\",\n                   \"phone\": \"2227541235\",\n                   \"name\": \"Otro Hombre 2\"\n               }\n           ]\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400,401,500 Error": [
          {
            "group": "400,401,500 Error",
            "type": "Object[]",
            "optional": false,
            "field": "errors",
            "description": "<p>Lista de errores</p>"
          },
          {
            "group": "400,401,500 Error",
            "type": "String",
            "optional": true,
            "field": "errors.code",
            "description": "<p>Código del error</p>"
          },
          {
            "group": "400,401,500 Error",
            "type": "String",
            "optional": false,
            "field": "errors.description",
            "description": "<p>Información acerca del error</p>"
          }
        ]
      }
    }
  }
] });
