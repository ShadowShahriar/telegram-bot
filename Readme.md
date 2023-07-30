# telegram-bot

<p align="center"><img src="./assets/botdesc-2x.png" width="100%" alt="<!-- Banner should go here -->"/></p>

## Overview

[English (United States)][1] | [Bengali (Bangladesh)][2]

> This repository demonstrates an implementation of a Telegram bot that can occasionally send me memes, messages, photos, YouTube videos, book recommendations, and reminders. It remembers the birthdays of my loved ones so I can prepare gifts and wish them on time.

This bot was inspired by the titular protagonist of the cartoon series [**Danny Phantom**][3].

## Back Story

There is a saying that **you are responsible for your own happiness**. I am responsible for my happiness.

I spend a lot of time staring at the computer screen. I often forget things, even the simplest chores like cleaning the study table or writing a story. I spend most of the time in my room feeling lonely and anxious. It is not always possible to message my friends and have a conversation. They might be busy with their work. I might bother them by messaging when they are occupied with something else, and sometimes I may not have enough time to reply them.

My classmates know I work as a developer, so they have _already_ given up messaging me.

I feel good when my friend checks on me to see if I'm doing well. But they often message me when they want me to do something for them. Naturally, I'm more than willing to help my friends, but this occurs so frequently that I no longer feel like a friend to them. Instead, I feel like a _tool_ that they can utilize whenever they need me.

And my suspicion about my classmates was confirmed on **May 27th, 2023**, when ten of them betrayed me. This betrayal had a significant impact on me, both physically and mentally, considering that they were my closest companions. It was a shocking and unexpected turn of events.

I **DO NOT** want to rely on others for my happiness. I want something that keeps me mindful of what I should do at a specific moment. Then I had an idea to create a Telegram bot that sends messages just like my friends and reminds me about my chores.

## Features

This Telegram bot can perform various activities like a real friend. Below is a detailed list of things it can do:

-   Motivate me to pursue my goals and cheer me up when I am feeling down
-   Remind me about birthdays and special events of my loved ones
-   Remind me about doing general activities such as cleaning the room or checking unread e-mails
-   Remind me about writing a new story or drawing a new illustration
-   Remind me to go to bed and sleep
-   Suggest me a book to read
-   Wish me on Eid and other festivals
-   Wish me on my birthday
-   Send meme templates so I can come up with new meme ideas
-   Send a picture so I can relive that specific moment in life
-   Send a photo or video from the Internet that brightens my day
-   Send a quote that motivates me to move forward
-   Send a YouTube video from a playlist, so I can enjoy my favorite content yet once again

## How does it work?

Here we are using [**Telegraf**][22] to send text messages and photos to the user. [**Telegraf**][22] is a modern Telegram bot API framework that makes it easy to develop our own Telegram bots using JavaScript.

We are also using a plethora of APIs to offer a diverse range of content including images, animations, links, and text. Some of the APIs we use are [**Google Books API**][25] for getting book details, **Firebase Realtime Database** for storing the latest configuration, **Firebase Storage** for saving moments, [**ImgFlip API**][28] for obtaining blank meme templates, [**Pexels**][29] for cat videos, [**Quotable**][26] for finding quotes on specific topics, **Tenor API** for GIFs, [**Unsplash API**][27] for high-quality images, and **YouTube API** for getting videos from the playlist.

The message tasks are scheduled using `cron` and executed via GitHub Actions. You can see [**all the workflows here**][23].

## Demo

1. Install the NPM dependencies to run it locally.

    ```bash
    npm install
    ```

2. Assuming that you have Telegram installed, get your Telegram ID using the [**@myidbot**][30]. Then create a new bot by talking to the [**@BotFather**][31]. Make sure to start your bot using the `/start` command.

3. Having done that, create a `.env` file in the current directory. Enter your user ID and bot token like below:

    ```yaml
    TELEGRAM_BOT_TOKEN=...
    TELEGRAM_USER_ID=...
    ```

4. As we are also using other APIs, some of them require an authentication token or API key. For more information on how to acquire these keys, please refer to the <a href="#notes-on-api-keys"><b>Notes on API Keys</b></a> section. Also, check out the [sample `.env` file][32] if you feel stuck.

    ```yaml
    YOUTUBE_API_KEY=...
    YOUTUBE_PLAYLIST_ID=...
    TENOR_API_KEY=...
    UNSPLASH_ACCESS_KEY=...
    PEXELS_API_KEY=...
    FIREBASE_RTDB_NAME=...
    FIREBASE_RTDB_AUTH=...
    FIREBASE_STORAGE_BUCKET=...
    ```

5. Once you are done, run the following command:

    ```bash
    npm test
    ```

    Now the bot should start sending messages, photos, and videos to your Telegram account.

## Notes on API Keys

-   APIs like [**Pexels**][29] and [**Unsplash API**][27] have well-written instructions on obtaining the API key. That makes them easier to use and integrate to projects.

-   APIs such as [**Google Books API**][25], [**ImgFlip API**][28], and [**Quotable**][26] do not require authentication. Hence, these are easier to test and integrate into the system.

-   Getting API keys for **Firebase**, **Tenor API**, and **YouTube API** can be challenging and overwhelming for those new to it. Here are the general instructions to help you get started:

    ### Creating a Google Cloud Project

    1. Head over to the [**Google Cloud Console**][34] and create a new project.
    2. Click the navigation menu on the top-left corner. Go to **APIs & Services** > **Enabled API and Services** > **Enable APIs and Services**.
    3. Enable [**YouTube Data API**][35] and [**Tenor API**][36].
    4. From the left sidebar, choose **Credentials**. Choose one of the keys from the **API Keys** section. If there are none, create a new one by clicking **Create Credentials**.
    5. Now we can add the API key in the `.env` file. Both **YouTube** and **Tenor** APIs have the same API key.

    ### Creating a Firebase Project

    In order to use the **Firebase Real-time Database** and **Firebase Storage**, we have to create a Firebase project. Here are the steps:

    1. Head over to the [**Firebase Console**][33].
    2. Create a new project by clicking the **Add Project** button or use an existing Google Cloud Project.
    3. Click on the cog icon beside the **Project Overview** anchor in the left sidebar. Choose **Project settings**.
    4. Under the **General** tab, create a new **Web App**. In the **SDK setup and configuration** section, we can see a `firebaseConfig` object like below:
        ```JavaScript
        const firebaseConfig = {
          apiKey: "...",
          authDomain: "...",
          databaseURL: "...",
          projectId: "...",
          storageBucket: "...",
          messagingSenderId: "...",
          appId: "..."
        };
        ```
        Here `apiKey` is the `FIREBASE_RTDB_AUTH`, `databaseURL` is the `FIREBASE_RTDB_NAME`, and `storageBucket` is the `FIREBASE_STORAGE_BUCKET`. Now we can add these in the `.env` file.

## Notes on the Cron Schedule

GitHub actions use **UTC** time. I live in Dhaka, Bangladesh, and my time zone is **UTC +06:00** (or **BST**). That means my clock is 6 hours ahead of GitHub action's time zone. And I have to subtract 6 hours from my time zone to get the **UTC** time.

Here are the cron schedules and the purpose of these workflows:

| Workflow file | Time                   | Runs at              | Cron expression | Purpose of this workflow                                   |
| ------------- | ---------------------- | -------------------- | --------------- | ---------------------------------------------------------- |
| night.yml     | 00:00 BST<br>18:00 UTC | 12 AM, Daily         | 0 18 \* \* \*   | Help me improve my sleep habit                             |
| evnt.yml      | 06:00 BST<br>00:00 UTC | 6 AM, Daily          | 0 0 \* \* \*    | Help me remember the special days of people I care         |
| moment.yml    | 19:00 BST<br>13:00 UTC | 7 PM, Daily          | 0 13 \* \* \*   | Remind me to relive certain moments of my life             |
| festival.yml  | 07:00 BST<br>01:00 UTC | 7 AM, Daily          | 0 1 \* \* \*    | Remind me to celebrate festivals                           |
| quote.yml     | 09:00 BST<br>03:00 UTC | 9 AM, on Sundays     | 0 3 \* \* 0     | Help me to be mindful                                      |
| video.yml     | 15:00 BST<br>09:00 UTC | 3 PM, on Mondays     | 0 9 \* \* 1     | Reduce stress and remind me to take breaks                 |
| photo.yml     | 16:00 BST<br>10:00 UTC | 4 PM, on Tuesdays    | 0 10 \* \* 2    | Remind me to enjoy the beauty of nature                    |
| book.yml      | 22:00 BST<br>16:00 UTC | 10 PM, on Tuesdays   | 0 16 \* \* 2    | Help me stick to my reading habit                          |
| cheerup.yml   | 11:00 BST<br>05:00 UTC | 11 AM, on Wednesdays | 0 5 \* \* 3     | Motivate me when I am feeling down without asking about it |
| reminder.yml  | 17:00 BST<br>11:00 UTC | 5 PM, on Thursdays   | 0 11 \* \* 4    | Remind me to write stories and draw illustrations          |
| chore.yml     | 08:00 BST<br>02:00 UTC | 8 AM, on Fridays     | 0 2 \* \* 5     | Remind me to do general chores (E.g. replying to E-mails)  |
| meme.yml      | 16:00 BST<br>10:00 UTC | 4 PM, on Fridays     | 0 10 \* \* 5    | Remind me to be silly at times                             |
| youtube.yml   | 21:00 BST<br>15:00 UTC | 9 PM, on Saturdays   | 0 15 \* \* 6    | Remind me about the YouTube videos I used to enjoy         |
| bday.yml      | 00:00 BST<br>18:00 UTC | 12 AM, on 25 October | 0 18 24 10 \*   | Remind me that I am loved and I matter                     |

If you need help, you can always use [**crontab guru**][24].

## License

My project is licensed under the [**MIT License**][6]. But I couldn't have created it without the incredible open-source code provided by the following individuals. Their code is licensed under [**CC BY-SA 4.0**][7].

| Util function                         | Author                    | Source               |
| ------------------------------------- | ------------------------- | -------------------- |
| `toBn(num)`                           | [**Mohsen Alyafei**][15]  | [Stack Overflow][8]  |
| `shuffleArray(array)`                 | [**Laurens Holst**][16]   | [Stack Overflow][9]  |
| `toList(arr, oxford, connector)`      | [**Jamie Mason**][17]     | [GitHub Gist][10]    |
| `toTitleCase(str)`                    | [**dipole_moment**][18]   | [Stack Overflow][11] |
| `toNameCase(str)`                     | [**Tom Kay**][19]         | [Stack Overflow][12] |
| `fetchWithTimeout(resource, options)` | [**Dmitri Pavlutin**][20] | [Blog Post][13]      |
| `getWeekdays(target)`                 | [**jabclab**][21]         | [Stack Overflow][14] |

## Artwork

The banner image in this `Readme.md` file and [**the Bot**][37]'s Profile Photo was generated with [**Tensor.Art**][4] using the following settings:

```
Steps: 20
Sampler: Euler a
CFG scale: 7.0
Seed: 2213856583
Size: 512x768
Model: REALTOONMEIN
Seed resize from: -1x-1
Denoising strength: 0
Clip skip: 2
ENSD: 31337
Version: v1.3.4-timer-2-gd21b628
```

**Prompt:**

cartoon, wide-angle half-body professional portrait photo of Danny Phantom, teenage boy, black shirt, no facial hair, acne-free face, perfect teeth, confident, backlit, fashion photography, centered, symmetrical, looking_at_viewer, hasselblad helios 44-2 58mm F2, by Annie Leibovitz and Ellen von Unwerth, sitting on a chair in a photo studio

If you still need help, you can Remix [**this artwork**][5] as a starting point.

## History

At first, this project was just an experiment, but it soon became a major part of my life. Through working on this bot, I was able to achieve what I had envisioned. My goal was to create a bot that acted like one of my friends, and it also helped me to confront my weaknesses. Whenever I am feeling down, I turn to my bot friend for support. I use it as a form of self-journaling, leaving messages for my future self to read.

### v2.0.0

-   Rewrote the entire codebase.
-   Added 6 new worker scripts.
-   Added better message responses.
-   Prefixed worker scripts with `w-` and located in the `src` folder.
-   Most of the message behavior can be changed by editing the `src/config.js` file.
-   User data is stored in the `src/data` folder.
-   Readme file is available in two languages.

### v1.0.0

-   Experimental release

<!-- links go here -->

[1]: https://github.com/ShadowShahriar/telegram-bot
[2]: https://github.com/ShadowShahriar/telegram-bot/blob/master/Readme-bn.md
[3]: https://en.wikipedia.org/wiki/Danny_Phantom
[4]: https://tensor.art/
[5]: https://tensor.art/images/614973483807605428?post_id=614979166045153015
[6]: https://github.com/ShadowShahriar/telegram-bot/blob/main/LICENSE
[7]: https://creativecommons.org/licenses/by-sa/4.0/
[8]: https://stackoverflow.com/a/69447629
[9]: https://stackoverflow.com/a/12646864
[10]: https://gist.github.com/JamieMason/c1a089f6f1f147dbe9f82cb3e25cd12e
[11]: https://stackoverflow.com/a/46774740
[12]: https://stackoverflow.com/a/46959528
[13]: https://dmitripavlutin.com/timeout-fetch-request/
[14]: https://stackoverflow.com/a/9481478
[15]: https://stackoverflow.com/users/11606728/mohsen-alyafei
[16]: https://stackoverflow.com/users/310500/laurens-holst
[17]: https://github.com/JamieMason
[18]: https://stackoverflow.com/users/1869326/dipole-moment
[19]: https://github.com/TomK
[20]: https://dmitripavlutin.com/
[21]: https://stackoverflow.com/users/1071383/jabclab
[22]: https://github.com/telegraf/telegraf
[23]: https://github.com/ShadowShahriar/telegram-bot/actions
[24]: https://crontab.guru/
[25]: https://developers.google.com/books/docs/v1/using
[26]: https://github.com/lukePeavey/quotable
[27]: https://unsplash.com/developers
[28]: https://imgflip.com/api
[29]: https://www.pexels.com/api/
[30]: https://t.me/myidbot
[31]: https://t.me/BotFather
[32]: https://github.com/ShadowShahriar/telegram-bot/blob/main/.env_sample
[33]: https://console.firebase.google.com/
[34]: https://console.cloud.google.com/
[35]: https://developers.google.com/youtube/v3
[36]: https://developers.google.com/tenor/guides/quickstart
[37]: https://t.me/shadowshahriar_bot
