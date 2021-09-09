#!/usr/bin/env ruby

require "net/http"
require "faraday"
require "faraday_middleware"
require "csv"
require "nokogiri"

POST_LIST_ID = "1lEG1ZPwPEqmjIk3jP02PTnvqOe4zgk4n3_er6Fkttko"
FILE_LIST_ADDR = "https://docs.google.com/spreadsheets/d/#{POST_LIST_ID}/export?format=csv"

def fetch_document(uri)
  conn = Faraday.new(:url => uri) do |faraday|
    faraday.use FaradayMiddleware::FollowRedirects
  end

  conn.get
end

def cleanup(node)
  node.children.map do |child|
    child.remove_attribute("class")
    child.remove_attribute("id")
    cleanup(child)
  end

  node
end

def build_page_for(page)
  header = %{---
layout: page
title: #{page["name"]}
nav_title: #{page["name"]}
published: true
---
}

  embed_url = "https://docs.google.com/document/d/#{page["id"]}/pub?embedded=true"
  page_resp = fetch_document(URI(embed_url))
  if !page_resp.success?
    STDERR.puts "Could not fetch #{page["name"]}, status #{page_resp.status}"
    return
  end

  dom = Nokogiri::HTML(page_resp.body)
  node = dom.at('body')
  body = cleanup(node).inner_html

  return "#{header}\n#{body}"
end

def main
  `mkdir -p _generated`
  `rm -r _generated/*`

  csv_resp = fetch_document(URI(FILE_LIST_ADDR))
  pages = CSV.parse(csv_resp.body, headers: true).map(&:to_h)

  pages.each do |page|
    next unless page["type"] == "application/vnd.google-apps.document"
    page_body = build_page_for(page)

    fname = ""
    if !page["parent"].nil? && !page["parent"].empty?
      `mkdir -p _generated/#{page["parent"]}`
      fname = "_generated/#{page["parent"]}/#{page["key"]}.md"
    else
      fname = "_generated/#{page["key"]}.md"
    end

    File.write(fname, page_body)
    puts "#{fname} written"
  end
end

main()
