console.log("start");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
let ejs = require("ejs");
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("static"));

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("9bb065d7351c4937959ac472466d8dcf");
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

// app.get("/", function(req, res) {
//   newsapi.v2
//     .topHeadlines({
//       // sources: "bbc-news,the-verge",
//       // q: "bitcoin",
//       // category: "general",
//       pagesize: 2,
//       country: "nl"
//     })
//     .then(response => {
//       console.log(response.articles);
//       res.render("../views/pages/index.ejs", {
//         data: response.articles
//       });
//
//       /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
//     });
// });

var data = [
  {
    id: 0,
    category: "nomal",
    title: "Justitie blundert in zaak Ridouan T., foto kroongetuige verspreid",
    urlToImage: "https://nos.nl/data/image/2018/09/07/498373/1200x675.jpg",
    publishedAt: "2019-04-17T06:39:06Z",
    content:
      "Het Openbaar Ministerie heeft per ongeluk een foto van een beschermde kroongetuige verspreid onder verdachten tegen wie hij heeft verklaard. Het gaat om een foto van Nabil B., die op dit moment in een getuigenbeschermingsprogramma zit omdat hij een boekje open heeft gedaan over de organisatie van de voortvluchtige crimineel Ridouan T. De foto is per abuis opgenomen in het strafdossier van elf verdachten, die tot de organisatie van T. worden gerekend. Vervolgens is de foto gelekt naar De Telegraaf, die hem vanochtend onherkenbaar heeft gepubliceerd."
  },
  {
    id: 1,
    category: "nomal",
    title:
      "Burgerwachten en etnisch profileren: enorme groei burgerpreventieapps",
    urlToImage: "https://nos.nl/data/image/2019/04/18/544499/1200x675.jpg",
    publishedAt: "2019-04-17T06:39:06Z",
    content:
      "Steeds meer buurten hebben een buurtpreventieapp of -team, mede doordat gemeenten dit stimuleren. In Nederland zijn ongeveer 700 patrouillerende teams en 3500 buurtapps actief. Het overgrote deel is in de afgelopen vijf jaar opgericht.. Het probleem is alleen dat diezelfde gemeenten die dit stimuleren, nauwelijks in de gaten houden wat de controlerende netwerken van bewoners precies doen. Daardoor ontstaan geregeld problemen, zegt onderzoeker Vasco Lub na berichtgeving in het NRC. Lub onderzocht in opdracht van het Centrum voor Criminaliteitspreventie en Veiligheid buurtpreventieteams in meer dan 200 gemeenten. Uit dat onderzoek blijkt dat twee op de drie gemeenten buurtpreventie stimuleren. Politie en bestuurders vinden het goed dat burgers actief betrokken worden bij het voorkomen en opsporen van criminaliteit."
  },
  {
    id: 2,
    category: "metal",
    title: "Korn’s Fieldy Is Selling 10 of His Paintings on Ebay",
    urlToImage:
      "//townsquare.media/site/366/files/2015/09/Fieldy-Ethan-Miller.jpg?w=980&q=75",
    publishedAt: "2019-04-17T06:39:06Z",
    content:
      "Steeds meer buurten hebben een buurtpreventieapp of -team, mede doordat gemeenten dit stimuleren. In Nederland zijn ongeveer 700 patrouillerende teams en 3500 buurtapps actief. Het overgrote deel is in de afgelopen vijf jaar opgericht.. Het probleem is alleen dat diezelfde gemeenten die dit stimuleren, nauwelijks in de gaten houden wat de controlerende netwerken van bewoners precies doen. Daardoor ontstaan geregeld problemen, zegt onderzoeker Vasco Lub na berichtgeving in het NRC. Lub onderzocht in opdracht van het Centrum voor Criminaliteitspreventie en Veiligheid buurtpreventieteams in meer dan 200 gemeenten. Uit dat onderzoek blijkt dat twee op de drie gemeenten buurtpreventie stimuleren. Politie en bestuurders vinden het goed dat burgers actief betrokken worden bij het voorkomen en opsporen van criminaliteit."
  },
  {
    id: 3,
    category: "metal",
    title: "Hear Three More Rammstein Song Teases From Upcoming Album",
    urlToImage:
      "//townsquare.media/site/366/files/2017/12/Rammstein.jpg?w=980&q=75",
    publishedAt: "2019-04-17T06:39:06Z",
    content:
      "If a decade without a new album doesn't whet your appetite, German rockers Rammstein are doing a great job of continuing to build the anticipation for their long-anticipated new studio album. After issuing two new song teasers this week, which followed the release of the song and video, Deutschland, there are three more snippets of music to get you amped up for new Rammstein."
  },
  {
    id: 4,
    category: "politiek",
    title: "'Maak einde aan uitzonderingspositie luchtvaart'",
    urlToImage: "https://nos.nl/data/image/2018/03/30/462878/1200x675.jpg",
    publishedAt: "2019-04-17T06:39:06Z",
    content:
      "De luchtvaart in Nederland moet net zo streng worden afgerekend op effecten voor de leefomgeving en het milieu als andere bedrijfstakken. Dat schrijft de Raad voor de leefomgeving en infrastructuur (Rli) in een advies aan het kabinet."
  },
  {
    id: 5,
    category: "politiek",
    title:
      "Adieu Straatsburg, hallo Nederland: Europarlementariërs blikken terug",
    urlToImage: "https://nos.nl/data/image/2019/04/18/544489/1200x675.jpg",
    publishedAt: "2019-04-17T06:39:06Z",
    content:
      "Voor tien Nederlandse Europarlementariërs is het vandaag hun laatste vergaderdag in Straatsburg. Nog één keer stemmen, nog één keer een debat en daarna de koffers inpakken en terug naar Nederland."
  },
  {
    id: 6,
    category: "economie",
    title: "Doorstart voor kledingketen CoolCat, nog veel onduidelijk",
    urlToImage: "https://nos.nl/data/image/2019/03/19/538001/1200x675.jpg",
    publishedAt: "2019-04-17T06:39:06Z",
    content:
      "Winkelketen CoolCat maakt een doorstart. De curatoren van het failliete bedrijf hebben dat bevestigd. Of alle 80 winkels van CoolCat open blijven is nog onduidelijk. De komende weken zal duidelijk worden hoeveel medewerkers voor het bedrijf kunnen blijven werken."
  },
  {
    id: 7,
    category: "economie",
    title: "Samsung onderzoekt defecten opvouwbare telefoon van 2000 dollar",
    urlToImage: "https://nos.nl/data/image/2019/02/26/533419/1200x675.jpg",
    publishedAt: "2019-04-17T06:39:06Z",
    content:
      "Twee dagen nadat techjournalist Dieter Bohn zijn recensie-exemplaar van de Samsung Galaxy Fold had ontvangen, zat er een defect in het scherm van de nieuwe telefoon. En hij is niet de enige die problemen heeft. Samsung gaat de toestellen onderzoeken."
  }
];

app.get("/", function(req, res) {
  res.render("../views/pages/index.ejs", {
    data: data
  });
});

app.get("/metal", function(req, res) {
  res.render("../views/pages/metal.ejs", {
    data: data
  });
});

app.get("/article/:id", function(req, res) {
  console.log(req.params.id);
  res.render("../views/pages/article.ejs", {
    data: data,
    articleId: req.params.id
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
