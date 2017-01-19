---
layout: page
title: Staff
order: 30
---

Who's minding these worldgates anyway? Look no further! Below are the people who plan and run the convention. (Interested in joining us? [Check here for details.]({{site.baseurl}}/badges/volunteering))

{% for section in site.data.staff %}
## {{section.section}}
  {% for staff_member in section.staff %}
- **{{ staff_member.name }}**, {{ staff_member.title }}{% endfor %}
{% endfor %}
