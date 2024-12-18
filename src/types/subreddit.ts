export interface Subreddit {
  name: string;
  icon: string;
}

export const subreddits: Subreddit[] = [
  { name: 'funny', icon: '/assets/icons/reddit0.png' },           // 66M
  { name: 'AskReddit', icon: '/assets/icons/reddit1.png' },      // 50M
  { name: 'gaming', icon: '/assets/icons/reddit2.png' },         // 45M
  { name: 'worldnews', icon: '/assets/icons/reddit3.png' },      // 43M
  { name: 'todayilearned', icon: '/assets/icons/reddit4.png' },  // 39M
  { name: 'aww', icon: '/assets/icons/reddit5.png' },            // 37M
  { name: 'Music', icon: '/assets/icons/reddit6.png' },          // 36M
  { name: 'memes', icon: '/assets/icons/reddit7.png' },          // 35M
  { name: 'movies', icon: '/assets/icons/reddit8.png' },         // 34M
  { name: 'Showerthoughts', icon: '/assets/icons/reddit9.png' }, // 33M
  { name: 'science', icon: '/assets/icons/reddit10.png' },       // 33M
  { name: 'pics', icon: '/assets/icons/reddit11.png' },          // 31M
  { name: 'Jokes', icon: '/assets/icons/reddit12.png' },         // 30M
  { name: 'news', icon: '/assets/icons/reddit13.png' },          // 29M
  { name: 'space', icon: '/assets/icons/reddit14.png' },         // 27M
  { name: 'videos', icon: '/assets/icons/reddit15.png' },        // 27M
  { name: 'askscience', icon: '/assets/icons/reddit16.png' },    // 26M
  { name: 'DIY', icon: '/assets/icons/reddit17.png' },           // 26M
  { name: 'books', icon: '/assets/icons/reddit18.png' },         // 26M
  { name: 'nottheonion', icon: '/assets/icons/reddit19.png' },   // 25M
  { name: 'mildlyinteresting', icon: '/assets/icons/reddit20.png' }, // 24M
  { name: 'food', icon: '/assets/icons/reddit21.png' },          // 24M
  { name: 'EarthPorn', icon: '/assets/icons/reddit22.png' },     // 24M
  { name: 'GetMotivated', icon: '/assets/icons/reddit23.png' },  // 24M
  { name: 'explainlikeimfive', icon: '/assets/icons/reddit24.png' }, // 23M
  { name: 'gadgets', icon: '/assets/icons/reddit25.png' },       // 23M
  { name: 'LifeProTips', icon: '/assets/icons/reddit26.png' },   // 23M
  { name: 'IAmA', icon: '/assets/icons/reddit27.png' },          // 23M
  { name: 'Art', icon: '/assets/icons/reddit28.png' },           // 22M
  { name: 'sports', icon: '/assets/icons/reddit29.png' },        // 22M
  { name: 'gifs', icon: '/assets/icons/reddit30.png' },          // 22M
  { name: 'dataisbeautiful', icon: '/assets/icons/reddit31.png' }, // 21M
  { name: 'Futurology', icon: '/assets/icons/reddit32.png' },    // 21M
  { name: 'Documentaries', icon: '/assets/icons/reddit33.png' }, // 20M
  { name: 'personalfinance', icon: '/assets/icons/reddit34.png' }, // 20M
  { name: 'UpliftingNews', icon: '/assets/icons/reddit35.png' }, // 20M
  { name: 'photoshopbattles', icon: '/assets/icons/reddit36.png' }, // 20M
  { name: 'WritingPrompts', icon: '/assets/icons/reddit37.png' }, // 19M
  { name: 'tifu', icon: '/assets/icons/reddit38.png' },          // 19M
  { name: 'OldSchoolCool', icon: '/assets/icons/reddit39.png' }, // 19M
  { name: 'Damnthatsinteresting', icon: '/assets/icons/reddit40.png' }, // 19M
  { name: 'history', icon: '/assets/icons/reddit41.png' },       // 18M
  { name: 'philosophy', icon: '/assets/icons/reddit42.png' },    // 18M
  { name: 'nosleep', icon: '/assets/icons/reddit43.png' },       // 18M
  { name: 'listentothis', icon: '/assets/icons/reddit44.png' },  // 18M
  { name: 'wholesomememes', icon: '/assets/icons/reddit45.png' }, // 18M
  { name: 'technology', icon: '/assets/icons/reddit46.png' },    // 18M
  { name: 'television', icon: '/assets/icons/reddit47.png' },    // 17M
  { name: 'wallstreetbets', icon: '/assets/icons/reddit48.png' }, // 17M
  { name: 'InternetIsBeautiful', icon: '/assets/icons/reddit49.png' }, // 17M
  { name: 'NatureIsFuckingLit', icon: '/assets/icons/reddit50.png' }, // 15M
  { name: 'creepy', icon: '/assets/icons/reddit51.png' },        // 15M
  { name: 'relationship_advice', icon: '/assets/icons/reddit52.png' }, // 15M
  { name: 'lifehacks', icon: '/assets/icons/reddit53.png' },     // 14M
  { name: 'nba', icon: '/assets/icons/reddit54.png' },           // 14M
  { name: 'pcmasterrace', icon: '/assets/icons/reddit55.png' },  // 14M
  { name: 'interestingasfuck', icon: '/assets/icons/reddit56.png' }, // 13M
  { name: 'ContagiousLaughter', icon: '/assets/icons/reddit57.png' }, // 13M
  { name: 'travel', icon: '/assets/icons/reddit58.png' },        // 12M
  { name: 'HistoryMemes', icon: '/assets/icons/reddit59.png' },  // 12M
  { name: 'Fitness', icon: '/assets/icons/reddit60.png' },       // 12M
  { name: 'dadjokes', icon: '/assets/icons/reddit61.png' },      // 12M
  { name: 'anime', icon: '/assets/icons/reddit62.png' },         // 12M
  { name: 'oddlysatisfying', icon: '/assets/icons/reddit63.png' }, // 12M
  { name: 'nfl', icon: '/assets/icons/reddit64.png' },           // 11M
  { name: 'Unexpected', icon: '/assets/icons/reddit65.png' },    // 11M
  { name: 'NetflixBestOf', icon: '/assets/icons/reddit66.png' }, // 11M
  { name: 'EatCheapAndHealthy', icon: '/assets/icons/reddit67.png' }, // 11M
  { name: 'MadeMeSmile', icon: '/assets/icons/reddit68.png' },   // 11M
  { name: 'AdviceAnimals', icon: '/assets/icons/reddit69.png' }, // 9.9M
  { name: 'tattoos', icon: '/assets/icons/reddit70.png' },       // 9.7M
  { name: 'CryptoCurrency', icon: '/assets/icons/reddit71.png' }, // 9.2M
  { name: 'mildlyinfuriating', icon: '/assets/icons/reddit72.png' }, // 8.8M
  { name: 'politics', icon: '/assets/icons/reddit73.png' },      // 8.7M
  { name: 'BeAmazed', icon: '/assets/icons/reddit74.png' },      // 8.5M
  { name: 'AnimalsBeingDerps', icon: '/assets/icons/reddit75.png' }, // 8.4M
  { name: 'ChatGPT', icon: '/assets/icons/reddit76.png' },       // 8.3M
  { name: 'FoodPorn', icon: '/assets/icons/reddit77.png' },      // 8.3M
  { name: 'facepalm', icon: '/assets/icons/reddit78.png' },      // 8.2M
  { name: 'europe', icon: '/assets/icons/reddit79.png' },        // 8M
  { name: 'soccer', icon: '/assets/icons/reddit80.png' },        // 8M
  { name: 'Minecraft', icon: '/assets/icons/reddit81.png' },     // 8M
  { name: 'leagueoflegends', icon: '/assets/icons/reddit82.png' }, // 7.8M
  { name: 'Parenting', icon: '/assets/icons/reddit83.png' },     // 7.8M
  { name: 'PS5', icon: '/assets/icons/reddit84.png' },           // 7.7M
  { name: 'WatchPeopleDieInside', icon: '/assets/icons/reddit85.png' }, // 7.7M
  { name: 'rarepuppers', icon: '/assets/icons/reddit86.png' },   // 7.7M
  { name: 'buildapc', icon: '/assets/icons/reddit87.png' },      // 7.5M
  { name: 'FunnyAnimals', icon: '/assets/icons/reddit88.png' },  // 7.5M
  { name: 'NintendoSwitch', icon: '/assets/icons/reddit89.png' }, // 7.5M
  { name: 'gardening', icon: '/assets/icons/reddit90.png' },     // 7.5M
  { name: 'cats', icon: '/assets/icons/reddit91.png' },          // 7.4M
  { name: 'Bitcoin', icon: '/assets/icons/reddit92.png' },       // 7.4M
  { name: 'itookapicture', icon: '/assets/icons/reddit93.png' }, // 7.2M
  { name: 'cars', icon: '/assets/icons/reddit94.png' },          // 7.1M
  { name: 'AnimalsBeingBros', icon: '/assets/icons/reddit95.png' }, // 6.9M
  { name: 'programming', icon: '/assets/icons/reddit96.png' },   // 6.7M
  { name: 'CozyPlaces', icon: '/assets/icons/reddit97.png' },    // 6.6M
  { name: 'AnimalsBeingJerks', icon: '/assets/icons/reddit98.png' }, // 6.6M
  { name: 'MakeupAddiction', icon: '/assets/icons/reddit99.png' }, // 6.6M
  { name: 'HumansBeingBros', icon: '/assets/icons/reddit100.png' }, // 6.5M
  { name: 'starterpacks', icon: '/assets/icons/reddit101.png' }, // 6.3M
  { name: 'Frugal', icon: '/assets/icons/reddit102.png' },       // 6M
  { name: 'malefashionadvice', icon: '/assets/icons/reddit103.png' }, // 6M
  { name: 'Overwatch', icon: '/assets/icons/reddit104.png' },    // 6M
  { name: 'Tinder', icon: '/assets/icons/reddit105.png' },       // 5.9M
  { name: 'Awwducational', icon: '/assets/icons/reddit106.png' }, // 5.9M
  { name: 'nevertellmetheodds', icon: '/assets/icons/reddit107.png' }, // 5.9M
  { name: 'apple', icon: '/assets/icons/reddit108.png' },        // 5.9M
  { name: 'socialskills', icon: '/assets/icons/reddit109.png' }, // 5.9M
  { name: 'coolguides', icon: '/assets/icons/reddit110.png' },   // 5.7M
  { name: 'woodworking', icon: '/assets/icons/reddit111.png' },  // 5.7M
  { name: 'dating', icon: '/assets/icons/reddit112.png' },       // 5.7M
  { name: 'entertainment', icon: '/assets/icons/reddit113.png' }, // 5.6M
  { name: 'nutrition', icon: '/assets/icons/reddit114.png' },    // 5.6M
  { name: 'foodhacks', icon: '/assets/icons/reddit115.png' },    // 5.6M
  { name: 'PS4', icon: '/assets/icons/reddit116.png' },          // 5.6M
  { name: 'femalefashionadvice', icon: '/assets/icons/reddit117.png' }, // 5.5M
  { name: 'CrappyDesign', icon: '/assets/icons/reddit118.png' }, // 5.5M
  { name: 'nasa', icon: '/assets/icons/reddit119.png' },         // 5.5M
  { name: 'drawing', icon: '/assets/icons/reddit120.png' },      // 5.5M
  { name: 'photography', icon: '/assets/icons/reddit121.png' },  // 5.5M
  { name: 'YouShouldKnow', icon: '/assets/icons/reddit122.png' }, // 5.4M
  { name: 'FortNiteBR', icon: '/assets/icons/reddit123.png' },   // 5.4M
  { name: 'bestof', icon: '/assets/icons/reddit124.png' },       // 5.3M
  { name: 'technicallythetruth', icon: '/assets/icons/reddit125.png' }, // 5.3M
  { name: 'ModernWarfareII', icon: '/assets/icons/reddit126.png' }, // 5.3M
  { name: 'MealPrepSunday', icon: '/assets/icons/reddit127.png' }, // 5.2M
  { name: 'TravelHacks', icon: '/assets/icons/reddit128.png' },  // 5.2M
  { name: 'NoStupidQuestions', icon: '/assets/icons/reddit129.png' }, // 5.2M
  { name: 'Sneakers', icon: '/assets/icons/reddit130.png' },     // 5.2M
  { name: 'backpacking', icon: '/assets/icons/reddit131.png' },  // 5.1M
  { name: 'pokemongo', icon: '/assets/icons/reddit132.png' },    // 5.1M
  { name: 'anime_irl', icon: '/assets/icons/reddit133.png' },    // 5.1M
  { name: 'boardgames', icon: '/assets/icons/reddit134.png' },   // 5.1M
  { name: 'MapPorn', icon: '/assets/icons/reddit135.png' },      // 5.1M
  { name: 'battlestations', icon: '/assets/icons/reddit136.png' }, // 5.1M
  { name: 'trippinthroughtime', icon: '/assets/icons/reddit137.png' }, // 5.1M
  { name: 'Outdoors', icon: '/assets/icons/reddit138.png' },     // 5M
  { name: 'biology', icon: '/assets/icons/reddit139.png' },      // 5M
  { name: 'Economics', icon: '/assets/icons/reddit140.png' },    // 5M
  { name: 'Survival', icon: '/assets/icons/reddit141.png' },     // 4.9M
  { name: 'streetwear', icon: '/assets/icons/reddit142.png' },   // 4.9M
  { name: 'Shoestring', icon: '/assets/icons/reddit143.png' },   // 4.9M
  { name: 'OnePiece', icon: '/assets/icons/reddit144.png' },     // 4.9M
  { name: 'camping', icon: '/assets/icons/reddit145.png' },      // 4.9M
  { name: 'BikiniBottomTwitter', icon: '/assets/icons/reddit146.png' }, // 4.7M
  { name: 'strength_training', icon: '/assets/icons/reddit147.png' }, // 4.7M
  { name: 'PremierLeague', icon: '/assets/icons/reddit148.png' }, // 4.7M
  { name: 'formula1', icon: '/assets/icons/reddit149.png' },     // 4.6M
  { name: 'pettyrevenge', icon: '/assets/icons/reddit150.png' }, // 4.6M
  { name: 'dating_advice', icon: '/assets/icons/reddit151.png' }, // 4.6M
  { name: 'slowcooking', icon: '/assets/icons/reddit152.png' },  // 4.6M
  { name: 'pokemon', icon: '/assets/icons/reddit153.png' },      // 4.6M
  { name: 'Steam', icon: '/assets/icons/reddit154.png' },        // 4.5M
  { name: 'unitedkingdom', icon: '/assets/icons/reddit155.png' }, // 4.5M
  { name: 'popculturechat', icon: '/assets/icons/reddit156.png' }, // 4.5M
  { name: 'unpopularopinion', icon: '/assets/icons/reddit157.png' }, // 4.4M
  { name: 'HomeImprovement', icon: '/assets/icons/reddit158.png' }, // 4.4M
  { name: 'marvelstudios', icon: '/assets/icons/reddit159.png' }, // 4.4M
  { name: 'Eyebleach', icon: '/assets/icons/reddit160.png' },    // 4.4M
  { name: 'SkincareAddiction', icon: '/assets/icons/reddit161.png' }, // 4.4M
  { name: 'Entrepreneur', icon: '/assets/icons/reddit162.png' }, // 4.3M
  { name: 'scifi', icon: '/assets/icons/reddit163.png' },        // 4.3M
  { name: 'careerguidance', icon: '/assets/icons/reddit164.png' }, // 4.3M
  { name: 'Daytrading', icon: '/assets/icons/reddit165.png' },   // 4.3M
  { name: 'homeautomation', icon: '/assets/icons/reddit166.png' }, // 4.3M
  { name: 'bodyweightfitness', icon: '/assets/icons/reddit167.png' }, // 4.3M
  { name: 'psychology', icon: '/assets/icons/reddit168.png' },   // 4.2M
  { name: 'Cooking', icon: '/assets/icons/reddit169.png' },      // 4.2M
  { name: 'hardware', icon: '/assets/icons/reddit170.png' },     // 4.2M
  { name: 'woahdude', icon: '/assets/icons/reddit171.png' },     // 4.2M
  { name: 'solotravel', icon: '/assets/icons/reddit172.png' },   // 4.2M
  { name: 'learnprogramming', icon: '/assets/icons/reddit173.png' }, // 4.2M
  { name: 'CFB', icon: '/assets/icons/reddit174.png' },          // 4.1M
  { name: 'MovieDetails', icon: '/assets/icons/reddit175.png' }, // 4.1M
  { name: 'MaliciousCompliance', icon: '/assets/icons/reddit176.png' }, // 4.1M
  { name: 'ProgrammerHumor', icon: '/assets/icons/reddit177.png' }, // 4.1M
  { name: 'MyPeopleNeedMe', icon: '/assets/icons/reddit178.png' }, // 4.1M
  { name: 'IdiotsInCars', icon: '/assets/icons/reddit179.png' }, // 4.1M
  { name: 'iphone', icon: '/assets/icons/reddit180.png' },       // 4.1M
  { name: 'Fauxmoi', icon: '/assets/icons/reddit181.png' },      // 4.1M
  { name: 'marvelmemes', icon: '/assets/icons/reddit182.png' },  // 4.1M
  { name: 'Design', icon: '/assets/icons/reddit183.png' },       // 4.1M
  { name: 'loseit', icon: '/assets/icons/reddit184.png' },       // 4M
  { name: 'Hair', icon: '/assets/icons/reddit185.png' },         // 4M
  { name: 'DnD', icon: '/assets/icons/reddit186.png' },          // 4M
  { name: 'HighQualityGifs', icon: '/assets/icons/reddit187.png' }, // 4M
  { name: 'spaceporn', icon: '/assets/icons/reddit188.png' },    // 3.9M
  { name: 'comicbooks', icon: '/assets/icons/reddit189.png' },   // 3.9M
  { name: 'reactiongifs', icon: '/assets/icons/reddit190.png' }, // 3.9M
  { name: 'StarWars', icon: '/assets/icons/reddit191.png' },     // 3.9M
  { name: 'Eldenring', icon: '/assets/icons/reddit192.png' },    // 3.9M
  { name: 'compsci', icon: '/assets/icons/reddit193.png' },      // 3.8M
  { name: 'keto', icon: '/assets/icons/reddit194.png' },         // 3.8M
  { name: 'ExpectationVsReality', icon: '/assets/icons/reddit195.png' }, // 3.8M
  { name: 'ThriftStoreHauls', icon: '/assets/icons/reddit196.png' }, // 3.8M
  { name: 'roadtrip', icon: '/assets/icons/reddit197.png' },     // 3.8M
  { name: 'painting', icon: '/assets/icons/reddit198.png' },     // 3.8M
  { name: 'standupshots', icon: '/assets/icons/reddit199.png' }, // 3.8M
  { name: 'running', icon: '/assets/icons/reddit200.png' },      // 3.8M
  { name: 'changemyview', icon: '/assets/icons/reddit201.png' }, // 3.8M
  { name: 'Fantasy', icon: '/assets/icons/reddit202.png' },      // 3.7M
  { name: 'pcgaming', icon: '/assets/icons/reddit203.png' },     // 3.7M
  { name: 'DiWHY', icon: '/assets/icons/reddit204.png' },        // 3.7M
  { name: 'podcasts', icon: '/assets/icons/reddit205.png' },     // 3.7M
  { name: 'motorcycles', icon: '/assets/icons/reddit206.png' },  // 3.7M
  { name: '15minutefood', icon: '/assets/icons/reddit207.png' }, // 3.6M
  { name: 'PrequelMemes', icon: '/assets/icons/reddit208.png' }, // 3.6M
  { name: 'maybemaybemaybe', icon: '/assets/icons/reddit209.png' }, // 3.6M
  { name: 'WeAreTheMusicMakers', icon: '/assets/icons/reddit210.png' }, // 3.6M
  { name: 'math', icon: '/assets/icons/reddit211.png' },         // 3.6M
  { name: 'productivity', icon: '/assets/icons/reddit212.png' }, // 3.5M
  { name: 'TaylorSwift', icon: '/assets/icons/reddit213.png' },  // 3.5M
  { name: 'kpop', icon: '/assets/icons/reddit214.png' },         // 3.5M
  { name: 'ethereum', icon: '/assets/icons/reddit215.png' },     // 3.5M
  { name: 'HolUp', icon: '/assets/icons/reddit216.png' },        // 3.5M
  { name: 'recipes', icon: '/assets/icons/reddit217.png' },      // 3.5M
  { name: 'Nails', icon: '/assets/icons/reddit218.png' },        // 3.5M
  { name: 'Baking', icon: '/assets/icons/reddit219.png' },       // 3.5M
  { name: 'chemistry', icon: '/assets/icons/reddit220.png' },    // 3.4M
  { name: 'sciencememes', icon: '/assets/icons/reddit221.png' }, // 3.4M
  { name: 'singularity', icon: '/assets/icons/reddit222.png' },  // 3.4M
  { name: 'OutOfTheLoop', icon: '/assets/icons/reddit223.png' }, // 3.4M
  { name: 'oddlyspecific', icon: '/assets/icons/reddit224.png' }, // 3.4M
  { name: 'gameofthrones', icon: '/assets/icons/reddit225.png' }, // 3.4M
  { name: 'spacex', icon: '/assets/icons/reddit226.png' },       // 3.4M
  { name: 'MMA', icon: '/assets/icons/reddit227.png' },          // 3.4M
  { name: 'DigitalPainting', icon: '/assets/icons/reddit228.png' }, // 3.4M
  { name: 'Games', icon: '/assets/icons/reddit229.png' },        // 3.3M
  { name: 'indieheads', icon: '/assets/icons/reddit230.png' },   // 3.3M
  { name: 'Genshin_Impact', icon: '/assets/icons/reddit231.png' }, // 3.3M
  { name: 'Health', icon: '/assets/icons/reddit232.png' },       // 3.3M
  { name: 'howto', icon: '/assets/icons/reddit233.png' },        // 3.3M
  { name: 'HistoryPorn', icon: '/assets/icons/reddit234.png' },  // 3.3M
  { name: 'DunderMifflin', icon: '/assets/icons/reddit235.png' }, // 3.3M
  { name: 'homestead', icon: '/assets/icons/reddit236.png' },    // 3.3M
  { name: 'teslamotors', icon: '/assets/icons/reddit237.png' },  // 3.3M
  { name: 'DestinyTheGame', icon: '/assets/icons/reddit238.png' }, // 3.3M
  { name: 'GifRecipes', icon: '/assets/icons/reddit239.png' },   // 3.3M
  { name: 'offmychest', icon: '/assets/icons/reddit240.png' },   // 3.3M
  { name: 'google', icon: '/assets/icons/reddit241.png' },       // 3.3M
  { name: 'fantasyfootball', icon: '/assets/icons/reddit242.png' }, // 3.3M
  { name: 'RelationshipMemes', icon: '/assets/icons/reddit243.png' }, // 3.2M
  { name: 'HealthyFood', icon: '/assets/icons/reddit244.png' },  // 3.2M
  { name: 'MinecraftMemes', icon: '/assets/icons/reddit245.png' }, // 3.2M
  { name: 'JapanTravel', icon: '/assets/icons/reddit246.png' },  // 3.2M
  { name: 'Meditation', icon: '/assets/icons/reddit247.png' },   // 3.2M
  { name: 'raspberry_pi', icon: '/assets/icons/reddit248.png' }, // 3.2M
  { name: 'ArtefactPorn', icon: '/assets/icons/reddit249.png' }  // 3.2M
];