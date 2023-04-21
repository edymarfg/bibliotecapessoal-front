FROM node:latest as biblioteca-pessoal-front
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=biblioteca-pessoal-front app/dist/bibliotecapessoal-front /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t biblioteca-pessoal-front .
# docker run -p 8081:80 biblioteca-pessoal-front

