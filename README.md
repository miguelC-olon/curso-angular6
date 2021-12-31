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
git push https

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


How to use QR Code scanner in Angular
https://www.linkedin.com/pulse/how-use-qr-code-scanner-angular-david-nishimoto
