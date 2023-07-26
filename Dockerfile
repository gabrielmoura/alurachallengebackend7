###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./
# Install app dependencies using the `npm ci` command instead of `npm install`
RUN yarn

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

# Execute o comando build que cria o pacote de produção
RUN yarn run build

# Defina a variável de ambiente NODE_ENV
ENV NODE_ENV production

# Passar --omit=dev garante que apenas as dependências de produção sejam instaladas.
# Isso garante que o diretório node_modules seja o mais otimizado possível
RUN npm install --omit=dev && yarn cache clean --force

USER node

###################
# PRODUÇÂO
###################

FROM node:18-alpine As production

# Copia o código empacotado do estágio de construção para a imagem de produção
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# Inicia o servidor usando a compilação de produção
CMD [ "node", "dist/src/main.js" ]