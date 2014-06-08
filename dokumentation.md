# AID 2.0 – teknisk dokumentation

**AID 2.0** har skapats av Alexander Hall på uppdrag av [AID Solutions Väst AB](http://www.aid.se). En driftsatt förhandsversion av webbplatsen ligger temporärt uppe på [http://aid.alxlabs.se](http://aid.alxlabs.se).


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

Arbetsflödet går i korta drag ut på att du utvecklar dina webbsidor lokalt (på ett i högsta grad flexibelt och dynamiskt vis), och sedan kompilerar dessa till rena, statiska HTML-/CSS- och JavaScript-filer *innan* de driftsätts på servern.

Mer utförlig dokumentation för Middleman finns tillgänglig på [den officiella webbplatsen](http://middlemanapp.com). De tre kommandon som framförallt är nödvändiga att känna till vid fortsatt utveckling av **AID 2.0** är dessa:

- `bundle exec middleman` - startar upp en lokal server (`http://localhost:4567`), med en "live preview" av webbplatsen.

- `bundle exec middleman build` - kompilerar webbplatsen till statiska HTML-/CSS- och JavaScript-filer (läggs till roten i mappen `build`). Behöver i princip enbart köras inför driftsättning.

- `bundle exec middlman deploy` - kompilerar och driftsätter webbplatsen på angiven server. Inställningarna är nu satta så att `build` även körs vid `deploy` (vilket innebär att föregående kommando egentligen inte är nödvändigt).

## 3. Struktur, AID 2.0

Detta stycke beskriver webbplatsens övergripande struktur och funktionalitet. I respektive understycke finns mer utförlig information om de olika delarna, med fokus på de aspekter som är relevanta för arbete med **AID 2.0**.


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

En detaljerad "sitemap" som visar hur webbplatsens struktur kommer att se ut efter kompilering, kan närsomhelst nås via:

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

- Sökvägar som ska användas till "assets", "partials", etc.
- Eventuella konfigurationer för hur sidan ska kompileras.
- Helpers – dvs. hjälpmetoder som kan "återanvändas" av applikationen.
- Vilka layoutfiler som skall användas för olika sidor.

Särskilt relevanta konfigurationsinställningar för **AID 2.0** (*och som därmed helst inte bör ändras*) är:

- `activate :directory_indexes` Skapar snyggare URL:er genom att se till att filändelser (.html) inte behöver skrivas ut.
- Helper-metoden `nav_link_to`. Anger vilken sida som är aktiv i huvudmenyn.
- Särskilt definierade sökvägar för "assets".
- Dynamisk inhämtning av Bower-komponenter (nödvändiga för ramverket Zurb Foundation)

Mer detaljerad information om aktuell konfiguration kan ges via:

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

Partials are a way of sharing content across pages to avoid duplication. Partials can be used in page templates and layouts.

Partial files are prefixed with an underscore and include the templating language extension you are using.

  <%= partial "footer" %>

Dessa partials används i **AID 2.0**:

```
_contact-form.html.erb                  --> Kontaktformulär startsida
_domain-form.html.erb                   --> Domänsökning startsida
_index-icon-list.html.erb               --> Ikoner/puffar startsida
_index-splash-curtain.html.erb          --> Splash/"curtain" startsida
_left-canvas-menu.html.erb              --> Info om AID (vänstermeny)
_page-start.html.erb
_page-end.html.erb
_right-canvas-menu.html.erb             --> Full meny (högermeny)
_team-nav.html.erb                      --> Navigation mellan medarbetare
_top-menu.html.erb                      --> Huvudmeny (toppmeny)
```

### 3.7. Assets

Sprockets is a tool for managing libraries of JavaScript (and CoffeeScript) code, declaring dependency management and include 3rd-party code. At its core, Sprockets makes a require method available inside your .js and .coffee files which can pull in the contents of an external file from your project or from a 3rd party gem.

### 3.8. Layouts
Layouts allow the common HTML surrounding individual pages to be shared across all your templates. Developers coming from PHP will be used to the concept of "header" and "footer" includes which they reference at the top and bottom of every page. The Ruby world, and Middleman, take an inverse approach. The "layout" includes both the header and footer and then wraps the individual page content.

The most basic layout has some shared content and a yield call where templates will place their contents.

### 3.9. PHP




## 4. Deployment / driftsättning
Använder ett RubyGem som heter [middleman-deploy](middleman-deploy)...

FTP

(tillfälligt)

KOMMENTAR: ska ställas in för deploy med git


## 5. TODO / CMS
- kommer att använda PROSE.IO



TESTER:

- karta
- domän
- splash curtain
-
- deployment
