## Installationsanvisningar

### Förhandskrav

- [Ruby 1.9.3+](https://www.ruby-lang.org/en/downloads/)
- [RubyGems](https://rubygems.org/pages/download)

Dessa är vanligtvis förinstallerade för Mac OS X och Linux. Windowsanvändare kan installera med hjälp av [RubyInstaller](http://rubyinstaller.org).


### 1. Klona repositoriet

```
git clone https://github.com/alexicon79/AID-2.0.git
```


### 2. Installera Middleman

```
gem install middleman
```

### 3. Installera gems

Se till så att alla nödvändiga gems installeras, genom att gå till mappen där applikationen ligger och köra kommandot:

```
bundle install
```

Tips: [RVM](http://rvm.io) är ett utmärkt verktyg för att undvika risk för versionskonflikter vid installation av gems.

### 4. Starta upp lokal server

```
bundle exec middleman
```

En lokal server (som förhandsvisar webbplatsen) körs nu på `http://localhost:4567`
