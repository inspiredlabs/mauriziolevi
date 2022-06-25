<script>
  // note: reset form input: codepen.io/inspiredlabs/pen/BgYooY
  // note: codepen.io/inspiredlabs/pen/wvyOwBp?editors=1100
  let title = 'Maurizio Levi';
</script>

<!-- <style>
/* learn: official syntax: tachyons.io/docs/table-of-properties/ */

.dit: inline-table
.dit-l: inline-table
.dit-m: inline-table
.dit-ns: inline-table

.dt-column-group: table-column-group
.dt-column-group-l: table-column-group
.dt-column-group-m: table-column-group
.dt-column-group-ns: table-column-group

.dt-column: table-column
.dt-column-l: table-column
.dt-column-m: table-column
.dt-column-ns: table-column

.dt: table
.dt-l: table
.dt-m: table
.dt-ns: table

.dt-row: table-row
.dt-row-l: table-row
.dt-row-m: table-row
.dt-row-ns: table-row

.dt-row-group: table-row-group
.dt-row-group-l: table-row-group
.dt-row-group-m: table-row-group
.dt-row-group-ns: table-row-group

.dtc: table-cell
.dtc-l: table-cell
.dtc-m: table-cell
.dtc-ns: table-cell

</style> -->

<style>
/*
--golden-brown
--solitaire
--linen
--cocoa
*/


  /* table * { padding: 1rem } */
  table a { padding: initial }
  table tr td tfoot span, table tr td tfoot p { padding: initial }
  /* a { margin-left: -0.8rem!important } */

  .stripe-light:nth-child(odd) {
    background-color: rgba(255,255,255, 0.8);
  }
  .stripe-dark:nth-child(odd) {
    background-color: var(--solitaire);
  }

  /* fix: `tr th:nth-child(1) { background-color:transparent!important }` */

  tr th, tr td { width: calc(100%/3) }
  /*
https://caniuse.com/?search=position%3Asticky
*/
  .sticky {
    position: -webkit-sticky;
    position: sticky;
  }

</style>

<section class="db w-100 bg-linen ">

<header class="sticky top-0 bg-solitaire z-1 pt5" style="overflow-y: scroll">
  <article class="highlight db black-70 f5 f4-ns f3-m f3-l lh-copy measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">
    <h3 class="fw5 fraunces tl f3 f3-ns f2-m f1-l golden-brown mv3">Patagonia e
      Deserto Atacama</h3>
  </article>
</header>


  <article class="highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto">

    <div class="flex flex-row-ns flex-column-reverse">
      <figure class="w-100 w-50-ns flex-column flex-grow-1 ma0">
        <main class="sticky w-100 top-0 vh-100 pb5 overflow-y-scroll" style="padding-top: 10rem">
          <div
            role="figure"
            aria-labelledby="trip-caption"
            class="h5 cover" style="background:url(./images/placeholder.gif) center;"
          >
            <p class="visually-hidden">Mappa</p>
          </div>
          <figurecap id="trip-caption" class="f5">
            <p class="pr3">Cile: Paese unso e sottile in cui la Natura ha concentrato ogni sua estrema bellezza.<br>Arido e ghiacciato, bagnato dall'acqua e bruciato dal fuoco dei vulcani.</p>
          </figurecap>
          <a
            href="#cta"
            target="_blank"
            data-name="learnMore"
            class="no-clutter link pointer br-pill ba bw2 ph4 pv2 golden-brown hover-cocoa hover-bg-white-80 tc f5 f5-ns f7-m f5-l ttu"
          >approfondimento</a>
        </main>
      </figure>
      <div class="w-100 w-50-ns pa0 flex-grow-1">

        <table class="w-100 mw8 center  cocoa" cellspacing="0">
          <thead>

            <tr
              class="fw5 fraunces tl f4 f4-ns f3-m f2-l v-base"
              id="tableTitle">
              <th class="pt3 tl visually-hidden" colspan="3" data-name="title">Patagonia e Deserto Atacama</th>
            </tr>

            <tr
              class="fw5 fraunces tl f4 f4-ns f3-m f2-l v-base"
              id="tripRequirementMinimum"
              data-parent="tableTitle">
              <th class="pt3 tl" colspan="1">Base</th>
              <td class="pt3 tl fw4 golden-brown f5 f5-ns f4-m f3-l" data-parent="tripRequirementMinimum" data-name="tripRequirements" title="* = Minimum requirement for this trip" colspan="2">
                <!--learn: f5 bg-solitaire golden-brown -->
                <span >10-14 partecipanti + Esperto e Guida locale lingua ITA</span>
                <!-- learn: <span class="visually-hidden">10-14 participants and an&nbsp;Italian-speaking guide</span> -->
              </td>
            </tr>



            <tr
              class="fw5 fraunces tl f4 f4-ns f3-m f2-l v-base"
              id="tripDuration"
              data-parent="tableTitle">
              <th class="pt3 tl">Durata</th>
              <th class="pt3 tl golden-brown " colspan="2" data-parent="tripPrice">12 giorni</th>
            </tr>

          </thead>

          <tbody class="">

            <tr
              class="fw5 fraunces tl f4 f4-ns f3-m f2-l v-base"
              id="departureDates"
              data-parent="tableTitle">
              <th class="pt3 tl">Date <!-- Dates Available --></th>
              <th class="pt3 tl fw3 golden-brown f5 f5-ns f4-m f3-l">
                <!-- data-en="Departs" -->
                Partenza
              </th>
              <th class="pt3 tl fw3 golden-brown f5 f5-ns f4-m f3-l">
                <!-- data-en="Returns" -->
                Rieniro
              </th>
            </tr>
            <!-- learn: f5 bg-transparent -->


            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="departureDates">
              <td class=""></td>
              <td class="" data-name="first-inbound-date" title="Partenza: 30 Dic">30 Dic</td>
              <td class="" data-name="first-outbound-date" title="Rieniro: 10 Gen">10 Gen</td>
            </tr>

            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="departureDates">
              <td class=""></td>
              <td class="" data-name="second-inbound-date" title="Partenza: 12 Jan">12 Gen</td>
              <td class="" data-name="second-outbound-date" title="Rieniro: 24 Jan">24 Gen</td>
            </tr>

            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="departureDates">
              <td class=""></td>
              <td class="" data-name="third-inbound-date" title="Partenza: 27 Jan">27 Gen</td>
              <td class="" data-name="third-outbound-date" title="Rieniro: 09 Feb">09 Feb</td>
            </tr>




            <!-- learn: <hr> -->
            <!-- <tr>
              <td colspan="3">
                <hr class="b--golden-brown mr-auto ml-auto mt4">
              </td>
            </tr> -->
            <!-- learn: <hr> -->

            <tr
              class="fw5 fraunces tl f4 f4-ns f3-m f2-l v-base"
              id="tripPrice"
              data-parent="tableTitle">
              <th class="pt3 tl">Prezzi</th>
              <th class="pt3 tl golden-brown " colspan="2" data-parent="tripPrice">
                <!-- learn: fw3 f5 f5-ns f4-m f3-l -->
                € 5,700<sup style="font-size: initial" title="* = Minimum requirement for this trip" >*</sup></th>
            </tr>

            <tr
            class="f5 bg-gold visually-hidden"
            id="tripPriceRequirements">
              <td class="" colspan="3">* = Minimum requirement for this trip</td>
            </tr>

            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="tripPriceRequirements">
              <td class="pt3 "></td>
              <td class="" data-name="tripRequirement" title="* = Minimum requirement for this trip" colspan="2">
                <!--learn: Price per. person commencing from Milan -->
                Quota individuale di partecipazione da&nbsp;Milano
              </td>
            </tr>
            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="tripPriceRequirements">
              <td class="pt3 "></td>
              <td class="" data-name="tripRequirement" title="* = Minimum requirement for this trip" colspan="2">
                <!--learn: 10-14 participants and an Italian-speaking guide -->
                Base 10-14 partecipanti + Esperto e Guida locale lingua ITA
              </td>
            </tr>


            <!-- learn: <hr> -->
            <!-- <tr>
              <td colspan="3">
                <hr class="b--golden-brown mr-auto ml-auto mt4">
              </td>
            </tr> -->
            <!-- learn: <hr> -->

            <tr
              class="fw5 fraunces tl f4 f4-ns f3-m f2-l v-base"
              id="accommodationExtras"
              data-parent="tableTitle">
              <th class="pt3 tl" colspan="3">Supplementie
                <!-- Room Extras -->
              </th>
            </tr>
            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="accommodationExtras">
              <td class="pt3 "></td>
              <td class="" data-name="accommodationExtrasAddition" title="€ 5,700 + € 970 for a single room" colspan="2">
                <span class="o-50">+</span> € 970 supplemento singola
                <!-- a single room -->
              </td>
            </tr>
            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="accommodationExtras">
              <td class="pt3 "></td>
              <td class="" data-name="accommodationExtrasAddition" title="€ 5,700 + € 150 reservation fee" colspan="2">
                <span class="o-50">+</span> € 150 prezzo bloccato
                <!-- reservation fee -->
              </td>
            </tr>

            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="accommodationExtras">
              <td class="pt3 "></td>
              <td class="" data-name="accommodationExtrasAddition" title="€ 5,700 + € 175 reservation fee" colspan="2">
                <span class="o-50">+</span> € 175 prezzo bloccato singola
                <!-- single reservation fee -->
              </td>
            </tr>



            <tr
              class="fw5 fraunces tl f4 f4-ns f3-m f2-l v-base"
              id="travelFees"
              data-parent="tableTitle">
              <th class="pt3 tl" colspan="3">
                <!-- Travel Fees -->
                Spese Accessorie
              </th>
            </tr>
            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="travelFees">
              <td class="pt3 "></td>
              <td class="" data-name="travelFeesAddition" title="€ 5,700 + € 780 air tax fee" colspan="2">
                <span class="o-50">+</span> € 780 tasse aeree, spese pratica
                <!-- air tax fee -->
              </td>
            </tr>
            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="travelFees">
              <td class="pt3 "></td>
              <td class="" data-name="travelFeesAddition" title="€ 5,700 + your insurance choices" colspan="2">
                <span class="o-50">+</span> Assicurazioni. Maggiori info nel&nbsp;programma
                <!-- your insurance choices -->
              </td>
            </tr>


            <tr
              class="fw5 fraunces tl f4 f4-ns f3-m f2-l v-base bg-solitaire"
              id="tripDocumentation"
              data-parent="tableTitle">
              <!-- <th class="pt3 tl " colspan="3">Useful Documents</th> -->
              <th class="pt3 tl " colspan="3">Documenti utili</th>

            </tr>
            <tr class="f5 f5-ns f4-m f3-l bg-solitaire" data-parent="tripDocumentation">
              <td class="pb5 "></td>
              <td class="golden-brown" data-name="tripDocumentationOverview" title="Patagonia & The Atacama&nbsp;Desert, 12&nbsp;days overview" colspan="2">
                <a href="/doc/#doc" class="inherit tracked-none tracked-ns tracked-m tracked-mega-l ttu transition hover-near-black">
                  <!-- learn: Trip overview -->
                  Programma in pillole
                </a>
              </td>
            </tr>
            <tr class="f5 f5-ns f4-m f3-l bg-solitaire " data-parent="tripDocumentation">
              <td class="pb5 "></td>
              <td class="golden-brown" data-name="tripDocumentationDayByDay" title="Patagonia & The Atacama&nbsp;Desert, 12&nbsp;days Day-by-day itinerary" colspan="2">
                <a href="/doc/#doc" class="inherit tracked-none tracked-ns tracked-m tracked-mega-l ttu transition hover-near-black">
                  <!-- learn: Day-by-day itinerary -->
                  Programma Day-per-Day
                </a>
              </td>
            </tr>

            <tr
              class="fw5 fraunces tl f4 f4-ns f3-m f2-l v-base"
              id="tripSummary"
              data-parent="tableTitle">
              <th class="pt3 tl " colspan="3">Trip Summary</th>
            </tr>
            <tr class="transition hover-bg-white f5 f5-ns f4-m f3-l" data-parent="tripSummary">
              <td class="pt3 "></td>
              <td class="golden-brown" data-name="tripSummaryConcatenation" title="" colspan="2">
                <tfoot class="golden-brown pa0">
                  This trip goes to <span>Patagonia & The Atacama&nbsp;Desert</span> for <span>12&nbsp;days</span> it requires a minimum of <span>10-14 participants and an Italian-speaking, expert&nbsp;guide</span>.
                </tfoot>
              </td>
            </tr>

        </tbody>
      </table>
    </div>
  </div>

    <!-- learn: for assistive screen-readers: `aria-describedby="detail"`, for SEO bots: `data-parent="departure-dates"` -->
    <!-- debug: ARIA ROLES: https://www.w3.org/TR/wai-aria/#treegrid -->
    <!-- debug: ARIA rol subtitle: css-tricks.com/html-for-subheadings-and-headings/ -->
    <!-- learn: stackoverflow.com/questions/18761682/semantic-of-nested-tables-and-table-header -->

    <!-- learn: sticky -->











  </article>
</section>

<svelte:head>
  <title>{title}</title>
</svelte:head>