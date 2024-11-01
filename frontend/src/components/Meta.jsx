import { Helmet } from 'react-helmet-async';

const Meta = ({ 
  title = '360DistinctRealEstate', 
  description = 'Transforming dreams into enduring legacies for generations.', 
  keywords = 'properties, shared apartments available, properties for sale in lagos, real estate websites in Nigeria, properties for rent in lagos, shortlets properties in lagos, apartments for sale in lekki, flats for sale in lagos, duplex for sale in lekki, duplex for rent in lekki', 
  canonical 
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default Meta;