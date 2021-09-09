# frozen_string_literal: true
source "https://rubygems.org"

# github-pages gem
require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)
gem 'github-pages', versions['github-pages']
gem 'faraday'
gem 'faraday_middleware'

group :jekyll_plugins do
  gem 'hawkins'
end
