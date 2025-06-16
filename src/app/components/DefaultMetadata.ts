import { Metadata } from "next/types";

const defaultMetadata = (
  title: string,
  description: string,
  url: string,
  images: string[]
): Metadata => {
  const fullTitle = `${title} | PassoLento`;
  const fullUrl = `https://passolento.com${url}`;
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(fullUrl),
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: "PassoLento",
      locale: "it_IT",
      type: "website",
      images: images.map(image => ({
        url: image,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ],
    }
  };
};

export default defaultMetadata;