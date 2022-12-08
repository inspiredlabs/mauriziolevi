// learn: https://www.youtube.com/watch?v=NHWCtmmDIjo&list=PLm_Qt4aKpfKjf77S8UD79Ockhwp_699Ms&index=7
const nations = {
  "hero": {
    "payoff": "Bagnato dall'acqua e bruciato dal fuoco",
    "title": "Algeria",
    "image": "https://kel12.com/wp-content/uploads/2021/11/kurt-cotoaga-vmra8dworzc-unsplash-scaled.jpg",
    "location": "Laguna Lejia, san Pedro de Atacama, Chile"
  },
  "description": {
    "nation": "Algeria",
    "title": "Patagonia e Deserto Atacama",
    "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "images": [
      "https://kel12image.com/uploads/americhe/argentina-2579058.jpg",
      "https://kel12image.com/uploads/americhe/guanaco.jpg"
    ]
  },
  "infos": {
    "title": "Informazioni utili",
    "info": [
      {
        "title": "CLIMA",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      },
      {
        "title": "DOCUMENTAZIONE",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      },
      {
        "title": "DISP. SANITARIE",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }
    ]
  },
  "suggested": {
    "payoff": "Decidi di partire",
    "title": "Proposte di viaggio",
    "text": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
    "trips": [
      {
        "length": "8",
        "title": "LE CITTA ROMANE DEL NORD AFRICA",
        "excerpt": "<p style=\\\"margin-left:0cm; margin-right:0cm; text-align:justify\\\"><em>L&rsquo;Algeria del nord: una regione interessantissima ma che &egrave; stata chiusa molti anni per ragioni di sicurezza. Ora &egrave; tranquilla e sicura e si possono cos&igrave; visitare alcuni dei siti archeologici romani tra i pi&ugrave; belli del Nord Africa che non hanno nulla da invidiare alla famosa Sabratha o a Leptis Magna in Libia. Numerosissimi sono i siti archeologici che si ha la possibilit&agrave; di visitare senza la fastidiosa presenza di altri gruppi di turisti: Djemila in uno scenario splendido tra le montagne con edifici molto ben conservati. Pi&ugrave; a sud Tazoult, l&rsquo;antica Lambaesis romana e quindi la famosa Timgad, forse il pi&ugrave; bel sito dell&rsquo;Algeria romana, fondata dall&rsquo;imperatore Traiano nel primo sec d.C. e dominata dell&rsquo;imponente arco a lui dedicato; Cherchell, con lo splendido museo; Tipasa, sulla costa, con i resti che lambiscono le acque del Mediterraneo; Constantine, la citt&agrave; dai &ldquo;cento ponti&rdquo;. Il viaggio si conclude con la visita di Algeri, la bella citt&agrave; &ldquo;bianca&rdquo; sul Mediterraneo, con la famosa casbah, un labirinto di vicoli e case pittoresche, e con il suo museo archeologico. Tutti i gruppi saranno accompagnati da una guida locale e da un nostro accompagnatore</em></p>",
        "cta": "https://viaggilevi.vercel.app/trip",
        "image": "placeorder",
        "startingPrice": "2450"
      }
    ]
  }
};

export const get = () => {
  return {
    body: { nations },
  };
}
