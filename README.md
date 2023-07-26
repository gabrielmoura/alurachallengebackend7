# Alura Challenge Backend - Javascript

## Para rodar Testes
```bash
npm run test:e2e
```

## Rodando a aplicação com Docker
```bash
DOCKER_BUILDKIT=1 docker build -t <image_tag> .
docker run -p 3000:3000 --env-file .env <image_tag>
```

## Variaveis de Ambiente
```dotenv
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=user
DB_PASSWORD=password
DB_NAME=alura
FRONTEND_URL=http://localhost
```