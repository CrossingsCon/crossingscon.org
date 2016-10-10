.PHONY: setup install build start clean rebuild test

setup: install build

install:
	@echo "\033[1;34m-----> \033[1;39mInstalling dependencies...\033[0m"
	@bundle install

build:
	@echo "\033[1;34m-----> \033[1;39mBuilding site...\033[0m"
	@bundle exec jekyll build

start:
	@echo "\033[1;34m-----> \033[1;39mStarting server...\033[0m"
	@bundle exec jekyll serve

live:
	@echo "\033[1;34m-----> \033[1;39mStarting livereload server...\033[0m"
	@bundle exec jekyll liveserve

clean:
	@echo "\033[1;34m-----> \033[1;39mCleaning up...\033[0m"
	@rm -rf .jekyll-metadata
	@rm -rf .sass-cache
	@rm -rf _site

rebuild: clean build

test:
	@echo "\033[1;34m-----> \033[1;39mNo tests yet!\033[0m"
