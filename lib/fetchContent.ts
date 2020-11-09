const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export async function fetchContent(
  operationsDoc: string,
  operationName: string,
  variables?: { [key: string]: any }
) {
  try {
    const result = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName,
        }),
      }
    )
    const json = await result.json()

    if (!!json.errors) {
      console.warn(
        `Errors in GraphQL for "${operationName}":`,
        json.errors.map((m: any) => m.message)
      )
    }

    return json.data
  } catch (error) {
    console.error(
      `There was a problem retrieving entries with the query ${operationName}`
    )
    console.error(error.message)
  }
}
