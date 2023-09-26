# syntax = docker/dockerfile:1

# Make sure RUBY_VERSION matches the Ruby version in .ruby-version and Gemfile
# ARG RUBY_VERSION=3.2.2
# FROM registry.docker.com/library/ruby:$RUBY_VERSION-slim as base
FROM ruby:3.2.2
WORKDIR /rails

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client graphviz imagemagick neovim git
COPY Gemfile /rails/Gemfile
COPY Gemfile.lock /rails/Gemfile.lock
RUN bundle install
COPY . .

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]