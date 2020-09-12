Create Data Base: laravue


then 

rename .env.example to .env

run below cmd

1.  composer update
2.  php artisan key:generate
3.  php artisan migrate
4.  php artisan db:seed --class=InsertAdmin
5.  php artisan storage:link
6.  npm install 
7.  npm run dev
8.  php artisan serve

Make sure in resources\js\Config.js "APP_URL" should be same as where server started (by php artisan serve)
if not then 
    >   update it with the URL where server started (by php artisan serve)
    >   npm run dev
    




