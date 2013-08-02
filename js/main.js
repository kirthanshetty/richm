require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery-1.9.1.min'
    }
});

require([
    'jquery', 'parallax', 'navigation', 'customselect', 'our-maisons', 'joining-us', 'career-path', 'why-work-us', 'share-icons', 'richemont-main', 'video' 
]);