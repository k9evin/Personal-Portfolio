import {createClient} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xcd4jifq',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-08-01',
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
