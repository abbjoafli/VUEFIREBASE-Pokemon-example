# Vuex Firestore Pokemon Starter Example
## Installation
1. Öppna CMD i mappen du vill ha projektet i. (Enklast genom att klicka i filvägsfältet och skriva cmd)
2. clona projektet genom att skriva "git clone https://github.com/abbjoafli/VUEFIREBASE-Pokemon-example.git Pokemon" det sista säger att den nya mappen ska heta pokemon.
3. Gå in i mappen genom att skriva "cd Pokemon"
4. Installera resurserna som behövs för att köra koden "npm install"
5. Kör projektet "npm run serve"
6. Gå in på localhost:8080 och se sidan!

## Demo
[Pokemon demo!](https://pokemonexempel.web.app/login)
[Video som förklarar koden](https://web.microsoftstream.com/video/4eee78f4-b192-4195-a3a4-c49780c11436)
#### Pokemons colletion
![Pokemons](https://github.com/abbjoafli/VUEFIREBASE-Pokemon-example/blob/main/trainers.PNG?raw=true)

#### Trainers colletion
![Trainers](https://github.com/abbjoafli/VUEFIREBASE-Pokemon-example/blob/main/pokemons.PNG?raw=true)
## Saker att göra för att utvecklas
Vill man inte leka runt fritt i projektet kan man göra dessa saker för att lära sig mer om vue och känna att man bemästrar det.

Delarna
1. snackbar
2. routing
3. Store fil - Trainers
4. Ny komponent - TrainerCard
4. Sortera,filtrera och mappa

### Snackbar
Snackbar är en komponent som är en del av Vuetify men man kan skapa en egen. Den ligger i App.vue och visas när man sätter dess text, färg och show värde. Detta görs genom storen User som actions som kan användas vart som helst i projektet. I nu läget används den endast i login/index.vue. Börja med att kolla igenom User storen på Actions som har med Snackbar att göra samt dess mutationer. Behövs alla? Finns det någon du kan göra om till något användbart? Titta även igenom hur de anropas i login/index samt hur dess värden skickas till App och används där. 

1. Lägg till en snackbaranropp när man skapat en ny pokemon, den ska vara grön och ha en förklarande text. (Kom ihåg att importera mapActions med metoderna du önskar att använda, se login/index)
2. Gör om en av de förbestämda snackbaranroppen så den kan användas när man tagit bort en pokemon, gör likadant för uppdatera.
3. Kan du lägga till lägga till en snackbar funktion som skriver ut pokemonens namn man klickar på i Card?

### Routing
Vi behöver fler sidor, för tränare. I denna del ska vi gå in i routing och skapa sådana sidor.

1. Du ska skapa två nya sidor, en som Home är öppen för allmänheten och ska visa alla tränare som finns i vår databank, en annan som bara inloggade användare ska se och den ska senare visa bara tränare som just denna användaren har skapat. Skapa först sidorna i Views mappen
2. I steg två går du in i router.js här kan du ta inspiration från  hur det är gjort med home och homeUser det vill säga Hem och Min sida(den som barar visar mina pokemon). Dessa är snarlika men skiljer sig i en liten detalj att den ena har en meta tag med namnet 'requiresAuth'. Detta som ni säkert kan gissa kräver Autentisering, det behövs på en av dem, jag säger inte vilken.
3. I nästa steg ska du gå till App.vue och ner till menuItems i data avdelningen i scriptdelen.  Här vill du lägga till dina nyskapade routes, detta för att de ska komma upp i menyn i toppraden eller i hamburgemenyn på en mobilvänlig variant.
4. Du bör nu kunna navigera till dina nya, fina tomma sidor.

### Store fil - Trainers
Nu ska vi anropa trainers från databasen. Collectionen heter trainers och mitt tips är att börja med att göra en kopia på hema pokemons storen som utgångsläge.

1. Kika igenom din nya fil noga, vad är det som du kan behålla, vad kan du slänga. Det du vill behålla bör du ändra namn och filvägar på så du inte fortfarande anropar pokemons collectionen och förväntar dig tränare eller att din Array med tränare kallas för pokemon. Struktur är vårt sista hopp för att koden inte ska bli oläslig och nonsens för andra än oss själva, därför är det viktigt att det görs så bra det går redan från början.
2. När du känner dig redo att sjösätta ditt verk så måste du först gå in i index.js i storen. Här laddar du in trainers.js (eller något liknande beroende på vad du döpt den till) likt det är gjort med pokemon och users. Efter det lägger du in den i modules, än en gång som du gjort med pokemon.
3. Nu borde du kunna göra anropp till både mapactions och mapgetters för din nya store. testa det i någon av dina nya filer du gjorde i förra steget. Mitt tips är att i created köra en action för att initicera Arrayen med värden från databasen sen använda en getters för att bara skriva ut tränare i dess råa javascript form på sidan, typ {{trainers}} om din getter heter så. Glöm inte att importera mapActions och mapGetters i vuefilen där du vill komma åt din store! 
4. Du bör nu komma åt dina filer, denna del är där de flesta fel kan hända, efter det här är det smooth sailing!

### Ny komponent - TrainerCard
Nu ska vi få tränarna att visas fint på din sida. Detta gör vi genom att skapa en komponent, förslagsvis en CARD komponent då den har en enkel och fin struktur men du får göra det mer spännande och kreativt om du så önskas.
1. Skapa ett kort med hårdkodade värden så du ser att det blir som du vill ha det.
2. Byt ut de hårdkodade värdena mot variabelnamn. Det är här du ska göra ett beslut, ska du ladda in all data om varje tränare genom att ladda in hela trainer objectet i props eller vill du hellre ha flera, oberoende props, t.ex name, image, hometown? Skillnaden i praktiken är att man skriver trainer.name, trainer.image, istället för name och image. Det finns även ett tredje alternativ, att inte avända props alls utan göra anrop till användare i Cardet, det är dock inget tips jag ger då du då måste ladda in alla tränare och sedan ha någon underkomponent som skriver ut dem alternativt en loop med det, det är inte jättesnyggt, meningen med komponenter är att vi ska dela upp koden och få en tydligare och enklare struktur på våra projekt.
3. När du känner dig nöjd med din komponent så är du klart, man kan hålla på en evighet med att förbättra, ändra och joxa, håll på en halv eviget så lär du dig säkert massa!
4. Skapa en system för att lägga till tränare, sedan en för att ta bort och en för att uppdatera!

### Sortera,filtrera och mappa
Detta är egentligen mer javascript än ren vue men väldigt bra övning. Vi har ju i våra pokemon skickat med vad de är för typer samt vad de är svaga emot. Detta ska vi nu använda för att kunna filtrera våra sökresultat så vi bara får fram pokemon av önskad typ. Eftersom det här är sista uppgifet så innehåller den mer valfrihet, antingen får du skapa ett knappsystem på Hem där du kan sortera efter de olika typerna av pokemon för att bara få upp den typen. Det andra alternativet är att du gör en komponent där du kan välja en pokemon i en lista och då väljs pokemon som den är stark emot i en annan lista och som den är svag emot i en tredje.
Som hjälp för att förstå detta finns jättebra resurser på internet blandannat [wc3schools](https://www.w3schools.com/jsref/jsref_filter.asp) och [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

Här nedan skrver jag ett tipps på hur man skulle kunna sortera på gräs och även ett mer dynamiskt alternativ där man kan sortera på valdtyp. 

`` this.pokemons.filter(pokemon=> pokemon.type== "grass")
this.pokemons.filter(pokemon=> pokemon.type== this.Choosentype)

``


Sortera och mappa får ni googla fram själv och se om ni kan hitta något kreativt användingsområde för!


Kör!


## Project setup
```
npm install
```
### Firebase setup
```
Copy/Paste Your Own Firebase API Keys to src/firebase.js
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Theme customisation
```
src/plugins/vuetify.js
```
### Vuetify theme generator
[https://vuetifyjs.com/en/theme-generator](https://vuetifyjs.com/en/theme-generator)


#### 

To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

Run the following npm command to install the CLI or update to the latest CLI version.


npm install -g firebase-tools
Doesn't work? Take a look at the Firebase CLI reference or change your npm permissions

Deploy to Firebase Hosting
You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

Sign in to Google

firebase login
Initiate your project
Run this command from your app’s root directory:


firebase init
Specify your site in firebase.json
Add your site name to the firebase.json configuration file. After you get set up, see the best practices for multi-site deployment.


{
  "hosting": {
    "site": "pokemonexempel",
    "public": "public",
    ...
  }
}
When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:


firebase deploy --only hosting:pokemon
After deploying, view your app at pokemon.web.app

Need help? Check out the Hosting docs

