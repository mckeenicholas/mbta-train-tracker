FROM oven/bun:latest as builder

WORKDIR /app

COPY . .

RUN bun i

RUN bun run build

FROM nginx:1.27.0 AS runner

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]