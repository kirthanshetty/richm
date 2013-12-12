require.config({
    paths: {
        jquery: 'vendor/jquery-1.9.1.min'
    }
});

require([
    'jquery', 'vendor/jquery.placeholder.1.3', 'navigation', 'search', 'customselect', 'jobs_pagination'
],function($){
	_richemontCareers.Navigation();
});