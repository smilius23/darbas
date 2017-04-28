// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */

fs.readFile('src/index.ejs', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  fs.writeFile('dist/index.ejs', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.ejs written to /dist'.green);
  });
});
