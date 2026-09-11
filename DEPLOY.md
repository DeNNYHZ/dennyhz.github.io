# Host on your own VPS with a custom domain

## 1. Point DNS
Add A records for `dennyhz.dev` and `www.dennyhz.dev` to your VPS IP.

## 2. Build & run
```bash
docker compose up -d --build
```
App runs on `http://<vps-ip>:3000`.

## 3. Nginx reverse proxy + SSL
Install nginx, copy the config, then get a cert:
```bash
sudo cp nginx/dennyhz.dev.conf /etc/nginx/sites-available/dennyhz.dev
sudo ln -s /etc/nginx/sites-available/dennyhz.dev /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# SSL via certbot (auto-obtains certs referenced in the nginx config)
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d dennyhz.dev -d www.dennyhz.dev
```

## 4. Done
Visit https://dennyhz.dev
