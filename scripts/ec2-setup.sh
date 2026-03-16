#!/bin/bash
# One-time EC2 instance setup script
# Run this on a fresh Ubuntu EC2 instance
# Usage: ssh into your EC2 instance and run: bash ec2-setup.sh

set -euo pipefail

echo "=== Updating system ==="
sudo apt-get update && sudo apt-get upgrade -y

echo "=== Installing Docker ==="
sudo apt-get install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

echo "=== Adding user to docker group ==="
sudo usermod -aG docker "$USER"

echo "=== Creating app directory ==="
mkdir -p ~/lna-website

echo "=== Setup complete ==="
echo ""
echo "Next steps:"
echo "  1. Log out and back in (for docker group to take effect)"
echo "  2. Create a .env file in ~/lna-website with your environment variables:"
echo "     cp ~/lna-website/.env.example ~/lna-website/.env"
echo "     nano ~/lna-website/.env"
echo "  3. Add these GitHub Secrets to your repository:"
echo "     - EC2_HOST: your EC2 public IP or domain"
echo "     - EC2_USER: $(whoami)"
echo "     - EC2_SSH_KEY: contents of your private SSH key"
echo "     - RESEND_API_KEY, BREVO_API_KEY, etc. (see .env.example)"
echo "  4. Trigger the 'Deploy to EC2' workflow from GitHub Actions"
echo ""
echo "For SSL (optional):"
echo "  sudo apt install certbot"
echo "  sudo certbot certonly --standalone -d your-domain.com"
echo "  Then uncomment the HTTPS block in nginx.conf"
