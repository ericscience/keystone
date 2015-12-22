sudo apt-get update
sudo apt-get install git
ssh-keygen
cat ~/.ssh/id_rsa.pub

sudo apt-get install build-essential

# copy the key into the git repository
git@github.com:ericscience/keystone.git

curl https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

npm install -g forever

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org=3.0.2 mongodb-org-server=3.0.2 mongodb-org-shell=3.0.2 mongodb-org-mongos=3.0.2 mongodb-org-tools=3.0.2

sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
