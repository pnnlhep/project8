FROM nginx:1.13.12

RUN mkdir -p /etc/nginx/conf.d

RUN mkdir -p /home/project8

COPY ./nginx.conf /etc/nginx

COPY ./frontend/dist /usr/share/nginx/html/project8

COPY ./frontend/src/dips /home/project8/dips

RUN chmod -R +x /home/project8/dips

COPY ./project8.conf /etc/nginx/conf.d