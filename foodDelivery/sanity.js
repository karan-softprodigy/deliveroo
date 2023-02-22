import { createClient } from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'i1yzm95p',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-02-21'
});

//RUN this add exception for localhost 3000 CORS policy
// sanity cors add https://localhost:3000

// const builder = imageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source)

export default client