FROM node:latest

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD npm run start


# RUN apt-get update
# RUN apt-get install --yes curl
# RUN curl --silent --location https://deb.nodesource.com/setup_current.x | bash -
# RUN apt-get install --yes nodejs
# RUN apt-get install --yes build-essential
# RUN apt-get install -y git

# RUN git clone https://github.com/DoubleDoo/tde

# RUN cd tde

# CMD npm update
# npm run build



# CMD npm run start
# RUN git --version
# RUN node --version
# RUN npm --version