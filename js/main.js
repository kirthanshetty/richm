require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery-1.9.1.min',
        modernizr: 'vendor/modernizr-2.6.2.min'
    }
});

require([
    'jquery', 'modernizr', 'parallex', 'richmont-main', 'navigation'
]);