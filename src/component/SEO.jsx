import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'SoftSell - Turn Unused Software into Cash',
  description = 'Sell your leftover licenses in minutes with SoftSell. Fast, secure, and hassle-free process.',
  keywords = 'software resale, license resale, software marketplace, sell software licenses',
  canonicalUrl = 'https://softsell.com',
  ogImage = '/og-image.jpg',
  twitterHandle = '@softsell'
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SoftSell" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;