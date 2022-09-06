# Node.js + Redis devcontainer template

This repository contains a template for Node.js + Redis VSCode devcontainer.
As a bonus, app container automatically runs `redis-commander` on startup, which also prevents it from shutting down, hence allowing it to serve as devcontainer.

If you don't want to run `redis-commander` on startup, modify `docker-compose.yml` - replace starting `redis-commander` with something like `tail -f /dev/null`. If you won't do that, the container will shut down immediatelly and won't work as devcontainer.

## How to use

Clone this repository and open it in devcontainer using `Remote-Containers: Open folder in Container...` command in VSCode. It should do the rest automatically.

The app folder is monted in `/home/node/app` directory by default. You can change that in `docker-compose.yml`.

`redis-commander` is running on port 8081. Go to <http://localhost:8081> to see the web UI.

You can access redis via <redis://redis:6379> URL from inside the container. It's also forwarded outside of it, so you can use local tools to connect to it (you can access it via <redis://localhost:6379>). If that's not desired behaviour, remove `ports` section of redis from `docker-compose.yml`.