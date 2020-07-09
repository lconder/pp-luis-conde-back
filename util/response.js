const error  = (error) => ({
    errors: [
        error
    ]
});
const success = () => ({
    success: true
});

const data_dashboard = (resources, count) => ({
    resources,
    count
});


module.exports = {
    data_dashboard,
    error,
    success
}
