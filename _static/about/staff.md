---
layout: page
title: CrossingsCon Staff
order: 40
---

Who's minding these worldgates anyway? Here's who does what at CrossingsCon.

{% if site.data.jobs %}

Interested in joining us? [Click here to see our open positions.]({{site.baseurl}}/volunteer)

{% endif %}

{% for section in site.data.staff %}

  <section class="staff-section">
    <h3>{{section.section}}</h3>

    <div class="staff-section-people">
      {% for person in section.staff %}
        <div class="staff-card">
          <div class="staff-card-heading">
            {% if person.image %}
              <img class="image" src="{{person.image}}">
            {% else %}
              <img class="image" src="/images/crossroads.svg" style="padding: 1em;">
            {% endif %}

            <p class="name-pronouns">
              <span class="name">{{person.name}}</span>
              {% if person.pronouns %}
                <span class="pronouns">{{person.pronouns}}</span>
              {% endif %}
            </p>
          </div>

          <div class="staff-card-body">
            <p class="title">{{person.title}}</p>

            {% if person.specialty %}
              <p>Wizardly specialty: {{person.specialty}}</p>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>

  </section>
{% endfor %}
