export async function get() {

  /* fix: design work is ommited for testing endpoints */
  const leviNations = await fetch(`http://kel12.therebelwatchtower.net/levi-nations`);

  const nations = await leviNations.json(); // `/`

  if ( nations ) {
    return {
      body: { nations }
    }
  }

  return {
    status: 404
  };

}
