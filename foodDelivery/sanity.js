import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'i1yzm95p',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-02-23',
  token: 'sk92ojOZnmEelHNhYtDobx24mvMseIwb1QkrK9VzKfzsPEm3j0UezI1FiWGJK0TQR9yaS50qqIxNwKuug8aV6uocm1Ajy0uq54dKvkX9TefSOeMoFUTIJ1S8IJIZY86DliqlC5ZKSC6crRg9H5oYBWhbi2UbjEGG8INAZVqwVMZ8a0Ie3gGN'
});

//RUN this add exception for localhost 3000 CORS policy
// sanity cors add https://localhost:3000

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)
