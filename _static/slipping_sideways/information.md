---
layout: page
title: Information
nav_title: Information Hub
published: true
---

Click on the headings below to show summaries of all the important information you need for CrossingsCon 2021.

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#gather">How to use Gather</a>
      </h4>
    </div>
    <div id="gather" class="panel-collapse collapse">
      <div class="panel-body">
        Since many attendees are likely unfamiliar with Gather we want to make sure everyone is able to become comfortable with the platform. There are also some tutorials on their <a href="https://support.gather.town/help/movement-and-basics">info centre</a> that go over the basics.
        <img src="/images/gather/overview-markup.jpg">
        <div>
          <br>
          Gather gives you a virtual avatar to move around a virtual 2-dimensional space. You can move your avatar with either the arrow keys or the WASD keys on your keyboard. You will automatically join voice calls with other people as you approach them within a certain radius. You can press X on your keyboard to interact with various things in the space such as embedded websites or videos.
          <br><br>
          When you load into Gather you will see a screen such as this, with several different menu options on the sides of the screen, which will be explained below.
        </div>
        <div>
          <ol>
            <li><b>Home Button</b>: </li>
            <li><b>Settings</b>: </li>
            <li><b>Build Tool</b>: Allows one to edit the Gather space. This will be disabled during the convention.</li>
            <li><b>Calendar</b>: </li>
            <li><b>Chat</b>: This tab allows one to send text chat. <br><img src="/images/gather/chat.png" style="height: 500px"></li>
            <li><b>User Directory</b>: Lists all the people in the Gather space. <br><img src="/images/gather/directory.png" style="height: 500px"></li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#accessibility">Accessibility</a>
      </h4>
    </div>
    <div id="accessibility" class="panel-collapse collapse">
      <div class="panel-body">
        Here are some tools that are recommended to make the online convention fit your needs.<br><br>
        If you require captions for auditory events, Google Chrome has a built-in live captioning feature which you can enable <a href="https://support.google.com/chrome/answer/10538231?hl=en">by following the guide here</a>. The CrossingsCon staff have tested that this works well in Gather. In addition, all of the social spaces in the virtual convention space will have sections that are explicitly intended and labelled for text-only conversations.<br><br>
        If you've got a form of colorblindness and are finding that parts of the virtual convention space are confusing because of this, we recommend browser extensions such as <a href="https://addons.mozilla.org/en-CA/firefox/addon/let-s-get-color-blind/">this one</a> for Firefox or <a href="">this one</a> for Chrome, or operating-system programs such as <a href="https://apps.apple.com/us/app/sim-daltonism/id693112260?mt=12">Sim Daltonism</a> for MacOS or Windows 10's <a href="https://support.microsoft.com/en-us/windows/use-color-filters-in-windows-10-43893e44-b8b3-2e27-1a29-b0c15ef0e5ce">color filters</a> to adjust colors to suit your needs.
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#rules">Convention Rules</a>
      </h4>
    </div>
    <div id="rules" class="panel-collapse collapse">
      <div class="panel-body">
        The full list of convention rules can be found on the main <a href="/events/rules/">rules page</a> and every attendee is expected to be familiar with them.
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#schedule">Convention Schedule</a>
      </h4>
    </div>
    <div id="schedule" class="panel-collapse collapse">
      <div class="panel-body">
        You can add the con schedule to your <a href="https://calendar.google.com/calendar/embed?src=crossingscon.org_4tejsp4u06ns5etvt5lbm243f8%40group.calendar.google.com&ctz=America%2FToronto">Google Calendar</a> or <a href="https://calendar.google.com/calendar/ical/crossingscon.org_4tejsp4u06ns5etvt5lbm243f8%40group.calendar.google.com/public/basic.ics">your calendar app of choice</a>.
  <iframe src="https://calendar.google.com/calendar/embed?src=crossingscon.org_4tejsp4u06ns5etvt5lbm243f8%40group.calendar.google.com&ctz=America%2FToronto&dates=20210801%2F20210808&mode=AGENDA" style="border: 0; margin-top: 1em;" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#events">Event Descriptions</a>
      </h4>
    </div>
    <div id="events" class="panel-collapse collapse">
      <div class="panel-body">
        {% for event in site.data.schedule %}
        <div class="row pb-3">
          <div class="col">
            <h4 class="mt-3 mt-md-0">{{ event.name }} | {{ event.startTime | date: "%A %B %e at %I:%M %p" }} in {{ event.location }}</h4>
            {{ event.desc_long | markdownify }}
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#cc22">CrossingsCon 2022</a>
      </h4>
    </div>
    <div id="cc22" class="panel-collapse collapse">
      <div class="panel-body">
        The next iteration of the convention will be held from August 5th to 7th 2022 in Montreal, Canada! Early bird badges are available
      </div>
    </div>
  </div>
</div>
