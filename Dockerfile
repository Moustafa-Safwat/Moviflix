# ---------- Build Stage ----------
FROM node:24-alpine3.21 AS builder

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . .

RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
