const mix = require('laravel-mix');

mix
    .setPublicPath('public')
    .setResourceRoot('resources')
    .sass('resources/sass/agora.scss', 'public/css')
    .options({
        processCssUrls: false
    });

if (mix.inProduction()) {
    mix.disableNotifications();
}
