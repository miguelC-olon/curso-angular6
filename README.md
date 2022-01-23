# curso-angular6 29/12
#crear repositorio en github
En git cli:
cd  ~/Documents/Proyectos/Capacitacion/Angular/coursera_desarrollar-paginas-web-con-angular 

#proxy 10.190.2.29 o 10.190.2.129
git config --global https.proxy https://c.user:passs@10.190.2.29:8080
git config --global http.proxy http://c.user:passs@10.190.2.29:8080


local sin proxy:
git config --global --unset https.proxy https://c.user:passs@10.190.2.29:8080
git clone git@github.com:usergithub/curso-angular6.git
cd curso-angular6  

git remote add https https://github.com/miguelC-olon/curso-angular6.git
git add -A
git commit -m "comentarios de la versio"
git push (https)
git pull

#Angular
ng new angular-hola-mundo

I solved the issue by:
Delete node-modules folder
Deleting the package-lock.json file
Run npm install
Now Run npm start

ng serve

ng generate component saludador

#instalo paquete bootstrap en el proyecto
npm i -S bootstrap
modificar el src/style.css 

logica de carga de app Angular:
ver angular.json > main.ts e index.html > app.module > app.component a partir de ahi agregamos nuestros propios componentes

#compilar para pase a ambiente productivo
ng build --target = production --base-href /
dir /

#Npm Install is Failing (Could not resolve dependency) => try with: npm install --legacy-peer-deps. OR removing the node_modules folder and package-lock.json file and run command npm install.

How to use QR Code scanner in Angular
https://www.linkedin.com/pulse/how-use-qr-code-scanner-angular-david-nishimoto


