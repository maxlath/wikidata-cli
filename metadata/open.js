module.exports = {
  args: '<entity>',
  description: "open the entity's page on Wikidata website",
  options: {
    lang: true
  },
  examples: [
    { args: 'Q44559', comment: 'open https://www.wikidata.org/wiki/Q44559 in your default browser' },
    { args: 'Q44559 --wikipedia', comment: 'open the article on Exoplanets in Wikipedia' },
    { args: 'Q44559 --wikipedia --lang pt', comment: 'open the article on Exoplanets in the Portugese Wikipedia' },
    { args: 'Q44559 --url', comment: 'outputs the URL without opening the browser' }
  ]
}