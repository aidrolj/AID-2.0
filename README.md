# AID 2.0

**AID 2.0** har skapats av Alexander Hall på uppdrag av [AID Solutions Väst AB](http://www.aid.se). Mer innehåll (text och bilder) behöver fortfarande produceras, och en skarp version har därför ännu inte lanserats. Beräknat lanseringsdatum är månaddskiftet juni/juli 2014. En driftsatt förhandsversion av webbplatsen ligger temporärt uppe på [http://aid.alxlabs.se](http://aid.alxlabs.se).

» [Teknisk dokumentation](https://github.com/alexicon79/AID-2.0/blob/master/DOKUMENTATION/1DV42E-teknisk-dokumentation.md)

» [Visionsdokument](https://github.com/alexicon79/AID-2.0/blob/master/DOKUMENTATION/1DV42E-vision-ah222tz.pdf)

» [Testdokumentation / testrapport](https://github.com/alexicon79/AID-2.0/blob/master/DOKUMENTATION/1DV42E-testdokumentation-ah222tz.pdf)

- - - -

## 1. Installationsanvisningar

### 1.1. Förhandskrav

- [Ruby 1.9.3+](https://www.ruby-lang.org/en/downloads/)
- [RubyGems](https://rubygems.org/pages/download)

Dessa är vanligtvis förinstallerade för Mac OS X och Linux. Windowsanvändare kan installera med hjälp av [RubyInstaller](http://rubyinstaller.org).


### 1.2. Klona repositoriet

```
    git clone https://github.com/alexicon79/AID-2.0.git
```

### 1.3. Installera Middleman + gems

Se till så att Middleman och övriga nödvändiga RubyGems installeras genom att gå till mappen `AID-2.0` och därifrån köra kommandot:

```
    bundle install
```

Tips: [RVM](http://rvm.io) är ett utmärkt verktyg för att undvika risk för versionskonflikter vid installation av gems.


### 1.4. Starta upp lokal server

Middleman bör nu vara installerat. Kör kommandot:

```
    bundle exec middleman
```

En lokal server startas upp på adressen `http://localhost:4567` med en lokal (dvs. ej kompilerad) version av **AID 2.0**.
