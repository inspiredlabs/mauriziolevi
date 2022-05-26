async function get() {
  const endpoint0 = await fetch(`http://kel12.therebelwatchtower.net/aree-geografiche`);
  const endpoint1 = await fetch(`http://kel12.therebelwatchtower.net/viaggi-in-evidenza`);
  const endpoint2 = await fetch(`http://kel12.therebelwatchtower.net/viaggi-in-partenza`);
  const continents = await endpoint0.json();
  const spotLight = await endpoint1.json();
  const upcomingDepartures = await endpoint2.json();
  if (upcomingDepartures) {
    return {
      body: { continents, spotLight, upcomingDepartures }
    };
  }
  return {
    status: 404
  };
}
export { get };
