const controllers = [
    'user',
    'login'
];

controllers.forEach(controller => {
    let controller_name = controller.replace("/", "_");
    module.exports[controller_name] = require(`../controllers/${controller}`);
});
