# telegram-bot

<p align="center"><img src="./assets/botdesc-2x.png" width="100%" alt="<!-- Banner should go here -->"/></p>

## প্রোজেক্টটির ওভারভিউ

[English (United States)][1] | [Bengali (Bangladesh)][2]

> এই রিপোসিটরিটিতে এমন একটি টেলিগ্রাম বোট তৈরি করে দেখানো হয়েছে যা আমাকে সময়ে সময়ে বিভিন্ন বিষয়ের রিমাইন্ডার, ছবি, মিম, ইউটিউব ভিডিও, নতুন বইয়ের রেকোমেন্ডেশন ইত্যাদি পাঠাতে পারে। তাছাড়াও এটি আমার প্রিয়জনদের জন্মদিন মনে রাখে যেন আমি তাদের জন্য গিফট রেডি করতে পারি এবং তাদেরকে সময়মত শুভেচ্ছা জানাতে পারি।

এই টেলিগ্রাম বোটটি অ্যানিমেটেড কার্টুন সিরিজ [**ড্যানি ফ্যান্টম**][3]-র কেন্দ্রীয় চরিত্র **ড্যানি** দ্বারা অনুপ্রাণিত হয়েছিলো।

## প্রোজেক্টটি তৈরির পিছনের গল্প

একটি প্রচলিত কথা আছে যে **আমরা নিজেদের খুশির জন্য নিজেরাই দায়ী**। আমার নিজের সুখের জন্য আর কেউ নয়, আমিই দায়ী।

সারাদিন কাজ করার ফলে আমি কম্পিউটার স্ক্রিনের দিকে তাকিয়ে থেকে অনেক সময় কাটাই। এজন্য আমি প্রায়শই অনেক কিছু ভুলে যাই, এমনকি পড়ার টেবিল পরিষ্কার করার কথা বা গল্প লেখার মতো ছোটখাটো কাজগুলোও আমার মনে থাকে না। একা থাকার কারণেই হয়তো, সবসময় একাকীত্বে ভুগি- কেমন যেন উদ্বিগ্ন লাগে। সত্যি বলতে কি, বন্ধুবান্ধবদের সবসময় তো আর কাছে পাওয়া যায় না, তাদের সাথে সবসময় কথাও বলা হয় না। তারা হয়তো তাদের কাজ নিয়ে ব্যস্ত থাকতে পারে। আবার অনেক সময় এমন হয় যে আমার কাছে ওদের মেসেজের রিপ্লাই দেওয়ারও অবসর সময় থাকে না।

আমার সহপাঠীরা জানে আমি একজন ডেভেলপার, তাই তারা _ইতিমধ্যেই_ আমাকে মেসেজ করা ছেড়ে দিয়েছে।

আমার অনেক ভালো লাগে যখন আমার কোন বন্ধু আমাকে মেসেজ দিয়ে জিজ্ঞেস করে আমি ভালো আছি কিনা। কিন্তু আমি খেয়াল করেছি, ওরা আমাকে ঠিক তখনই মেসেজ করে যখন ওদের কিছু প্রয়োজন হয়। অবশ্যই কোন ফ্রেন্ডকে হেল্প করতে পেরে আমারও ভালো লাগে, তবে আমার সাথে এই জিনিসটা এতো বার হয়েছে যে আমার মনে আমি একটা কোন _টুল_। আমাকে যখন ওদের প্রয়োজন হয়, আমাকে ব্যবহার করে নেয়। ওরা মনে হয় আমাকে ফ্রেন্ড হিসেবেও দেখে না।

আমার সন্দেহ সত্যি প্রমাণিত হয় **২৭শে মে, ২০২৩**। সেদিন আমার সহপাঠীদের মধ্যে দশজন এমন একটা কাজ করে যেটা আমি কখনোই ভাবতে পারিনি। এই ঘটনাটি আমার উপর বেশ বাজে রকমের প্রভাব ফেলেছে- মানুষিক আর শারীরিক দুইভাবেই। খুব কাছের বন্ধুদের কাছ থেকে কখনো এভাবে প্রতারিত হবো তা কল্পনাও করিনি।

নিজের সুখের জন্য অন্যের উপর নির্ভর করতে চাই না। আমি এমন কিছু চেয়েছিলাম যা আমাকে নিজের পথে থাকতে সাহায্য করবে, আমাকে মনে করিয়ে দিবে আমার এখন কী করণীয়। তখনই আমার একটা আইডিয়া এলো- কেমন হয় যদি এমন একটা বোট বানানো যায় যেটা কিনা আমার ফ্রেন্ডের মতো আমাকে মেসেজ পাঠাবে?

## প্রোজেক্টটির ফিচারসমূহ

এই টেলিগ্রাম বোটটি একটা প্রকৃত বন্ধুর মতো বিভিন্ন কাজ করতে পারে। নিন্মে এটি যেসকল কাজ করতে পারে তার একটি তালিকা তুলে ধরা হলো:

-   নিজের লক্ষ্যের দিকে এগিয়ে যাওয়ার জন্য মোটিভেট করবে আর আমার মন খারাপ হলে আমাকে উৎসাহিত করবে।
-   প্রিয়জনদের জন্মদিন আর স্পেশাল দিনগুলোর কথা মনে করিয়ে দিবে।
-   সাধারণ কাজগুলো সম্পন্ন করার কথা মনে করিয়ে দিবে (যেমন- ঘর গোছানো বা ই-মেইল চেক করা)
-   নতুন গল্প লেখার কথা বা নতুন স্কেচ আঁকার কথা মনে করিয়ে দিবে।
-   আমাকে সময়মত ঘুমাতে যেতে বলবে।
-   পড়ার জন্য বই রেকমেন্ড করবে।
-   ঈদ এবং অন্যান্য উৎসবের দিন উইশ করবে।
-   আমাকে বার্থডে উইশ করবে।
-   আমাকে মিম টেমপ্লেট পাঠাবে যেন আমি নতুন মিম তৈরি করতে পারি।
-   পুরনো ছবি পাঠিয়ে জীবনের হারিয়ে যাওয়া মুহূর্তগুলোকে আবার ছুঁয়ে দেখার সুযোগ করে দিবে।
-   ইন্টারনেট থেকে বিভিন্ন ছবি/ভিডিও পাঠিয়ে আমার মন ভালো করে দিবে।
-   সফল ব্যক্তিদের উক্তি পাঠিয়ে আমাকে সামনের দিকে এগিয়ে যাওয়ার মনোবল যোগাবে।
-   কাঙ্ক্ষিত প্লে-লিস্ট থেকে ইউটিউব ভিডিও পাঠাবে, যেন আমি আমার ফেভারিট কনটেন্ট আরও একবার উপভোগ করতে পারি।

## এটি কীভাবে কাজ করে?

এই প্রোজেক্টটির জন্য আমরা [**Telegraf**][22] ব্যবহার করছি যা একটি মডার্ন টেলিগ্রাম বোট API ফ্রেমওয়ার্ক যার মাধ্যমে খুব সহজেই JavaScript দিয়ে টেলিগ্রাম বোট বানিয়ে নেওয়া যায়।

শুধু তাই নয়, এছাড়াও আমরা আরও বেশ কয়েকটি API ব্যবহার করে Rich কনটেন্ট প্রদান করছি। যেমন- বইয়ের ইনফর্মেশন জানার জন্য রয়েছে [**Google Books API**][25], কনফিগারেশন ডেটা সংরক্ষণ করার জন্য রয়েছে **Firebase Realtime Database**, পুরনো মুহূর্তগুলো সংরক্ষণ করছি **Firebase Storage** দ্বারা, [**ImgFlip API**][28] ব্যবহার করে মিম টেমপ্লেট সংগ্রহ করছি, [**Pexels**][29] থেকে cat video খুঁজে আনছি, [**Quotable**][26] ব্যবহার করে বিভিন্ন বিষয়ের উপর সফল ব্যক্তিদের করা উক্তিগুলো পেয়ে যাচ্ছি, **Tenor API** থেকে GIF অ্যানিমেশন পাচ্ছি, [**Unsplash API**][27] থেকে খুব সুন্দর সুন্দর ছবি পাচ্ছি আর প্লে-লিস্ট থেকে ইউটিউব ভিডিও নেওয়ার জন্য **YouTube API** তো রয়েছেই!

আমরা মেসেজগুলো `cron` দ্বারা শিডিউল করে রাখছি আর GitHub Actions ব্যবহার করে সময়মত tasks-গুলো রান করছি। [**এখানে সবগুলো workflow ফাইল**][23] রয়েছে।

## প্রোজেক্ট ডেমো

1. লোকালি রান করার জন্য নিম্নোক্ত কম্যান্ড দ্বারা NPM dependency-গুলো ইন্সটল করে নিতে হবে-

    ```bash
    npm install
    ```

2. ধরি, তোমার একটা টেলেগ্রাম অ্যাকাউন্ট আছে আর তোমার স্মার্ট ডিভাইসে টেলেগ্রাম অ্যাপ ইন্সটল করা আছে। এখন [**@myidbot**][30] ব্যবহার করে তোমার Telegram ID সংগ্রহ করে নাও। তারপর [**@BotFather**][31]-র সাথে চ্যাট করে একটা নতুন বোট তৈরি করো। বোট তৈরি করার পর `/start` কম্যান্ড দিয়ে বোটটি রান করো।

3. একটা `.env` ফাইল তৈরি করো আর সেখানে তোমার Telegram User ID and Bot Token টাইপ করো:

    ```yaml
    TELEGRAM_BOT_TOKEN=...
    TELEGRAM_USER_ID=...
    ```

4. যেহেতু আমরা অনেকগুলো API নিয়ে কাজ করছি, এমন কিছু API রয়েছে যেগুলো ব্যবহার করার জন্য authentication token or API key লাগবে। এখন এগুলো কীভাবে সংগ্রহ করা সম্ভব তা নিয়ে <a href="#api-key-সম্পর্কিত-নোট"><b>API Key সম্পর্কিত নোট</b></a> নামক সেকশনে বিস্তারিত আলোচনা করা হয়েছে। কোনো কনফিউশন থাকলে [স্যাম্পল `.env` ফাইল][32] দেখে নিতে পারো।

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

5. সবশেষে এই কম্যান্ডটি রান করো:

    ```bash
    npm test
    ```

    সবকিছু ঠিকঠাক থাকলে নতুন বোটটি তোমার টেলিগ্রাম অ্যাকাউন্টে মেসেজ, ছবি, ভিডিও পাঠাতে থাকবে।

## API Key সম্পর্কিত নোট

-   [**Pexels**][29] আর [**Unsplash API**][27] তাদের API key কীভাবে সংগ্রহ করতে হবে তা খুব গুছিয়ে লিখে রেখেছে। তাই এই API-গুলো ব্যবহার করা যেমন সহজ, প্রোজেক্টে যুক্ত করাও সহজ।

-   [**Google Books API**][25], [**ImgFlip API**][28], আর [**Quotable**][26]-র মতো API-র জন্য authentication প্রয়োজন হয় না বলে এগুলো টেস্ট করা যেমন সহজ, সিস্টেমে যুক্ত করাও ঝামেলামুক্ত।

-   **Firebase**, **Tenor API**, আর **YouTube API**-র API key সংগ্রহ করা বেশ জটিল। তাই API key সংগ্রহের জন্য এখানে সাধারণ ধাপগুলো তুলে ধরা হলো:

    ### গুগল ক্লাউড প্রোজেক্ট তৈরি

    1. [**Google Cloud Console**][34]-এ গিয়ে একটি নতুন প্রোজেক্ট তরি করো।
    2. উপরের বামদিকে থাকা navigation menu-তে ক্লিক করো। এরপর এখানে যাও **APIs & Services** > **Enabled API and Services** > **Enable APIs and Services**.
    3. [**YouTube Data API**][35] আর [**Tenor API**][36] enable করে দাও।
    4. হাতের বামদিকে থাকা সাইডবার থেকে **Credentials** বেছে নাও। **API Keys** সেকশনে থাকে যেকোনো একটি key বেছে নাও। কোনো key না থাকলে **Create Credentials** বাটনে ক্লিক করে নতুন key তৈরি করে নাও।
    5. এখন আমরা আমাদের আগে থেকে তৈরি করে রাখা `.env` ফাইলে API key-টা বসিয়ে দিতে পারি। **YouTube** আর **Tenor API**-র জন্য API key একই।

    ### Firebase প্রোজেক্ট তৈরি

    **Firebase Real-time Database** আর **Firebase Storage**-র সুবিধাগুলো ব্যবহার করতে হলে আমাদের একটি Firebase প্রোজেক্ট তৈরি করতে হবে। সেটা করার জন্য ধাপগুলো হলো:

    1. ব্রাউজার ব্যবহার করে [**Firebase Console**][33]-এ যাও।
    2. **Add Project** বাটনে ক্লিক করে নতুন একটা প্রোজেক্ট তৈরি করো অথবা একটা পূর্বে তৈরি করা কোনো গুগল ক্লাউড প্রোজেক্ট থাকলে সেটা ব্যবহার করো।
    3. বামদিকের সাইডবারে থাকা **Project Overview** লিঙ্কের পাশে থাকা কগ আইকনে ক্লিক করে **Project settings** বেছে নাও।
    4. **General** ট্যাবের নিচে গিয়ে একটি নতুন **Web App** তৈরি করো। **SDK setup and configuration** সেকশনে একটা `firebaseConfig` object দেখা যাবে:
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
        এখানে `apiKey` হলো `FIREBASE_RTDB_AUTH`, `databaseURL` হলো `FIREBASE_RTDB_NAME`, আর `storageBucket` হচ্ছে `FIREBASE_STORAGE_BUCKET`। এখন আমরা আগে থেকে তৈরি করে রাখা `.env` ফাইলে এগুলো বসিয়ে দিতে পারি।

## Cron শিডিউল সম্পর্কিত নোট

GitHub action-এ **UTC** টাইম ব্যবহার করা হয়। আমি ঢাকায় বাস করি যা বাংলাদেশে অবস্থিত আর আমার time zone হচ্ছে **UTC +06:00** (অথবা **Bangladesh Standard Time**). তার মানে GitHub action-র ঘড়ির সময় থেকে আমার ঘড়ির সময় ৬ঘণ্টা এগিয়ে আছে। তাহলে **UTC** টাইম পাওয়ার জন্য আমাকে আমার স্থানের সময় থেকে ৬ঘণ্টা বিয়োগ করতে হবে।

নিম্নে সবগুলো workflow-র cron schedule আর উদ্দেশ্য তুলে ধরা হলো:

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

কোনো হেল্প লাগলে [**crontab guru**][24] তো রয়েছেই!

## প্রোজেক্টের লাইসেন্স

আমি আমার প্রোজেক্টটি [**MIT License**][6]-র আওতায় এনেছি। তবে এই প্রোজেক্টটি তৈরি করা সম্ভব হতো না যদি নিম্নোক্ত ব্যক্তিগণ তাদের open-source code আমাকে ব্যবহার করার অনুমতি প্রদান না করতেন। তাদের অংশের code [**CC BY-SA 4.0**][7] লাইসেন্সের আওতাভুক্ত।

| Util function                         | Author                    | Source               |
| ------------------------------------- | ------------------------- | -------------------- |
| `toBn(num)`                           | [**Mohsen Alyafei**][15]  | [Stack Overflow][8]  |
| `shuffleArray(array)`                 | [**Laurens Holst**][16]   | [Stack Overflow][9]  |
| `toList(arr, oxford, connector)`      | [**Jamie Mason**][17]     | [GitHub Gist][10]    |
| `toTitleCase(str)`                    | [**dipole_moment**][18]   | [Stack Overflow][11] |
| `toNameCase(str)`                     | [**Tom Kay**][19]         | [Stack Overflow][12] |
| `fetchWithTimeout(resource, options)` | [**Dmitri Pavlutin**][20] | [Blog Post][13]      |
| `getWeekdays(target)`                 | [**jabclab**][21]         | [Stack Overflow][14] |

## আর্টওয়ার্ক

এই `Readme.md` ফাইলের ব্যানার ইমেজ আর [**বোট**][37]-এর Profile Photo [**Tensor.Art**][4] ব্যবহার করে তৈরি করা হয়েছে। এটির জন্য নিম্নোক্ত সেটিংগুলো ব্যবহার করা হয়েছিলো:

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

যদি এরপরেও কোনো হেল্প লাগে তাহলে [**এই ইমেজটি**][5] Remix করে দেখতে পারো।

## সংস্করণ

এক্সপেরিমেন্ট হিসেবে শুরু করা প্রোজেক্টটি যে আমার জীবনের একটা গুরুত্বপূর্ণ অংশে পরিণত হবে তা আগে থেকে বুঝে উঠতে পারিনি। এই প্রোজেক্টের উপর কাজ করার সময় আমি যেমনটা কল্পনা করেছিলাম ঠিক সেরকমটাই করে দেখাতে পেরেছি। আমি চেয়েছিলাম এমন একটা বোট তৈরি করতে যেটা আমার ফ্রেন্ডের মতো আচরণ করবে, আমাকে আমার দুর্বলতা কাটিয়ে উঠতে সাহায্য করবে। যখনই আমার মন খারাপ হয়, তখন এই বোট আমাকে উৎসাহিত করার জন্য কিছু না কিছু পাঠায়- আমার ভালো লাগে। আসলে আমি এই প্রোজেক্টের মাধ্যমে self-journaling করার চেষ্টায় আছি, ভবিষ্যতের শাহ্‌রিয়ারের জন্য বর্তমানের কিছু মেসেজ রেখে যাচ্ছি।

### v2.0.0

-   সম্পূর্ণ codebase পুনলিখন।
-   ৬টি নতুন worker script সংযোজন।
-   উপযুক্ত মেসেজের রিপ্লাই সংযোজন।
-   Worker script-গুলোর আগে `w-` দ্বারা চিহ্নিতকরণ আর সেগুলোকে `src` ফোল্ডারে স্থানান্তর।
-   বোটের আচরণ নিয়ন্ত্রণ করার জন্য `src/config.js` নামক কনফিগারেশন ফাইল তৈরি।
-   `src/data` ফোল্ডারে ব্যবহারকারীর ডেটা সংরক্ষণ।
-   দুইটি ভাষায় Readme ফাইল লিখন।

### v1.0.0

-   এক্সপেরিমেন্টাল রিলিজ

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
