const photos = [
  {
    src: "/Hero_img_1.jpg",
    alt: "Hero img",
  },
  {
    src: "/Investment_img_1.jpg",
    alt: "Hero img",
  },
  {
    src: "/IMG_3.jpg",
    alt: "Hero img",
  },
  {
    src: "/IMG_4.jpg",
    alt: "Hero img",
  },
  {
    src: "/IMG_5.jpg",
    alt: "Hero img",
  },
  {
    src: "/IMG_6.jpg",
    alt: "Hero img",
  },
  {
    src: "/IMG_7.jpg",
    alt: "Hero img",
  },
  {
    src: "/IMG_8.jpg",
    alt: "Hero img",
  },
  {
    src: "/IMG_9.jpg",
    alt: "Hero img",
  },
  {
    src: "/IMG_10.jpg",
    alt: "Hero img",
  },
];
const PhotoGallery = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 max-w-[1800px] mx-auto w-full">
      {photos.map((photo, i) => (
        <div key={i}>
          <img
            className="w-full h-auto object-cover"
            src={photo.src}
            alt={photo.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
