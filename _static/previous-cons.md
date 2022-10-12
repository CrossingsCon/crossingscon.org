---
layout: page
title: Previous Cons
nav_title: Previous Cons
order: 40
published: true
---

Every day at CrossingsCon will have something different happening. Read below for the outline of each day, and the guests of honour we've invited in the past.

<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="{{site.baseurl}}/images/2019new/panel-audience-square.jpg" alt="Attendees at a panel at CrossingsCon 2018">
    <div class="card-body">
      <h5 class="card-title">Friday</h5>
      <p class="card-text">Friday is built around saying hi to old cousins and meeting new ones! We'll introduce our Guests of Honor at opening ceremonies, play games with each other, and have a variety of panels, activities, and book signings.</p>
      <p class="card-text">We've got a lot of cool stuff on the schedule for Friday (which we'll be revealing as the year goes on) — and make sure you're well rested, because we'll be going long into the night!</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="{{site.baseurl}}/images/2019new/invitational-judging-square.jpg" alt="Emily Skrutskie and Mark Oshiro answer questions">
    <div class="card-body">
      <h5 class="card-title">Saturday</h5>
      <p class="card-text">On Saturday, we kick it up a notch. We'll have stories, discussions, panels, and the highly-requested return of lightning talks. On Saturday night, we'll play games (<i>Cards Against Errantry</i>, anyone?) and hang out until the hotel kicks us back to our rooms.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="{{site.baseurl}}/images/2019new/sunday-bridge-square.jpg" alt="Four cousins ready to go whale-watching on a boat">
    <div class="card-body">
      <h5 class="card-title">Sunday</h5>
      <p class="card-text">Even though it's the last day of the con, day three doesn't have us slowing down. We'll have even more discussions and panels, with an extra day this year we'll be able to cover even more than we have at past CrossingsCons.</p>
      <p class="card-text">At the end of the day we'll ring out CrossingsCon 2022 with closing ceremonies, and we'll finish with our post-con party (a.k.a. dead dog) somewhere nearby.</p>
    </div>
  </div>
</div>

<br>

## Previous Guests

<!-- CrossingsCon is proud to welcome our guests of honor for 2022!

If you're not familiar with the works of some of our guests, our staff put together a guide on where to start with each of their respective bibliographies, including some reviews. Take a look at it <a href="{{ site.baseurl }}/pdfs/where_to_start_guests.pdf">here!</a> -->

{% for guest in site.data.previous_guests %}
<div class="row py-3">
  <div class="col-12 col-md-3">
    <img src="{{ site.baseurl }}/images/guests/{{ guest.image }}" alt="A picture of {{ guest.name }}">
  </div>
  <div class="col-12 col-md-9">
    <h5 class="mt-3 mt-md-0">{{ guest.name }}</h5>
    {{ guest.bio | markdownify }}
  </div>
</div>
{% endfor %}

## History of the Con

In 2013, [a fateful chain of posts](https://dispatchrabbi.tumblr.com/post/52352879845/woven-from-sapphire-fiber-robotamputee) was made on Tumblr. Determined to make the words into reality, a group of Young Wizards fans got together and planned the first CrossingsCon. We arranged an Indiegogo fund drive for start-up money and got almost twice as much as we asked for! Turns out, a lot of other cousins out there wanted to see CrossingsCon happen too. With that, we set our sights on Manhattan…

### 2016: Newark, NJ

<img src="{{ site.baseurl }}/images/carousel/2016-audience.jpg" class="img-fluid" alt="Attendees laughing during a panel">

We held the first CrossingsCon on June 24-26, 2016 in Newark, NJ with 125 cousins attending, 9 CrossingsCon staff minding the gates, and special guests Mark Oshiro, Seanan McGuire, and (via Skype) Diane Duane.

We spent the first two days telling stories, getting to know each other, and playing games at the Courtyard Marriott in Newark. On Sunday, 90 of us ventured into Manhattan to tour the city and see landmarks from _So You Want To Be A Wizard_. We visited Rockefeller Plaza, side-eyed the CBS building, had a scavenger hunt in Grand Central Terminal, explored the New York Public Library, and checked every bathroom in the American Museum of Natural History for wormholes to other planets.

[Take a look at some of the highlights][facebook-album-2016], or [watch some of our 2016 panels][youtube-playlist-2016].

### 2017: Long Beach, CA

<img src="{{ site.baseurl }}/images/carousel/hanging-with-mark-and-emily.jpg" class="img-fluid" alt="Several attendees chatting with Mark Oshiro and Emily Skrutskie">

After having such a great first year in 2016, we couldn’t wait to see all our cousins again! We held a submarine intervention on August 4-6, 2017 in Long Beach, CA with special guests Mark Oshiro and Emily Skrutskie, 11 CrossingsCon Staff, and 55 cousins!
We had two days of panels, games, and puns at the Courtyard Marriott in Downtown Long Beach. Then, on Sunday, we walked to the Aquarium of the Pacific to spend the day conversing with our aquatic cousins! 40 of us also took an afternoon cruise and got to exchange spelling tips with the local whale and dolphin wizards!
[Take a look at some of the highlights][facebook-album-2017].

<!-- ## 2018: Summer Meetups
After the 2017 convention, the CrossingsCon staff made the decision to hold CrossingsCon every other year in order to make the convention better and more accessible to attendees. However, two years is a long time to go without seeing your cousins, so we’re hosting meetups across the continental U.S. over the course of the summer!
Find more information [here][meetup-post]. -->

### 2019: Montréal, Canada

<img src="{{ site.baseurl }}/images/2019new/baron1-wide.jpg" class="img-fluid" alt="Attendees on their walk to the aquarium">

The CrossingsCon staff made the decision to hold CrossingsCon every other year after the 2017 convention. After a long wait, CrossingsCon 2019 was held in beautiful Montréal, Canada on June 21-23, with more than 100 attendees, 12 CrossingsCon Staff, as well as special guests Mark Oshiro, Kate Howells, and Diane Duane (in person!)! 2019 was an action-packed weekend of panels, stories and much fun. On sunday we took a tour of Montréal's biodome, visiting Filif's extended cousins as well as seeing a show at the planetarium.

### 2021: Slipping Sideways

[Todo: blurb]

### 2022: Montréal, Canada

[Todo: blurb]

[wizcon-post]: {{ site.baseurl }}/images/the-original-post.png
[youtube-playlist-2016]: https://www.youtube.com/playlist?list=PL5nkrJ3R5UQxlANmJm7ErjBxrDxGdYwwT
[facebook-album-2016]: https://www.facebook.com/pg/CrossingsCon/photos/?tab=album&album_id=1068827729837141
[facebook-album-2017]: https://www.facebook.com/pg/CrossingsCon/photos/?tab=album&album_id=1478625335524043
[meetup-post]: http://blog.crossingscon.org/post/174133728746/well-met-up-on-the-common-journey



