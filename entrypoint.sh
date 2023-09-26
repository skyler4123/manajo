#!/bin/bash -e
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /rails/tmp/pids/server.pid

# If running the rails server then create or migrate existing database
if [ "${*}" == "./bin/rails server" ]; then
  ./bin/rails db:prepare
fi

exec "${@}"