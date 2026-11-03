#!/usr/bin/env bash
# Publica o site em sunarch.com.br (nginx do host na VPS, root /var/www/sunarch).
#
# Uso:  ./deploy.sh
#       VPS_HOST=<ip> VPS_USER=root ./deploy.sh
#
# A config do nginx fica no repo de deploy: deploy/nginx/sunarch.com.br.conf
set -euo pipefail

VPS_HOST="${VPS_HOST:-187.127.47.4}"
VPS_USER="${VPS_USER:-root}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/sunarch}"

cd "$(dirname "$0")"

ssh "$VPS_USER@$VPS_HOST" "mkdir -p '$REMOTE_DIR'"

# --delete remove do servidor o que saiu do repo; os --exclude nunca sobem
rsync -avz --delete --chmod=D755,F644 \
  --exclude='.git' \
  --exclude='.gitignore' \
  --exclude='.DS_Store' \
  --exclude='CNAME' \
  --exclude='deploy.sh' \
  --exclude='*.md' \
  ./ "$VPS_USER@$VPS_HOST:$REMOTE_DIR/"

echo "Publicado em $VPS_HOST:$REMOTE_DIR"
