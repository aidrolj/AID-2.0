# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'http://rubygems.org'

gem "middleman"

# Live-reloading plugin
gem "middleman-livereload"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# Windows does not come with time zone data
gem "tzinfo-data", platforms: [:mswin, :mingw]

# Automatically add vendor prefixes to CSS rules in stylesheets
gem 'middleman-autoprefixer'

# Deploys a middleman built site via rsync, ftp, sftp, or git.
gem "middleman-deploy"

# Cross-templating language block fix for Ruby 1.8
platforms :mri_18 do
  gem "ruby18_source_location"
end
