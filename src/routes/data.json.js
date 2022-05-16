// load DATA from a server:
export const get = async () => {
	const res = await fetch('https://viaggilevi.vercel.app/data/destinations.json');

	return {
		status: 200,
		body: await res.json()
	}
}


// learn: local development: stackoverflow.com/questions/67944684/how-to-serve-plain-json-files-with-sveltekit
// load DATA from file system w. VITE:
/*
import data from './pretend.json'

export async function get({ res }) {

  return {
    status: 200,
    body: {
      data
    }
  }

}
*/
