# telegram-get-ip
Simple bot to get the external ip of the machine where it runs

# How to run using docker

1. Build the image
``npm run docker_build``

2. Run the container
```
docker create \
--name=telegram-bot-ip \
-e BOT_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXX \
-e USER_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX \
--restart unless-stopped \
romancc/telegram-bot-ip
```

Where `BOT_TOKEN`, is your telegram bot tokenand `USER_ID` is your telegram user id

3. Send `/ip` to the bot, and receive the info


Image: https://hub.docker.com/r/romancc/telegram-bot-ip
