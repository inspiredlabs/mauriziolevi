export async function get() {

  /* fix: design work is ommited for testing endpoints */
  const leviHomepage = await fetch(`http://kel12.therebelwatchtower.net/levi-homepage`);

  const homepage = await leviHomepage.json(); // `/`

  if ( homepage ) {
    return {
      body: { homepage }
    }
  }

  return {
    status: 404
  };

}
