# AID 2.0 – teknisk dokumentation

**AID 2.0** har skapats av Alexander Hall på uppdrag av [AID Solutions Väst AB](http://www.aid.se). En driftsatt förhandsversion av webbplatsen ligger temporärt uppe på [http://aid.alxlabs.se](http://aid.alxlabs.se).

### INNEHÅLLSFÖRTECKNING
- [1. Installationsanvisningar](#1-installationsanvisningar)
    - [1.1. Förhandskrav](#11-f%C3%B6rhandskrav)
    - [1.2. Klona repositoriet](#12-klona-repositoriet)
    - [1.3. Installera Middleman + gems](#13-installera-middleman--gems)
    - [1.4. Starta upp lokal server](#14-starta-upp-lokal-server)
- [2. Middleman](#2-middleman)
- [3. Struktur, AID 2.0](#3-struktur-aid-20)
    - [3.1. Gemfile](#31-gemfile)
    - [3.2. Config.rb](#32-configrb)
    - [3.3. Data](#33-data)
    - [3.4. Source](#34-source)
    - [3.5. Templates](#35-templates)
    - [3.6. Partials](#36-partials)
    - [3.7. Assets](#37-assets)
    - [3.8. Layouts](#38-layouts)
    - [3.9. PHP](#39-php)
- [4. Deployment/driftsättning](#4-deployment--drifts%C3%A4ttning)
- [5. Övrigt](#5-%C3%96vrigt)

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


## 2. Middleman

**AID 2.0** har skapats med hjälp av [Middleman](http://middlemanapp.com) – en s.k. *Static Site Generator*, byggd i språket Ruby.

Arbetsflödet går i korta drag ut på att du utvecklar dina webbsidor lokalt, och sedan kompilerar dessa till rena, statiska HTML-/CSS- och JavaScript-filer *innan* de driftsätts på servern.

Mer utförlig dokumentation för Middleman finns tillgänglig på [den officiella webbplatsen](http://middlemanapp.com). De tre kommandon som framförallt är nödvändiga att känna till vid fortsatt utveckling av **AID 2.0** är dessa:

- `bundle exec middleman` - startar upp en lokal server (`http://localhost:4567`), med en *live preview* av webbplatsen.

- `bundle exec middleman build` - kompilerar webbplatsen till statiska HTML-/CSS- och JavaScript-filer (läggs till roten i mappen `build`).

- `bundle exec middleman deploy` - kompilerar och driftsätter webbplatsen på angiven server.

**KOMMENTAR:** Inställningarna är nu satta så att *build*-kommandot även körs när *deploy*-kommandot körs, vilket innebär att `bundle exec middleman build` egentligen inte behöver köras separat.

## 3. Struktur, AID 2.0

Detta stycke beskriver webbplatsens övergripande struktur och funktionalitet. I respektive understycke finns mer utförlig information om de olika delarna, med fokus på de aspekter som är särskilt relevanta för arbete med **AID 2.0**.


```

    AID-2.0/
    +-- Gemfile                     --> se beskrivning, stycke 3.1
    +-- config.rb                   --> se beskrivning, stycke 3.2
    +-- data                        --> se beskrivning, stycke 3.3
        +-- medarbetare
        |   +-- [...]
        +-- resurser
        |   +-- [...]
    +-- source                      --> se beskrivning, stycke 3.4
        +-- index.html.erb          --> se beskrivning, stycke 3.5
        +-- _partials               --> se beskrivning, stycke 3.6
        |   +-- [...]
        +-- assets                  --> se beskrivning, stycke 3.7
        |   +-- files
        |   +-- images
        |   +-- javascripts
        |   |   +-- app.js
        |   +-- stylesheets
        |   |   +-- _settings.scss
        |   |   +-- app.css.scss
        +-- bower_components
        +-- hosting
        |   +-- index.html.erb
        |   +-- [...]
        +-- layouts                 --> se beskrivning, stycke 3.8
        |   +-- [...]
        +-- om-oss
        |   +-- index.html.erb
        |   +-- [...]
        +-- php                     --> se beskrivning, stycke 3.9
        +-- produkter
        |   +-- index.html.erb
        |   +-- [...]
        +-- resurser
        |   +-- index.html.erb
        |   +-- [...]
        +-- tjanster
        |   +-- index.html.erb
        |   +-- [...]

```

En detaljerad *sitemap* som visar hur webbplatsens struktur kommer att se ut efter kompilering, kan närsomhelst nås via:

```
    http://localhost:4567/__middleman/sitemap
```

### 3.1. Gemfile
Här listas de RubyGems som inkluderas (s.k. dependencies) i samband med att kommandot `bundle install` körs.

De gems som för närvarande används för **AID 2.0** är:

```

    gem "middleman"                                         --> Middleman
    gem "middleman-livereload"                              --> Live-reloading plugin
    gem 'middleman-autoprefixer'                            --> Lägger till "vendor prefixes" till CSS-filer
    gem "wdm"                                               --> för snabbare hantering av filändringar på Windows"
    gem "tzinfo-data"                                       --> stöd för tidszoner på Windows
    gem "ruby18_source_location"                            --> "Cross-templating language block fix for Ruby 1.8"
    gem "middleman-deploy"                                  --> Deployment via rsync, ftp, sftp, eller git

```

Läs mer om hur Gemfiles fungerar [här](http://bundler.io/v1.3/gemfile.html).

### 3.2. Config.rb
Detta är Middlemans konfigurationsfil. Här anges bland annat:

- Sökvägar som ska användas till *assets*, *partials*, etc.
- Eventuella konfigurationer för hur sidan ska kompileras.
- Helpers – dvs. hjälpmetoder som kan användas för hela applikationen.
- Vilka layoutfiler som skall användas för olika sidor.

Särskilt relevanta konfigurationsinställningar för **AID 2.0** (*och som därmed helst inte bör ändras*) är:

- `activate :directory_indexes` Skapar snyggare URL:er genom att se till att filändelser (.html) inte behöver skrivas ut.
- Helper-metoden `nav_link_to`. Anger vilken sida som är aktiv i huvudmenyn.
- Särskilt definierade sökvägar för "assets".
- Dynamisk inhämtning av Bower-komponenter (nödvändiga för ramverket Zurb Foundation)

Mer detaljerad information om aktuell konfiguration ges via:

```
    http://localhost:4567/__middleman/config/
```


### 3.3. Data
Middleman kan extrahera data från filer i formaten `.yml`, `.yaml` eller `.json`. De YAML- och JSON-filer som ska användas ligger alltid i mappen `data`.

YAML och JSON kan även anges direkt i template-filer (se stycke 3.5) med hjälp av *front matter*. Front matters syntax för YAML ser ut som följer:

```

    ---
    title: "Hello World"
    my_list:
        - one
        - two
        - three
    ---

    <%= current_page.title %>
    <% current_page.data.my_list.each do |f| %>
        <%= f %>
    <% end %>


```
För JSON används istället `;;;` för att markera ut front matter:

```

    ;;;
    "title": "Hello World",
    "my_list": [
      "one",
      "two",
      "three"
    ]
    ;;;

```

Vid inhämtning av data från filer i mappen `data` används följande syntaxformat (i template-filerna):


```
    <%= data.foldername.filename.attribute %>
```


**KOMMENTAR:** I nuläget används både separata YAML-filer och front matter. I mappen `data` finns YAML-filer innehållande information om medarbetare samt information om resurser (dokument, manualer och applikationer). Strukturering av denna data kommer med största sannolikhet att ses över och modifieras något i takt med att mer innehåll tillkommer och webbplatsen växer.

### 3.4. Source
Mappen `source` innehåller alla webbplatsens källfiler, dvs de filer som senare kompileras/genereras, inklusive JavaScript-filer, CSS och bilder.

### 3.5. Templates
Middleman har inbyggt stöd för ERb, Haml, Sass, Scss och CoffeeScript. [Flera andra template-språk kan aktiveras](https://github.com/rtomayko/tilt/) genom att installera separata RubyGems.

Templatespråket ERb (Embedded Ruby) används som default. ERb ser ut precis som HTML, men tillåter användning av variabler, metodanrop, loopar och if-satser, m.m.

Ett flertal s.k. [template helpers](http://middlemanapp.com/basics/helpers/) – metoder som används för att förenkla vanligt återkommande HTML-relaterade scenarion – finns tillgängliga. Dessa baseras på ramverket Padrino och finns detaljerat dokumenterade på [Padrinos webbplats](http://www.padrinorb.com/guides/application-helpers).


### 3.6. Partials

Med hjälp av *partials* kan innehåll återanvändas på flera sidor, vilket minskar onödig duplicering av kod. Partials kan användas både i templates och i *layouts* (se stycke 3.7).

Namngivning av partials-filer ska alltid inledas med ett understreck och avslutas med filändelse för aktuellt templatespråk:
```
    _my-partial.html.erb
```

Följande syntax används för att inkludera en partial i en ERb-template eller layout:
```
    <%= partial "my-partial" %>
```

Lokala variabler kan också skickas med vid anrop av partials:

```
    <%= partial(:my-partial, :locals => { :text => "My number", :number => 42 }) %>
```

I partial-filen:

```
    <p><%= "#{text}" is "#{number}" %></p>
```


Alla partials som används i **AID 2.0** ligger i mappen `source/_partials`:

```

    _contact-form.html.erb                  --> Kontaktformulär startsida
    _domain-form.html.erb                   --> Domänsökning startsida
    _index-icon-list.html.erb               --> Ikoner/puffar startsida
    _index-splash-curtain.html.erb          --> Splash/"curtain" startsida
    _left-canvas-menu.html.erb              --> Kontaktuppgifter + info om AID (vänstermeny)
    _page-start.html.erb
    _page-end.html.erb
    _right-canvas-menu.html.erb             -->  meny (högermeny)
    _team-nav.html.erb                      --> Navigation mellan medarbetare
    _top-menu.html.erb                      --> Huvudmeny (toppmeny)

```

Mer utförlig dokumentation av partials finns [här](http://www.padrinorb.com/api/Padrino/Helpers/RenderHelpers.html).


### 3.7. Assets

I mappen `assets` ligger JavaScript-filer, CSS-filer, bilder och resursfiler (dvs. nedladdningsbara filer och dokument).

Middleman använder [Sprockets](https://github.com/sstephenson/sprockets), ett verktyg för att inkludera tredjeparts-kod och hantera *dependencies*.

Sprockets tillåter (bland annat) användning av metoden *require* inuti filer av typen `.js` eller `.coffee`. Denna metod används för att hämta in innehåll från externa filer i projektet eller från separata gems.

Exempel på hur detta används i **AID 2.0** kan ses i filen `assets/javascripts/all.js`:
```

    //= require jquery/dist/jquery
    //= require foundation/js/foundation.min
    //= require_tree .

```

### 3.8. Layouts
*Layouts* fungerar ungefär som mallar med HTML-kod som kan delas av flera template-filer. Till skillnad från exempelvis PHP (där man ofta inkluderar kod ungefär på samma sätt som partials fungerar i Middleman), kan man i Ruby och Middleman även skapa layout-filer med "generell" HTML-kod – vilka sedan "hämtar in" innehållet från individuella template-filer genom att anropa metoden `yield`.

En layout-fil innehåller alltså både delat innehåll och ett `yield`-anrop där template-filernas innehåll placeras:

```
    <html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <%= yield %>
    </body>
    </html>

```

Till skillnad från templates ska layouts inte renderas till HTML i samband med kompilering. Därför utelämnas filändelsen `.html` vid namngivning av layouts, utan använder istället enbart `.erb`-ändelsen (`layout.erb`).

I **AID 2.0** används i nuläget enbart en generell/default layout-fil (`layout.erb`), men på sikt kommer förmodligen fler olika typer av layouts att skapas för olika typer av innehåll. Vilka layouts som ska användas för enskilda templates anges antingen i `config.rb`:

```
    page "/login.html", :layout => "admin"
```

eller direkt i template-filerna via front matter:

```
    ---
    layout: admin
    ---
```


### 3.9. PHP
Middleman har inget inbyggt stöd för rendering av PHP. De filer som Middleman inte kan rendera (dvs. de med filändelser som inte tillhör tolkningsbara templatespråk) kopieras helt enkelt bara rakt av i samband med kompilering. En `.php`-fil fortsätter med andra ord vara en `.php`-fil även efter kompilering.

**AID 2.0** innehåller ett antal kontaktformulär som använder PHP, och alla `.php`-filer (som alltså enbart "fungerar" på en server med stöd för detta) läggs i mappen `source/php`.


## 4. Deployment / driftsättning
**AID 2.0** använder ett RubyGem som heter [middleman-deploy](https://github.com/karlfreeman/middleman-deploy) för deployment/driftsättning. För att kompilera och driftsätta **AID 2.0** räcker det att köra kommandot:

```
    bundle exec middleman deploy
```

Inställningarna är nu alltså satta så att `bundle exec middleman build` *inte* behöver köras separat. Konfiguration för *middleman-deploy* anges i `config.rb`:

```

    activate :deploy do |deploy|
        deploy.method   = :ftp
        deploy.host     = "ftp.xxx.se"
        deploy.path     = "/path/folder"
        deploy.user     = "xxx"
        deploy.password = "xxx"
        deploy.build_before = true # default: false
    end

```

**KOMMENTAR:** Nuvarande inställningar för driftsättning är endast temporära. Deployment/driftsättning kommer framöver att ske via *git* istället för FTP, och ska kopplas till produktionsserver tillhörande AID Solutions Väst.


## 5. Övrigt
- kommer att använda PROSE.IO



TESTER:

- karta
- domän
- splash curtain
- deployment
