import { Product, RelatedProduct } from '../types';

export const products: Product[] = [ 
  {
    id: 'wine-tuscany-red',
    name: 'WINE',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1920',
    price: 89.95,
    category: 'Premium',
    description: 'A masterpiece of viticulture, this premium aged red wine from Tuscany embodies generations of winemaking excellence. Rich and full-bodied, with an intricate tapestry of dark fruits and oak notes, perfectly balanced for those extraordinary moments.',
    details: {
      origin: 'TUSCANY, ITALY',
      alcohol: '14.5%',
      volume: '750ML',
      aging: '24 MONTHS',
      type: 'RED WINE',
      grape: 'SANGIOVESE'
    }
  },
  {
    id: 'beer-craft-ipa',
    name: 'BEER',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=1920',
    price: 24.95,
    category: 'Craft',
    description: 'An artisanal masterpiece crafted for the discerning palate. This premium IPA showcases rare hop varieties, creating a symphony of bold flavors with subtle citrus undertones and a remarkably smooth finish.',
    details: {
      origin: 'PORTLAND, USA',
      alcohol: '6.8%',
      volume: '330ML',
      style: 'IPA',
      ibu: '65 IBU',
      hops: 'CITRA, MOSAIC'
    }
  },
  {
    id: 'spirits-london-gin',
    name: 'SPIRITS',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=1920',
    price: 129.95,
    category: 'Luxury',
    description: 'A testament to artisanal distillation, this small-batch gin harmoniously blends 23 carefully selected botanicals. Each sip reveals layers of complexity, from delicate florals to exotic spices, creating an unparalleled tasting experience.',
    details: {
      origin: 'SCOTLAND, UK',
      alcohol: '43%',
      volume: '700ML',
      type: 'LONDON DRY GIN',
      botanicals: '23 VARIETIES',
      distillation: 'COPPER POT'
    }
  },
  {
    id: 'wine-bordeaux-vintage',
    name: 'WINE',
    image: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&q=80&w=1920',
    price: 299.95,
    category: 'Luxury',
    description: 'An exceptional vintage Bordeaux that represents the pinnacle of winemaking. This rare bottle offers an unparalleled experience with its complex bouquet and remarkable aging potential.',
    details: {
      origin: 'BORDEAUX, FRANCE',
      alcohol: '13.5%',
      volume: '750ML',
      aging: '36 MONTHS',
      type: 'RED WINE',
      grape: 'CABERNET BLEND'
    }
  },
  {
    id: 'beer-munich-pilsner',
    name: 'BEER',
    image: 'https://images.unsplash.com/photo-1571767454098-246b94fbcf70?auto=format&fit=crop&q=80&w=1920',
    price: 12.95,
    category: 'Classic',
    description: 'A traditional German pilsner that stays true to its roots. Clean, crisp, and refreshing with subtle hop character and perfect carbonation.',
    details: {
      origin: 'MUNICH, GERMANY',
      alcohol: '4.8%',
      volume: '500ML',
      style: 'PILSNER',
      ibu: '35 IBU',
      hops: 'HALLERTAU'
    }
  },
  {
    id: 'spirits-highland-whisky',
    name: 'SPIRITS',
    image: 'https://images.unsplash.com/photo-1514218953589-2d7d37efd2dc?auto=format&fit=crop&q=80&w=1920',
    price: 499.95,
    category: 'Ultra Premium',
    description: 'A rare 25-year-old single malt whisky aged in specially selected oak casks. This exceptional spirit offers unparalleled complexity and depth.',
    details: {
      origin: 'HIGHLANDS, SCOTLAND',
      alcohol: '46%',
      volume: '700ML',
      type: 'SINGLE MALT WHISKY',
      aging: '25 YEARS',
      cask: 'SHERRY OAK'
    }
  }
];

export const categories = [
  'ALL',
  'Classic',
  'Craft',
  'Premium',
  'Luxury',
  'Ultra Premium'
];

export const priceRanges = [
  { label: 'Under $25', range: [0, 25] },
  { label: '$25 - $50', range: [25, 50] },
  { label: '$50 - $100', range: [50, 100] },
  { label: '$100 - $250', range: [100, 250] },
  { label: '$250+', range: [250, Infinity] }
];

export const relatedProducts: RelatedProduct[] = [
  {
    id: 'champagne-reserve',
    name: 'CHAMPAGNE RESERVE',
    image: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?auto=format&fit=crop&q=80&w=1920',
    price: 149.95,
    description: 'VINTAGE CHAMPAGNE, AGED TO PERFECTION'
  },
  {
    id: 'craft-stout',
    name: 'CRAFT STOUT',
    image: 'https://images.unsplash.com/photo-1571767454098-246b94fbcf70?auto=format&fit=crop&q=80&w=1920',
    price: 29.95,
    description: 'RICH AND CREAMY WITH COFFEE NOTES'
  },
  {
    id: 'aged-whiskey',
    name: 'AGED WHISKEY',
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=80&w=1920',
    price: 189.95,
    description: 'SINGLE MALT, 18 YEARS MATURED'
  }
];