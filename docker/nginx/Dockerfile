FROM nginx:1.25.1-alpine


COPY ./docker/nginx/default.conf /etc/nginx/conf.d

RUN sed -i 's/\r$//' /etc/nginx/conf.d/default.conf