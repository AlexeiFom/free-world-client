import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { INews } from '../interfaces/news/inews';
import { map } from 'rxjs/operators';
import { IArticle } from '../interfaces/news/iarticle';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news = JSON.stringify({
    "status": "ok",
    "totalResults": 70,
    "articles": [
      {
        "source": {
          "id": null,
          "name": "Billboard"
        },
        "author": "Anna Chan",
        "title": "Miley Cyrus, Shakira, Justin Bieber & More to Perform at 'Global Goal: Unite for Our Future' Concert - Billboard",
        "description": "",
        "url": "https://www.billboard.com/articles/columns/pop/9406412/global-goal-unite-for-our-future-concert-lineup",
        "urlToImage": "https://static.billboard.com/files/2020/05/Miley-Cyrus-2020-Fashion-ndk-Billboard-1548-1588971221-1024x677.jpg",
        "publishedAt": "2020-06-22T05:01:00Z",
        "content": "Musicians are lending their voices to another important cause. Global Citizen and the European Commission announced on Monday (June 22) the \"Global Goal: Unite for Our Future\" Concert. The event, whi… [+1863 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Deadline"
        },
        "author": "Denise Petski",
        "title": "Justin Bieber Denies Sexual Assault Allegation; Vows To Take Legal Action - Deadline",
        "description": "Justin Bieber is adamantly denying allegations that he sexually assaulted a woman in 2014, and says he plans to take legal action. The woman, identified as Danielle, tweeted Saturday night, that the incident occurred at an Austin, Texas, hotel on March 9, 201…",
        "url": "https://deadline.com/2020/06/justin-bieber-denies-sexual-assault-allegation-legal-action-1202965595/",
        "urlToImage": "https://pmcdeadline2.files.wordpress.com/2020/06/justin-bieber.jpg?w=1000",
        "publishedAt": "2020-06-22T04:45:05Z",
        "content": "Justin Bieber is adamantly denying allegations that he sexually assaulted a woman in 2014, and says he plans to take legal action.\r\nThe woman, identified as Danielle, tweeted Saturday night, that the… [+5643 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "TMZ"
        },
        "author": "TMZ Staff",
        "title": "Ja Rule Promotes Private Party Bookings, 50 Cent Roasts Him - TMZ",
        "description": "50 Cent had some thoughts on Ja Rule making himself available for private parties.",
        "url": "https://www.tmz.com/2020/06/21/ja-rule-private-party-bookings-50-cent-roast/",
        "urlToImage": "https://imagez.tmz.com/image/27/16by9/2020/06/21/27fc1b3c8de74c8da8730067765c1cfa_xl.jpg",
        "publishedAt": "2020-06-22T04:23:22Z",
        "content": "Ja Rule has made his services widely available to the general public -- the dude's offering up private party bookings now ... something his old foe, 50 Cent, finds awfully hilarious.\r\nThe rapper made… [+1193 chars]"
      },
      {
        "source": {
          "id": "cbs-news",
          "name": "CBS News"
        },
        "author": "CBS News",
        "title": "Tom Petty: Late singer's family issues cease and desist after Trump plays \"I Won't Back Down\" at Tulsa rally - CBS News",
        "description": "\"We want to make it clear that we believe everyone is free to vote as they like, think as they like, but the Petty family doesn't stand for this.\"",
        "url": "https://www.cbsnews.com/news/tom-petty-late-singers-family-issues-cease-and-desist-after-trump-plays-i-wont-back-down-at-tulsa-rally/",
        "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2018/07/11/0c5d83db-788e-47c8-bf52-79061adb7e2a/thumbnail/1200x630/23a3977571fc6da99be6c25852bc4d8d/ap-17181461248084.jpg",
        "publishedAt": "2020-06-22T03:55:52Z",
        "content": "Tom Petty's family has issued a cease and desist notice against the Trump campaign after the late singer's 1989 hit \"I Won't Back Down\" was played at the president's Tulsa rally on Saturday. \"Trump w… [+1607 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Daily Mail"
        },
        "author": "By Harriet Alexander For Dailymail.com",
        "title": "Mountain lion captured in San Francisco is suspected of killing a kangaroo and two wallaroos in zoo - Daily Mail",
        "description": "A mountain lion cub was released into the wild on Thursday after being captured roaming the streets of downtown San Francisco. The zoo said a red kangaroo and two wallabies were killed.",
        "url": "https://www.dailymail.co.uk/news/article-8445307/Mountain-lion-captured-San-Francisco-suspected-killing-kangaroo-two-wallaroos-zoo.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2020/06/21/23/29891058-0-image-a-22_1592778380372.jpg",
        "publishedAt": "2020-06-22T03:48:58Z",
        "content": "A mountain lion cub seen roaming the streets of San Francisco has been captured and released to a nature preserve, after being suspected of killing a kangaroo and two wallaroos in the city zoo.\r\nThe … [+2834 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "YouTube"
        },
        "author": null,
        "title": "Hamilton - Official Trailer - IGN",
        "description": "The original broadway production of Hamilton is streaming exclusively on Disney+ on July 3. \"Hamilton\" is the story of America then, told by America now. Fea...",
        "url": "https://www.youtube.com/watch?v=-SAruGBTR70",
        "urlToImage": "https://i.ytimg.com/vi/-SAruGBTR70/maxresdefault.jpg",
        "publishedAt": "2020-06-22T03:48:17Z",
        "content": "The original broadway production of Hamilton is streaming exclusively on Disney+ on July 3. \r\n\"Hamilton\" is the story of America then, told by America now. Featuring a score that blends hip-hop, jazz… [+387 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Showbiz Cheat Sheet"
        },
        "author": "Trey Mangum",
        "title": "Would Pearl Return to 'RuPaul's Drag Race' for 'All Stars'? - Showbiz Cheat Sheet",
        "description": "There are a lot of RuPaul's Drag Race queens who no longer have the greatest relationship with the show and RuPaul. One of these queens is Pearl, who first appeared on the show in 2015. Despite her public feud with the RuPaul, could Pearl return to the show a…",
        "url": "https://www.cheatsheet.com/entertainment/would-pearl-return-to-rupauls-drag-race-for-all-stars.html/",
        "urlToImage": "https://www.cheatsheet.com/wp-content/uploads/2020/06/Pearl.jpg",
        "publishedAt": "2020-06-22T03:17:42Z",
        "content": "There are a lot of RuPaul’s Drag Racequeens who no longer have the greatest relationship with the show and RuPaul. One of these queens is Pearl, who first appeared on the show in 2015. Despite her pu… [+4843 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Showbiz Cheat Sheet"
        },
        "author": "Sheiresa Ngo",
        "title": "Brian Austin Green's Biggest Fear After His Split from Megan Fox - Showbiz Cheat Sheet",
        "description": "Beverly Hills 90210 star Brian Austin Green and Transformers star Megan Fox have called it quits after 10 years of marriage. Here's what Green says he's afraid of.",
        "url": "https://www.cheatsheet.com/entertainment/brian-austin-green-megan-fox-divorce.html/",
        "urlToImage": "https://www.cheatsheet.com/wp-content/uploads/2020/06/Megan-Fox-Brian-Austin-Green-2.jpg",
        "publishedAt": "2020-06-22T02:56:50Z",
        "content": "Former Beverly Hills 90210 star Brian\r\nAustin Green is adjusting to life after splitting from his wife of 10\r\nyears, Megan\r\nFox. Heres what the actor says hes afraid of after he and Fox divorce.\r\nHow… [+2718 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Vulture"
        },
        "author": "Halle Kiefer",
        "title": "Workaholics Episode Featuring Chris D’Elia As a Predator Pulled From Hulu, Prime, Comedy Central - Vulture",
        "description": "Comedy Central removed the episode, “To Friend a Predator,” from its platforms.",
        "url": "https://www.vulture.com/2020/06/workaholics-episode-with-chris-delia-pulled-off-streaming.html",
        "urlToImage": "https://pyxis.nymag.com/v1/imgs/a00/1d9/74cf3c6319f20a513fc928034302bdfdff-21-Chris-Delia.1x.rsocial.w1200.jpg",
        "publishedAt": "2020-06-22T02:16:58Z",
        "content": "Following allegations that actor and comedian Chris DElia attempted to solicit nude photos from minors online, a Workaholics episode featuring him as a pedophile attempting to groom children through … [+1555 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "Sean T. Collins",
        "title": "‘Perry Mason’ Season 1 Premiere Recap: True Detective - The New York Times",
        "description": "Matthew Rys plays the title character as a hard-luck private detective in this dark new prequel HBO series. Your father’s Perry Mason he is not.",
        "url": "https://www.nytimes.com/2020/06/21/arts/television/perry-mason-premiere-recap.html",
        "urlToImage": "https://static01.nyt.com/images/2020/06/21/arts/21perry-recap/21perry-recap-facebookJumbo.jpg",
        "publishedAt": "2020-06-22T02:13:02Z",
        "content": "Its through E.B. that Perry lands the case that kick-starts the episode, in gruesome fashion. In a sequence directed with sinister verve by the HBO mainstay Tim Van Patten (The Sopranos, Boardwalk Em… [+2402 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "TVLine"
        },
        "author": "Charlie Mason",
        "title": "Yellowstone Recap: Season 3 Episode 1 — Josh Holloway as Roarke Morris - TVLine",
        "description": "Warning: The following contains spoilers for Sunday’s Season 3 premiere of Yellowstone. If you’ve yet to watch, you might want to giddy-up, up and away. The status quo became the status “Whoa!” in Sunday’s Season 3 premiere of Yellowstone. Not only did a new …",
        "url": "https://tvline.com/2020/06/21/yellowstone-recap-season-3-episode-1-youre-the-indian-now/",
        "urlToImage": "https://pmctvline2.files.wordpress.com/2020/06/yellowstone-season-3-episode-1-kevin-costner-luke-grimes-1.jpg?w=620",
        "publishedAt": "2020-06-22T02:02:43Z",
        "content": "Warning: The following contains spoilers for Sunday’s Season 3 premiere of Yellowstone. If you’ve yet to watch, you might want to giddy-up, up and away.\r\nThe status quo became the status “Whoa!” in S… [+5981 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Showbiz Cheat Sheet"
        },
        "author": "Armando Tinoco",
        "title": "'90 Day Fiancé' Star Ashley Martson Slams Jax Taylor as 'Lying Racist' After Calling Her 'Poor White Trash' - Showbiz Cheat Sheet",
        "description": "Ashley Martson from '90 Day Fiancé' is calling on Bravo to fire Jax Taylor from 'Vanderpump Rules.' The TLC star exposed message showcasing Taylor in a negative light.",
        "url": "https://www.cheatsheet.com/entertainment/90-day-fiance-ashley-wants-jax-taylor-fired-vanderpump-rules.html/",
        "urlToImage": "https://www.cheatsheet.com/wp-content/uploads/2020/06/90dayfiance-ashleymartson-vanderpumprules-jaxtaylor.jpg",
        "publishedAt": "2020-06-22T01:16:47Z",
        "content": "Ashley Martson from 90 Day Fiancé is calling out the Vanderpump Rules star Jax Taylor. The latter was exposed by the former after she revealed private messages he sent her on Instagram. Taylor’s char… [+3245 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "AOL"
        },
        "author": "Jennifer Starks",
        "title": "D.L. Hughley tests positive for the coronavirus after collapsing on stage - AOL",
        "description": "D.L. Hughley says he has tested positive for COVID-19 after collapsing during a stand-up performance on Friday.",
        "url": "https://www.aol.com/article/entertainment/2020/06/21/dl-hughley-tests-positive-for-coronavirus-after-collapsing-on-stage/24531573/",
        "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2020-06%2F738698f0-b422-11ea-beb6-f9f916fc9603",
        "publishedAt": "2020-06-22T00:51:13Z",
        "content": "D.L. Hughley says he has tested positive for COVID-19 after collapsing during a stand-up performance on Friday. Hughley was on stage at Nashvilles Zanies comedy club for a Juneteenth benefit when, ac… [+17289 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Cut"
        },
        "author": "Claire Comstock-Gay",
        "title": "Madame Clairevoyant: Horoscopes for the Week of June 22 - The Cut",
        "description": "Neptune goes retrograde this week, and Venus’s retrograde ends.",
        "url": "http://www.thecut.com/2020/06/weekly-horoscopes-for-the-week-of-june-22-by-the-cut.html",
        "urlToImage": "https://pyxis.nymag.com/v1/imgs/288/9fa/76b7c8bf9ad50979ac2d5e0f0beab6338e-29-cancer-season-frida-kahlo.1x.rsocial.w1200.jpg",
        "publishedAt": "2020-06-22T00:30:00Z",
        "content": "On Monday night, Neptune, the planet of illusions and dreams, stations retrograde in Pisces. While Neptune is retrograde, you might find your illusions punctured, your dreamy self-deceptions displace… [+7346 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Billboard"
        },
        "author": "Ashley Iasimone",
        "title": "Kane Brown Makes a Promise 'For My Daughter' in Father's Day Performance: Watch - Billboard",
        "description": "",
        "url": "https://www.billboard.com/articles/columns/country/9406446/kane-brown-for-my-daughter-fathers-day-video",
        "urlToImage": "https://static.billboard.com/files/media/kane-brown-2019-grammys-red-carpet-billboard-1548-1024x677.jpg",
        "publishedAt": "2020-06-22T00:28:14Z",
        "content": "Kane Brown is making this Father's Day a special one for his baby girl.\r\nThe country star shared a new acoustic Vevo performance of \"For My Daughter\" on Sunday (June 21). Brown wrote the moving song … [+536 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "GMA"
        },
        "author": "Angeline Jane Bernabe",
        "title": "Duchess of Cambridge shares new photos of Prince William and kids for Father's Day - GMA",
        "description": "Kensington Palace shared new photos taken by Kate of Prince William and their three kids just in time for his birthday and Father's day.",
        "url": "https://www.goodmorningamerica.com/culture/story/duchess-cambridge-shares-photos-prince-william-kids-fathers-71375934",
        "urlToImage": "https://s.abcnews.com/images/GMA/prince-william-kids-01-gty-jef-200621_hpMain_16x9_992.jpg",
        "publishedAt": "2020-06-22T00:26:36Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Daily Mail"
        },
        "author": "By Glenn Garner For Dailymail.com",
        "title": "RHOC's Kelly Dodd defends herself as a 'woman of color' after controversial video resurfaces - Daily Mail",
        "description": "Kelly wrote in response to a follower who asked if she thinks being Mexican means she can't be racist: 'I've experienced racism personally.. I'm a woman of color and love everyone!'",
        "url": "https://www.dailymail.co.uk/tvshowbiz/article-8445451/RHOCs-Kelly-Dodd-defends-woman-color-controversial-video-resurfaces.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2020/06/22/00/29892188-0-image-a-16_1592781051758.jpg",
        "publishedAt": "2020-06-22T00:03:21Z",
        "content": "Kelly Dodd has found herself to be the latest Bravo personality in hot water, after four Vanderpump Rules stars recnetly fired.\r\nThe Real Housewives of Orange County star has recently been called out… [+2636 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "New York Times"
        },
        "author": "Robin Pogrebin",
        "title": "Black Gallerists Press Forward Despite a Market That Holds Them Back - The New York Times",
        "description": "As Art Basel opens online, African-American galleries are glaringly absent.",
        "url": "https://www.nytimes.com/2020/06/21/arts/design/art-basel-black-owned-galleries.html",
        "urlToImage": "https://static01.nyt.com/images/2020/06/22/arts/19blackgallery-basel01/19blackgallery-basel01-facebookJumbo.jpg",
        "publishedAt": "2020-06-21T23:54:16Z",
        "content": "I would hope that some of the galleries that are doing really well would seek to substantively partner with someone like me, said Lewis Long, of the Harlem-based Long Gallery, to either market the wo… [+1568 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "PINKVILLA"
        },
        "author": "Pinkvilla Desk",
        "title": "Sushant Singh Rajput's nephew bids final adieu to him; Recalls the actor's unconditional love for his mother - PINKVILLA",
        "description": "Sushant Singh Rajput passed away on 14th June leaving all of us in deep shock and heartbroken. The actor's nephew has now bid an emotional adieu to the actor through a beautiful story.",
        "url": "https://www.pinkvilla.com/entertainment/news/sushant-singh-rajputs-nephew-bids-final-adieu-him-recalls-actors-unconditional-love-his-mother-543337",
        "urlToImage": "https://www.pinkvilla.com/files/styles/fbimagesection/public/sushant_singh_rajputs_nephew_bids_final_adieu_to_him_recalls_the_actors_unconditional_love_for_his_mother_social.jpg?itok=Ivjb7RdG",
        "publishedAt": "2020-06-21T23:52:35Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "wdwnt.com"
        },
        "author": null,
        "title": "PHOTOS: First Look at Disney Magical Express Check-In Ahead of Resort Hotels Reopening at Walt Disney World - wdwnt.com",
        "description": "A first look at Disney's Magical Express station in Orlando International Airport as it begins its prepartion to reopen to guests",
        "url": "https://wdwnt.com/2020/06/photos-first-look-at-disney-magical-express-check-in-ahead-of-resort-hotels-reopening-at-walt-disney-world/",
        "urlToImage": "https://wdwnt-buzzy.s3.amazonaws.com/2020/06/disneymagicalexpressionreopen_28-1.jpg",
        "publishedAt": "2020-06-21T23:49:49Z",
        "content": "Tomorrow marks the day that select Walt Disney World Resort hotels will be reopening to Guests, with the rest of the hotels following later in the summer into early fall. In anticipation of this reop… [+2213 chars]"
      }
    ]
  })


  //newsApiUrl: 'https://newsapi.org/v2/top-headlines?category=entertainment&country=us&pageSize=20&pageSize=33&page=1&apiKey=007d843e5d784645b84de2fc336f793e';

  category: string;

  constructor(private http: HttpClient) { }

  // getAllNews(): Observable<INews[]> {
  //   debugger;
  //   let jsonData = JSON.parse(this.news);

  //   let newArray = jsonData.articles.pipe(
  //     map(x => {
  //       debugger;

  //       return
  //     })
  //   )

  //   return null;
  // }

  getAllNews(): Observable<INews> {

    //toDo dinamical artibutes
    return this.http.get<INews>(
      `${environment.newsApiUrl}/top-headlines?category=entertainment&country=us&pageSize=20&pageSize=33&page=1&apiKey=${environment.newsApiKey}`
    )
      .pipe(map(data => {
        debugger

        let articlesList = data["articles"];

        return {
          totalResults: data['totalResults'],
          category: this.category ? this.category : '',
          articles: articlesList.map(function (article: any): IArticle {
            return {
              sourceid: article.source.id,
              sourceName: article.source.name,
              title: article.title,
              description: article.description,
              author: article.author,
              urlToImage: article.urlToImage,
              publishedAt: article.publishedAt,
              content: article.content,
            };
          })
        }
      })
      )
  }
}
