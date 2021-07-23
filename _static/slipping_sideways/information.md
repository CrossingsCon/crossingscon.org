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
        #TODO
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
