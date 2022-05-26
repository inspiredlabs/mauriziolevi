export async function get() {

  /* fix: design work is ommited for testing endpoints */
  const endpoint0 = await fetch(`http://kel12.therebelwatchtower.net/aree-geografiche`);
	const endpoint1 = await fetch(`http://kel12.therebelwatchtower.net/viaggi-in-evidenza`);
	const endpoint2 = await fetch(`http://kel12.therebelwatchtower.net/viaggi-in-partenza`);
	// const endpoint = "http://192.168.17.129/sveltekit/json.json";

  const continents = await endpoint0.json(); // areas/nations
  const spotLight = await endpoint1.json(); // viaggi in evidenza
  const upcomingDepartures = await endpoint2.json(); // viaggi partenza
  /* Fix: this */

  if (continents, spotLight, upcomingDepartures) {
    return {
      body: { continents, spotLight, upcomingDepartures }
    }
  }

  return {
    status: 404
  };

}
