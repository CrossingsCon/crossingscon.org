---
layout: page
title: Staff
---

Who's minding these worldgates anyway? Look no further! Below are the people who plan and run the convention. (Interested in joining us? Check here for details.)

{% for staff_member in site.data.staff %}
- **{{ staff_member.name }}**, {{ staff_member.title }}
{% endfor %}
