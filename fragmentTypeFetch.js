require('dotenv').config()
const fs = require('fs')
const fetch = require('node-fetch')
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env
console.log('CONTENTFUL_ACCESS_TOKEN', CONTENTFUL_ACCESS_TOKEN)
const host = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`

fetch(`${host}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
  },
  body: JSON.stringify({
    variables: {},
    operationName: '',
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then((result) => result.json())
  .then((result) => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter((type) => type.possibleTypes !== null)
    result.data.__schema.types = filteredData
    fs.writeFile('./lib/fragmentTypes.json', JSON.stringify(result.data), (err) => {
      if (err) {
        console.error('Error writing fragmentTypes file', err)
      } else {
        console.log('Fragment types successfully extracted!')
      }
    })
  })
