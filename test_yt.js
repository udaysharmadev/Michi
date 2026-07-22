const ytSearch = require('yt-search');

async function test() {
  try {
    const r = await ytSearch('react context api tutorial english');
    const videos = r.videos;
    if (videos && videos.length > 0) {
      console.log('Top result:', videos[0].title, videos[0].url);
    } else {
      console.log('No results found.');
    }
  } catch (e) {
    console.error(e);
  }
}
test();
