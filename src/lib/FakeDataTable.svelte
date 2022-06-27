<script context="module">
/*


<Experts />

<Row bg="bg-solitaire debug ">
  <!-- <h3 class="fw5 fraunces tl f3 f3-ns f2-m f1-l golden-brown mv3 pt5">
    Patagonia e Deserto Atacama
  </h3> -->
  <div class="w-100 flex items-center">
    <div class="w-100 w-third-ns w-50-m w-third-l flex-column flex-grow-1 ma0">
      Perchè Noi
    </div>
    <div class="w-100 w-two-thirds-ns w-50-m w-two-thirds-l cocoa">


      <div class="relative grid grid-repeat-3-1fr f5 f4-ns f3-m f3-l lh-copy">

        <div class="row fw5 fraunces">
          <h4 class="f4 f4-ns f3-m o-100-m f2-l fw4 o-80 o-80-ns o-80-l pb3 col-span-3 mv3">Documenti utili</h4>
        </div>

              <div class="row fw5 fraunces">
                <div class=""><!-- col-span-0 col-span-0-ns col-span-1-m col-span-1-l --></div>
                <h4 class="col-span-3 col-span-3-ns col-span-3-m col-span-2-l mv0">
                  <a
                    href="/doc/#doc"
                    title="Patagonia & The Atacama Desert, 12 days overview"
                    class="inherit link o-80 o-80-ns o-80-l fw4 bw1 bb b--transparent hover-b--inherit hover-o-100"
                  >
                    <!-- learn: Trip overview -->
                    <!-- <span class="o-80 o-80-ns o-80-l">&check;</span>&nbsp; -->
                    Programma in pillole
                  </a>
                </h4>
              </div>

              <div class="row fw5 fraunces">
                <div class="f4 f4-ns f3-m o-100-m f2-l pb3"></div>
                <h4 class="col-span-3 col-span-3-ns col-span-3-m col-span-2-l mv0">
                  <a
                    href="/doc/#doc"
                    title="Patagonia & The Atacama Desert, 12 days Day-by-day itinerary"
                    class="inherit link o-80 o-80-ns o-80-l fw4 bw1 bb b--transparent hover-b--inherit hover-o-100"
                  >
                    <!-- learn: Day-by-day itinerary -->
                    <!-- <span class="o-80 o-80-ns o-80-l">&check;</span>&nbsp; -->
                    Programma Day-per-Day
                  </a>
                </h4>
              </div>

              <div class="row fw5 fraunces">
                <h4 class="f4 f4-ns f3-m o-100-m f2-l fw4 o-80 o-80-ns o-80-l pb3 col-span-3 mv3">Trip Summary</h4>
              </div>

              <div class="row fw5 fraunces">
                <div class=""><!-- col-span-0 col-span-0-ns col-span-1-m col-span-1-l --></div>
                <div class="col-span-2 system  fw3 col-span-2">This trip goes to Patagonia & The Atacama Desert for 12 days it requires a minimum of 10-14 participants and an Italian-speaking, expert guide.</div>
              </div>

            </div>



    </div>
  </div>
</Row>

<Defs />
*/
</script>

<script>
  import Experts from '$lib/Experts/index.svelte';
  import Defs from '$lib/Defs.svelte';
  import Row from '$lib/Row.svelte';
  // note: reset form input: codepen.io/inspiredlabs/pen/BgYooY
  // note: codepen.io/inspiredlabs/pen/wvyOwBp?editors=1100
</script>

<!-- learn: for assistive screen-readers: `aria-describedby="detail"`, for SEO bots: `data-parent="departure-dates"` -->
<!-- debug: ARIA ROLES: https://www.w3.org/TR/wai-aria/#treegrid -->
<!-- debug: ARIA rol subtitle: css-tricks.com/html-for-subheadings-and-headings/ -->
<!-- learn: stackoverflow.com/questions/18761682/semantic-of-nested-tables-and-table-header -->

<!-- learn: sticky -->

<style>
/* learn: fractional units: vgpena.github.io/using-css-grid-the-right-way*/
/* learn: golden-brown, solitaire, linen, cocoa */
/* learn `:root{...}` spacing fragment: tachyons.io/docs/layout/spacing */

.grid-fr1-auto-auto { grid-template-columns: fr1 auto auto }
.grid-auto-auto-auto { grid-template-columns: auto auto auto }
.grid-repeat-3-1fr { grid-template-columns: repeat(3, 1fr) }
.grid-repeat-5-1fr { grid-template-columns: repeat(5, 1fr) }

/* .col-1 ~ .col-2 ~ .col-3 { color: white } */
.col { grid-column: auto }
/* .col-1{ grid-column: 1 } */
/* .col-2{ grid-column: 2 } */
/* .col-3{ grid-column: 3 } */

.row { display: contents }
/* simplicity is the ultimate: stackoverflow.com/questions/56902735/css-grid-how-to-select-row-to-add-hover-effect */

.row [class *= 'col'] {
transition: background-color 1s ease;
}

.row:hover [class *= 'col']:not(h1, h2, h3, h4, h5, h6) {
  background-color: rgba(255,255,255, 1);
  cursor: default;
  /* mauw: w3docs.com/tools/editor/7415 */
}

/* table a { padding: initial }

.stripe-light:nth-child(odd) {
background-color: rgba(255,255,255, 0.8);
}
.stripe-dark:nth-child(odd) {
background-color: var(--solitaire);
} */

/* .stripe-dark:nth-child(odd) {
  --alpha: 1;
  background-color: var(--cocoa);
}

.stripe-dark:nth-child(even) {
  --alpha: 1;
  background-color: var(--golden-brown);
} */

/* learn: css-tricks.com/almanac/properties/l/list-style/ */
.custom-list > li::marker { color: var(--golden-brown) }

</style>

<!-- learn: wrap `sticky` and maintain the document flow -->
<article class="bg-linen">
  <header class="sticky top-2 z-1">
    <Row bg="bg-solitaire">

      <!-- <h3 class="fw5 fraunces tl f4 f4-ns f3-m o-100-m f2-l golden-brown mv3">
        Patagonia e Deserto Atacama
      </h3> -->
      <h3 class="fw5 fraunces tl f3 f3-ns f2-m f1-l golden-brown mv3 pt5">
        Patagonia e Deserto Atacama
      </h3>
    </Row>
  </header>

  <section class="w-100 flex flex-row-ns flex-column-reverse fw6 f4 f3-ns f3-m f3-l measure measure-ns measure-m measure-wide-l mr-auto ml-auto pt4">

    <figure class="w-100 w-third-ns w-50-m w-third-l flex-column flex-grow-1 ma0">
      <!-- debug: ./images/placeholder.gif || https://viaggilevi.vercel.app/images/placeholder.gif -->
      <div style="top: 13rem" class="sticky pb5 overflow-y-scroll vh-100">
        <div
          role="figure"
          aria-labelledby="trip-caption"
          class="h5 cover" style="background:url('https://viaggilevi.vercel.app/images/placeholder.gif') center;"
        >
        <!-- learn: svg req: `cocoa, solitaire, linen, golden-brown ` -->
          <p class="visually-hidden">Mappa</p>
        </div>
        <figurecap id="trip-caption" class="f5 fw3">
          <p class="pr3">Cile: Paese unso e sottile in cui la Natura ha concentrato ogni sua estrema bellezza.<br>Arido e ghiacciato, bagnato dall'acqua e bruciato dal fuoco dei vulcani.</p>
        </figurecap>
        <a
          href="#cta"
          target="_blank"
          data-name="learnMore"
          class="no-clutter link pointer br-pill ba bw2 ph4 pv2 golden-brown hover-cocoa hover-bg-white-80 tc f5 f5-ns f7-m f5-l ttu"
        >approfondimento</a>
      </div>
    </figure>

    <div class="w-100 w-two-thirds-ns w-50-m w-two-thirds-l">
      <!-- learn when is `flex-grow-1` req.? -->

      <!-- learn: `grid-auto-auto-auto` is more even -->
      <div class="relative grid grid-fr1-auto-auto f5 f4-ns f3-m f3-l lh-copy">
        <!-- note: `*` || &#10022; do not confuse: www.w3.org/TR/WCAG20-TECHS/H90.html -->
        <div class="row fw5 fraunces" title="€ 5,700&#8224; &#013;&#8224;&nbsp;Quota individuale di partecipazione da Milano &#013;&#8224;&nbsp;Base 10-14 partecipanti + Esperto e Guida locale lingua ITA">
          <h4 class="f4 f4-ns f3-m o-100-m f2-l fw4 o-80 o-80-ns o-80-l flex items-end mv0">Persona</h4>
          <div class="mv0 pa1 ph3-l col-span-2 fw4 golden-brown f5 f5-ns f4-m f3-l">10-14 partecipanti + Esperto e Guida locale lingua ITA</div>
          <!-- learn: <span class="visually-hidden">10-14 participants and an&nbsp;Italian-speaking guide</span> -->
        </div>

        <div class="row fw5 fraunces">
          <h4 class="f4 f4-ns f3-m o-100-m f2-l fw4 o-80 o-80-ns o-80-l mv3">Durata</h4>
          <div class="pa1 pv1-l ph3-l col-span-2 f4 f4-ns f3-m o-100-m f2-l golden-brown flex items-center ">12 giorni</div>
        </div>

        <div class="row fw5 fraunces">
          <h4 class="f4 f4-ns f3-m o-100-m f2-l fw4 o-80 o-80-ns o-80-l pb3 mv0">Date</h4>
          <div class="ph3-l pv2 fw3 f5 f5-ns f4-m f3-l golden-brown">Partenza</div>
          <div class="ph3-l pv2 fw3 f5 f5-ns f4-m f3-l golden-brown">Rieniro</div>
        </div>

        <div class="row fw5 fraunces" title="30 Dic &mdash; 10 Gen">
          <div class="f4 f4-ns f3-m o-100-m f2-l pb3"></div>
          <div class="pa1 pv1-l ph3-l col system fw3">30&nbsp;Dic</div>
          <div class="pa1 pv1-l ph3-l col system fw3">10&nbsp;Gen</div>
        </div>

        <div class="row fw5 fraunces" title="12 Gen &mdash; 24 Gen">
          <div class="f4 f4-ns f3-m o-100-m f2-l pb3"></div>
          <div class="pa1 pv1-l ph3-l col system fw3">12&nbsp;Gen</div>
          <div class="pa1 pv1-l ph3-l col system fw3">24&nbsp;Gen</div>
        </div>

        <div class="row fw5 fraunces" title="27 Gen &mdash; 09 Feb">
          <div class="f4 f4-ns f3-m o-100-m f2-l pb3"></div>
          <div class="pa1 pv1-l ph3-l col system fw3">27&nbsp;Gen</div>
          <div class="pa1 pv1-l ph3-l col system fw3">09&nbsp;Feb</div>
        </div>

        <!-- learn: stackoverflow.com/questions/18606877/how-can-i-add-new-line-linebreak-character-in-title-attribute-in-html/18612227#18612227 -->
        <div class="row fw5 fraunces" title="€ 5,700&#8224; &#013;&#8224;&nbsp;Quota individuale di partecipazione da Milano &#013;&#8224;&nbsp;Base 10-14 partecipanti + Esperto e Guida locale lingua ITA">
          <h4 class="f4 f4-ns f3-m o-100-m f2-l fw4 o-80 o-80-ns o-80-l mt5 mb0 pt0 pb0">Prezzi</h4>
          <div class="f4 f4-ns f3-m o-100-m f2-l fw4 pl3-l mt5 mb0 pt0 pb0 col-span-2 golden-brown flex items-center">€ 5,700<sup style="font-size: initial">&#8224;</sup></div>
        </div>

        <div class="row fw5 fraunces" title="€ 5,700&#8224; &#013;&#8224;&nbsp;Quota individuale di partecipazione da Milano &#013;&#8224;&nbsp;Base 10-14 partecipanti + Esperto e Guida locale lingua ITA">
          <div class="f4 f4-ns f3-m o-100-m f2-l pb3"></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l system fw3"><span class="fraunces fw4" style="font-size: initial">&#8224;</span>&nbsp;Quota individuale di partecipazione da Milano</div>
        </div>

        <div class="row fw5 fraunces" title="€ 5,700&#8224; &#013;&#8224;&nbsp;Quota individuale di partecipazione da Milano &#013;&#8224;&nbsp;Base 10-14 partecipanti + Esperto e Guida locale lingua ITA">
          <div class="f4 f4-ns f3-m o-100-m f2-l pb3"></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l system fw3"><span class="fraunces fw4" style="font-size: initial">&#8224;</span>&nbsp;Base 10-14 partecipanti + Esperto e Guida locale lingua ITA</div>
        </div>

        <div class="row fw5 fraunces">
          <div class=""><!-- col-span-0 col-span-0-ns col-span-1-m col-span-1-l --></div>
          <h5 class="fw3 f5 f5-ns f4-m f3-l golden-brown col-span-3 col-span-3-ns col-span-3-m col-span-2-l mt3 mb0 pt0 pb0 ph3-l">Supplementi</h5>
        </div>

        <div class="row fw5 fraunces">
          <div class=""><!-- col-span-0 col-span-0-ns col-span-1-m col-span-1-l --></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l mv0"><span class="o-80 ">€ 150&ensp;</span><span class="fw3 system">prezzo bloccato</span></div>
        </div>

        <div class="row fw5 fraunces">
          <div class=""><!-- col-span-0 col-span-0-ns col-span-1-m col-span-1-l --></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l mv0"><span class="o-80 ">€ 970&ensp;</span><span class="fw3 system">supplemento singola</span></div>
        </div>

        <div class="row fw5 fraunces">
          <div class=""><!-- col-span-0 col-span-0-ns col-span-1-m col-span-1-l --></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l mv0"><span class="o-80 ">€ 175&ensp;</span><span class="fw3 system">prezzo bloccato singola</span></div>
        </div>

        <div class="row fw5 fraunces">
          <div class=""><!-- col-span-0 col-span-0-ns col-span-1-m col-span-1-l --></div>
          <h5 class="fw3 f5 f5-ns f4-m f3-l golden-brown col-span-3 col-span-3-ns col-span-3-m col-span-2-l mt3 mb0 pt0 pb0 ph3-l">Spese Accessorie</h5>
        </div>

        <div class="row fw5 fraunces">
          <div class="f4 f4-ns f3-m o-100-m f2-l pb3"></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l mv0"><span class="o-80 ">€ 780&ensp;</span><span class="fw3 system">tasse aeree, spese&nbsp;pratica</span></div>
        </div>

        <div class="row fw5 fraunces">
          <div class="f4 f4-ns f3-m o-100-m f2-l pb3"></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l mv0"><span class="fw3 system">Assicurazioni. Maggiori info nel programma</span></div>
        </div>


        <div class="row fw5 fraunces">
          <h4 class="f4 f4-ns f3-m o-100-m f2-l fw4 o-80 o-80-ns o-80-l col-span-3 mt5 mb0 pt0 pb0">Documenti Utili</h4>
        </div>

        <div class="row fw5 fraunces">
          <div class="f4 f4-ns f3-m o-100-m f2-l pb3 "></div>
          <h4 class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l mv0">
            <a
              href="/doc/#doc"
              title="Patagonia & The Atacama Desert, 12 days overview"
              class="inherit system link o-80 o-80-ns o-80-l fw4 bw1 bb b--transparent hover-b--inherit hover-o-100"
            >
              <!-- learn: Trip overview -->
              <!-- <span class="o-80 o-80-ns o-80-l">&check;</span>&nbsp; -->
              Programma in pillole
            </a>
          </h4>
        </div>

        <div class="row fw5 fraunces">
          <div class="f4 f4-ns f3-m o-100-m f2-l pb3 "></div>
          <h4 class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l mv0">
            <a
              href="/doc/#doc"
              title="Patagonia & The Atacama Desert, 12 days Day-by-day itinerary"
              class="inherit system link o-80 o-80-ns o-80-l fw4 bw1 bb b--transparent hover-b--inherit hover-o-100"
            >
              <!-- learn: Day-by-day itinerary -->
              <!-- <span class="o-80 o-80-ns o-80-l">&check;</span>&nbsp; -->
              Programma Day-per-Day
            </a>
          </h4>
        </div>

        <div class="row fw5 fraunces">
          <h4 class="f4 f4-ns f3-m o-100-m f2-l fw4 o-80 o-80-ns o-80-l col-span-3 mt5 mb0 pt0 pb0">Trip Summary</h4>
        </div>

        <div class="row fw5 fraunces">
          <div class=""><!-- col-span-0 col-span-0-ns col-span-1-m col-span-1-l --></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l system fw3">This trip goes to Patagonia & The Atacama Desert for 12 days it requires a minimum of 10-14 participants and an Italian-speaking, expert guide.</div>
        </div>



        <div class="row fw5 fraunces">
          <h4 class="f4 f4-ns f3-m o-100-m f2-l fw4 o-80 o-80-ns o-80-l col-span-3 mt5 mb0 pt0 pb0">
            I nostri<span class="fraunces-i fw4">&nbsp;Esperti</span>
          </h4>
        </div>


        <section class="row fw5 fraunces">
          <div class="f4 f4-ns f3-m o-100-m f2-l"></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l mt0 mb3">
            <a
              href="/esperti/#caterina-borgato"
              title="Caterina Borgato, Specialist Adventure"
              class="inherit system link o-80 o-80-ns o-80-l fw4 bw1 bb b--transparent hover-b--inherit hover-o-100"
            >
              Caterina Borgato
              <small class="db system golden-brown fw3 pb3">Specialist Adventure</small>
            </a>
            <nav class="flex">
              <a class="link inherit pointer transition hover-golden-brown o-80 o-80-ns o-80-l w-20 pr4" href="https://www.facebook.com/I-Viaggi-di-Maurizio-Levi-207083192654850/" title="Facebook"><svg viewbox="0 0 16 16" class="no-select"><use xlink:href="#fb"></use></svg></a>
              <a class="link inherit pointer transition hover-golden-brown o-80 o-80-ns o-80-l w-20 pr4" href="https://www.instagram.com/p/BKVQ5cvAvht/" title="Instagram"><svg viewbox="0 0 16 16" class="no-select"><use xlink:href="#instagram"></use></svg></a>
            </nav>
          </div>
        </section>

        <section class="row fw5 fraunces">
          <div class="f4 f4-ns f3-m o-100-m f2-l "></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l mt0 mb3">
            <!-- <profile>https://www.viaggilevi.com/content/uploads/2016/06/Cecilia_Tour_Leader-e1624287662165.jpg</profile> -->
            <a
              href="/esperti/#cecilia-bechstein"
              title="Cecilia Bechstein, Specialist Adventure"
              class="inherit system link o-80 o-80-ns o-80-l fw4 bw1 bb b--transparent hover-b--inherit hover-o-100"
            >
              Cecilia Bechstein
              <small class="db system golden-brown fw3 pb3">Specialist Adventure</small>
            </a>
            <nav class="flex">
              <a class="link inherit pointer transition hover-golden-brown o-80 o-80-ns o-80-l w-20 pr4" href="https://twitter.com/viaggilevi" title="Twitter"><svg viewbox="0 0 16 16" class="no-select"><use xlink:href="#twitter"></use></svg></a>

              <a class="link inherit pointer transition hover-golden-brown o-80 o-80-ns o-80-l w-20 pr4" href="https://www.youtube.com/user/viaggidimauriziolevi" title="YouTube"><svg viewbox="0 0 16 16" class="no-select"><use xlink:href="#yt"></use></svg></a>

              <a class="link inherit pointer transition hover-golden-brown o-80 o-80-ns o-80-l w-20 pr4" href="https://za.pinterest.com/iviaggidimauriz/" title="Pintrest"><svg viewbox="0 0 16 16" class="no-select"><use xlink:href="#pintrest"></use></svg></a>
            </nav>
          </div>
        </section>

        <section class="row fw5 fraunces">
          <div class="f4 f4-ns f3-m o-100-m f2-l "></div>
          <div class="pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l mt0 mb3">
            <!-- <profile>https://www.viaggilevi.com/content/uploads/2021/10/Paolo_Ghirelli..jpg</profile> -->
            <a
              href="/esperti/#paolo-ghirelli"
              title="Paolo Ghirelli, Specialist Adventure"
              class="inherit system link o-80 o-80-ns o-80-l fw4 bw1 bb b--transparent hover-b--inherit hover-o-100"
            >
              Paolo Ghirelli
              <small class="db system golden-brown fw3 pb3">Specialist Adventure</small>
            </a>
            <nav class="flex">
              <a class="link inherit pointer transition hover-golden-brown o-80 o-80-ns o-80-l w-20 pr4" href="https://www.facebook.com/I-Viaggi-di-Maurizio-Levi-207083192654850/" title="Facebook"><svg viewbox="0 0 16 16" class="no-select"><use xlink:href="#fb"></use></svg></a>
              <a class="link inherit pointer transition hover-golden-brown o-80 o-80-ns o-80-l w-20 pr4" href="https://twitter.com/viaggilevi" title="Twitter"><svg viewbox="0 0 16 16" class="no-select"><use xlink:href="#twitter"></use></svg></a>
            </nav>
          </div>
        </section>

        <div class="row fw5 fraunces">
          <div class=""><!-- col-span-0 col-span-0-ns col-span-1-m col-span-1-l --></div>
          <h5 class="fw3 f5 f5-ns f4-m f3-l golden-brown col-span-3 col-span-3-ns col-span-3-m col-span-2-l mt3 mb0 pt0 pb0 ph3-l">Perchè Noi?</h5>
        </div>

        <div class="row fw5 fraunces">
          <div class=""><!-- col-span-0 col-span-0-ns col-span-1-m col-span-1-l --></div>
          <ul class="custom-list pa1 pv1-l ph3-l col-span-3 col-span-3-ns col-span-3-m col-span-2-l system fw3">
            <li>Tour Leader esperto dall'Italia per tutta la durata del viaggio</li>
            <li>Itinerario inedito e fuori dalle rotte più battute</li>
            <li>Utilizziamo veicoli 4x4 con tre partecipanti al massimo&#8225;
              <span class="db o-80">&#8225;(posto finestrino garantito)</span></li>
          </ul>
          <!-- debug: Perchè Noi? -->
        </div>


      </div>

    </div>

  </section>
</article>

