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
