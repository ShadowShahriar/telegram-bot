# telegram-bot

## Overview

> This repository demonstrates an implementation of a Telegram bot that can occasionally send a user song, messages, photos, YouTube videos, and reminders. It can even send birthday wishes to the user.

## Back Story

There is a saying that **you are responsible for your own happiness**. I am responsible for my happiness.

I spend a lot of time staring at the computer screen. I often forget things, even the simplest chores like cleaning the study table or writing a story. I spend most of the time in my room feeling lonely and anxious. It is not always possible to message my friends and have a conversation. They might be busy with their work. I might bother them by messaging when they are occupied with something else, and sometimes I may not have enough time to reply them.

My classmates know I work as a developer, so they have _already_ given up messaging me.

I feel good when my friend checks up on me to see if I'm doing well. But I don't want to rely on others for my happiness. I want something that keeps me mindful of what I should do at a specific moment. Then I had an idea to create a Telegram bot that sends messages just like my friends and reminds me about my chores.

## How does it work?

Here we are using [**Telegraf**][1] to send text messages and photos to the user. [**Telegraf**][1] is a modern Telegram bot API framework that makes it easy to develop our own Telegram bots using JavaScript.

This telegram bot can send a random video from a specific YouTube playlist using the [**YouTube Data API**][2]. With the [**Tenor API**][3], it can also send a `GIF` animation along with the reminder message. Finally, using the [**Unsplash API**][4], it can send a random photo with a description and author information.

The message tasks are scheduled using `cron` and executed via GitHub Actions. You can see [**all the workflows here**][5].

## Notes on the Cron schedule

GitHub actions use **UTC** time. I live in Dhaka, Bangladesh, and my time zone is **UTC +06:00**. That means my clock is 6 hours ahead of GitHub action's time zone. And I have to subtract 6 hours from my time zone to get the **UTC** time.

Here are the cron schedules of all workflows:

| Workflow file              | Cron expression | Description                                                       |
| -------------------------- | --------------- | ----------------------------------------------------------------- |
| send-quote.yml             | 0 3 \* \* 0     | At 9 AM (Bangladesh Standard Time) on Sunday                      |
| send-photo.yml             | 0 10 \* \* 2    | At 4 PM (Bangladesh Standard Time) on Tuesday                     |
| send-cheerful-comment.yml  | 0 5 \* \* 3     | At 11 AM (Bangladesh Standard Time) on Wednesday                  |
| send-reminder.yml          | 0 11 \* \* 4    | At 5 PM (Bangladesh Standard Time) on Thursday                    |
| send-chore-reminder.yml    | 0 2 \* \* 5     | At 8 AM (Bangladesh Standard Time) on Friday                      |
| send-video.yml             | 0 15 \* \* 6    | At 9 PM (Bangladesh Standard Time) on Saturday                    |
| send-birthday-wish.yml     | 0 18 25 10 \*   | At 12 AM (Bangladesh Standard Time) on day-of-month 25 in October |
| send-birthday-reminder.yml | 0 0 \* \* \*    | At 6 AM (Bangladesh Standard Time) every day                      |

If you need help, you can always use [**crontab guru**][10].

## Demo

1. Install the NPM dependencies to run it locally.

    ```bash
    npm install
    ```

2. Assuming that you have Telegram installed, get your Telegram ID using the [**@myidbot**][6]. Then create a new bot by talking to the [**@BotFather**][7]. Make sure to start your bot using the `/start` command.

3. Having done that, create a `.env` file in the current directory. Enter your user ID and bot token like below:

    ```yaml
    TELEGRAM_BOT_TOKEN=...
    TELEGRAM_USER_ID=...
    ```

4. You have to create a new project using [**Google Cloud Console**][8].

    1. Click the navigation menu on the top-left corner. Go to **APIs & Services** > **Enable API and Services**

    2. Enable [**YouTube Data API**][2] and [**Tenor API**][3] and enter the API token in the `.env` file:

        ```yaml
        YOUTUBE_API_KEY=...
        YOUTUBE_PLAYLIST_ID=
        TENOR_API_KEY=...
        ```

    3. Pick your favorite YouTube playlist and get its ID from the url:

        ```yaml
        https://www.youtube.com/playlist?list=YOUTUBE_PLAYLIST_ID
        ```

    4. Enter the playlist ID in the `.env` file:

        ```yaml
        YOUTUBE_API_KEY=
        YOUTUBE_PLAYLIST_ID=...
        TENOR_API_KEY=
        ```

5. Head over to the [**Unsplash API**][4]. Create a new basic application and copy its Access Key. Finally enter the Access Key in the `.env` file:

    ```yaml
    UNSPLASH_ACCESS_KEY=...
    ```

    Finally the `.env` file should look like this:

    ```yaml
    YOUTUBE_API_KEY=...
    YOUTUBE_PLAYLIST_ID=...
    TENOR_API_KEY=...
    TELEGRAM_BOT_TOKEN=...
    TELEGRAM_USER_ID=...
    UNSPLASH_ACCESS_KEY=...
    ```

6. Once you are done, run the following commands:

    ```bash
    npm test
    npm run test-general
    ```

    Now the bot should start sending messages, photos, and videos to your Telegram account.

## License

The source code is licensed under [**MIT**][9].

[1]: https://github.com/telegraf/telegraf
[2]: https://developers.google.com/youtube/v3
[3]: https://developers.google.com/tenor/guides/quickstart
[4]: https://unsplash.com/developers
[5]: https://github.com/ShadowShahriar/telegram-bot/actions
[6]: https://t.me/myidbot
[7]: https://t.me/BotFather
[8]: https://console.cloud.google.com/
[9]: https://github.com/ShadowShahriar/telegram-bot/blob/main/LICENSE
[10]: https://crontab.guru/
