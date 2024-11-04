
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
const client = createClient({
  projectId: '2nfoc9wa', 
  dataset: 'production',   
  apiVersion: '2022-03-07',
  useCdn: false,
  returnQuery:true,
});
const builder = imageUrlBuilder(client);
console.log(builder.image(),"-----builder")
export const urlFor = (source) => builder.image(source);

export default client;
