require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery-1.9.1.min',
    }
});

require([
    'jquery', 'navigation', 'search', 'customselect'
]);