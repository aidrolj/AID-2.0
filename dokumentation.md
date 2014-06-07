# TEKNISK DOKUMENTATION

»AID.SE 2.0« har skapats av Alexander Hall.


## 1. Installationsanvisningar

### Förhandskrav

- [Ruby 1.9.3+](https://www.ruby-lang.org/en/downloads/)
- [RubyGems](https://rubygems.org/pages/download)

Dessa är vanligtvis förinstallerade för Mac OS X och Linux. Windowsanvändare kan installera med hjälp av [RubyInstaller](http://rubyinstaller.org).


### 1.1. Klona repositoriet

```
git clone https://github.com/alexicon79/AID-2.0.git
```

### 1.2. Installera Middleman + gems

Se till så att Middleman och övriga nödvändiga gems installeras genom att gå till mappen `AID-2.0` och därifrån köra kommandot:

```
bundle install
```

Tips: [RVM](http://rvm.io) är ett utmärkt verktyg för att undvika risk för versionskonflikter vid installation av gems.

### 1.3. Starta upp lokal server

Middleman bör nu vara installerat. Kör kommandot:

```
bundle exec middleman
```

En lokal server startas upp på adressen `http://localhost:4567` med en lokal (dvs. ej kompilerad) version av **AID.SE 2.0**.


## 2. Middleman

**AID.SE 2.0** har skapats med hjälp av [Middleman](http://middlemanapp.com) – en s.k. *Static Site Generator* byggd i språket Ruby.

Arbetsflödet går i korta drag ut på att du utvecklar dina webbsidor lokalt (på ett i högsta grad flexibelt och dynamiskt vis), och sedan kompilerar dessa till rena, statiska HTML-/CSS- och JavaScript-filer *innan* de driftsätts på servern.

Mer utförlig dokumentation för Middleman finns tillgänglig på [den officiella webbplatsen](http://middlemanapp.com). De två kommandon som framförallt är nödvändiga att känna till vid fortsatt utveckling av »AID.SE 2.0« är dessa:

- `bundle exec middleman` - startar upp en lokal server (`http://localhost:4567`), med en "live preview" av webbplatsen.

- `bundle exec middleman build` - kompilerar webbplatsen till statiska HTML-/CSS- och JavaScript-filer (läggs till roten i mappen `build`). Behöver i princip enbart köras inför driftsättning.


## 3. Struktur, AID.SE 2.0

Detta stycke beskriver webbplatsens övergripande struktur och funktionalitet. I respektive understycke ges närmare beskrivning av .


```
AID-2.0/
+-- Gemfile (se beskrivning, stycke 3.1)
+-- config.rb (se beskrivning, stycke 3.2)
+-- data (se beskrivning, stycke 3.3)
    +-- medarbetare
    |   +-- [...]
    +-- resurser
    |   +-- [...]
+-- source (se beskrivning, stycke 3.4)
    +-- index.html.erb // STARTSIDA
    +-- _partials (se beskrivning, stycke 3.5)
    |   +-- [...]
    +-- assets (se beskrivning, stycke 3.6)
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
    +-- layouts (se beskrivning, stycke 3.7)
    |   +-- [...]
    +-- om-oss
    |   +-- index.html.erb
    |   +-- [...]
    +-- php (se beskrivning, stycke 3.8)
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

### 3.1. Gemfile
Här listas de gems som ska inkluderas (s.k. dependencies) i samband med att kommandot `bundle install` körs. Läs mer om Gemfiles [här](http://bundler.io/v1.3/gemfile.html).

### 3.2. Config.rb
Detta är Middlemans konfigurationsfil. Här anges bland annat:

- Sökvägar som ska användas till "assets", "partials", etc.
- Eventuella konfigurationer för hur sidan ska kompileras.
- Helpers – dvs. metoder som kan "återanvändas" genom hela applikationen.
- Vilka layoutfiler som skall användas för olika sidor.

Extra relevanta konfigurationsinställningar för **AID.SE 2.0** (och som därmed helst inte bör ändras) är:

- `activate :directory_indexes` Detta gör att filändelser (.html) inte behöver skrivas ut i URL:erna.
- "Helper"-metoden `nav_link_to`. Anger vilken sida som är aktiv i huvudmenyn.
- Särskilt definierade sökvägar för "assets".
- Dynamisk inhämtning av bower-komponenter (nödvändiga för Zurb Foundation)


### 3.3. Data
Middleman kan läsa in data i YML- och JSON-format, vilket alltså kan användas som en slags lokal databas. YML- och JSON-filer sparas i mappen `data`. YML och JSON kan också skrivas in direkt i respektive template-fil (dvs. alla filer som slutar med ".html.erb" i detta fall) via Frontmatter. Frontmatters syntax ser ut som följande:

```
    ---
    title: "custom"
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

För att hämta in data från filer i mappen `data` används istället följande syntaxstruktur:


```
    <%= data.mapp.filnamn.attribut %>

```

*AID.SE 2.0* använder i nuläget både separata YML-filer och Frontmatter. I mappen `data` finns YML-filer innehållande information om medarbetare samt information om resurser. OBS! Strukturering av detta kommer att ses över och anpassas i takt med att webbplatsen växer.

### 3.4. Source

### 3.5. Partials

### 3.6. Assets

### 3.7. Layouts

### 3.8. PHP



## 5. TODO



