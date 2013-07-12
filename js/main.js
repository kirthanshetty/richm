require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery-1.9.1.min',
    }
});

require([
    'jquery', 'parallex', 'navigation', 'search', 'customselect', 'our-maisons', 'joining-us', 'career-path', 'why-work-us', 'richemont-main', 'video'
]);