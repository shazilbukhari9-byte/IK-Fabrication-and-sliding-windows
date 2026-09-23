export interface GalleryImage {
  src: string
  alt: string
  caption: string
  category: string
  /** width / height, used so masonry tiles match each photo's real proportions */
  aspect: number
}

/**
 * Real product photos, served from /public/gallery.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/gate-peacock-double-door.jpg',
    alt: 'Finished double-door decorative gate with hand laser-cut peacock motifs',
    caption: 'Peacock Motif Double Gate',
    category: 'Gates',
    aspect: 662 / 661,
  },
  {
    src: '/gallery/grill-gate-installed.jpg',
    alt: 'White safety grill gate installed at a residential entrance',
    caption: 'Residential Safety Grill Gate',
    category: 'Grills',
    aspect: 1200 / 1600,
  },
  {
    src: '/gallery/gate-laser-cut-raw-1.jpg',
    alt: 'Decorative laser-cut gate panel with floral vine pattern, mid-fabrication',
    caption: 'Laser-Cut Floral Gate Panel',
    category: 'Gates',
    aspect: 542 / 720,
  },
  {
    src: '/gallery/prefab-structure-1.jpg',
    alt: 'Large prefab structure wall with steel truss framing and metal sheeting',
    caption: 'Prefab Structure — Steel Frame & Sheeting',
    category: 'Prefab',
    aspect: 1200 / 1600,
  },
  {
    src: '/gallery/grill-decorative-om.jpg',
    alt: 'Decorative wrought iron grill with gold-painted Om motif and scrollwork',
    caption: 'Decorative Grill with Om Motif',
    category: 'Grills',
    aspect: 960 / 1280,
  },
  {
    src: '/gallery/gate-diamond-pattern.jpg',
    alt: 'Fabricated gate panel with riveted diamond geometric pattern',
    caption: 'Diamond-Pattern Gate Panel',
    category: 'Gates',
    aspect: 678 / 900,
  },
  {
    src: '/gallery/gate-laser-cut-raw-2.jpg',
    alt: 'Second decorative laser-cut gate panel with floral vine pattern',
    caption: 'Laser-Cut Vine Gate Panel',
    category: 'Gates',
    aspect: 542 / 720,
  },
  {
    src: '/gallery/workshop-storefront.jpg',
    alt: 'IK Sliding Window workshop storefront in Hinjewadi',
    caption: 'Our Workshop — Hinjewadi Phase-3',
    category: 'Workshop',
    aspect: 720 / 926,
  },
]
