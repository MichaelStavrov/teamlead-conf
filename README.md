Примеры запросов при локальном поднятии бута:

###

GET http://localhost:8080/app/start?category=java,scala,python

(временное неправильное решение, надо определиться и выпилить)

###

POST http://localhost:8080/app/start
Content-Type: application/json

[
"java", "python"
]

###

Примеры категорий здесь (варианты не окончательный): ok.millionaire.entity.Category

###

Запуск сервера с пересборкой с консоли:
./gradlew clean bootRun

###

Статика тут: src/main/resources/static

###

client:

установка - npm install

запуск мок-сервера - json-server mockData.js

запуск приложения - npm start

сборка статики - npm run build:prod
