---
layout: page
title: Events
nav_title: Events
order: 30
published: true
---

CrossingsCon 2021 will feature a mix of panels, workshops, Q&As, lectures and more. At past conventions we've had guests of honor give exclusive readings from their upcoming works, had experts do serious academic analysis of people's favourite books, musical jam sessions, live gameplay of table-top games such as The Adventures of Baron Munchausen, and more. Many of these will be run by convention staff and feature our wonderful [guests of honor]({{ site.baseurl }}#guests-of-honor).

See below for detailed descriptions of all the different things happening at CrossingsCon 2021, or check the [schedule]({{ site.baseurl }}/events/schedule) to see when they're happening.

{% for event in site.data.schedule %}
<div class="row">
  <div class="col-12 col-md-9">
    <h5 class="mt-3 mt-md-0">{{ event.name }}</h5>
    <i>{{ event.startTime | date: "%A %B %e at %I:%M %p" }} in {{ event.location }}</i><br>
    {{ event.desc_long | markdownify }}
  </div>
</div>
{% endfor %}

<!-- but if you have an idea for an event you'd like to see or run at the convention you can [let us know via this form](https://docs.google.com/forms/d/e/1FAIpQLScJwJI5oi26cstao73CqrvL77ItQJfeTZoxsKhN64IViuPzIg/viewform), and our events team will work with you to make your idea possible.

Every day at CrossingsCon will have something different happening, check back closer to the con for hourly schedules. If you have any questions feel free to reach out at <events@crossingscon.org>. -->

<!-- Don't forget to register over at the [registration page]({{ site.baseurl }}/badges)!

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
      <p class="card-text">On Saturday, we kick it up a notch. We'll have stories, discussions, panels, and the highly-requested return of lightning talks. And there's a secret conwide event we have planned that you're going to want to come prepared for. On Saturday night, we'll play games (<i>Cards Against Errantry</i>, anyone?) and hang out until the hotel kicks us back to our rooms.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="{{site.baseurl}}/images/2019new/sunday-bridge-square.jpg" alt="Four cousins ready to go whale-watching on a boat">
    <div class="card-body">
      <h5 class="card-title">Sunday</h5>
      <p class="card-text">Even though it's the last day of the con, day three doesn't have us slowing down. We'll have even more discussions and panels, with an extra day this year we'll be able to cover even more than we have at past CrossingsCons.</p>
      <p class="card-text">At the end of the day we'll ring out CrossingsCon 2021 with closing ceremonies, and we'll finish with our post-con party (a.k.a. dead dog) somewhere nearby.</p>
    </div>
  </div>
</div> -->
