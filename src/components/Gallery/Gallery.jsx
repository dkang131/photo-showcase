import { photos } from "../../data/photos";
import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-grid">
        {photos.map((photo) => (
          <article className="gallery-item" key={photo.id}>
            <img
              src={photo.image}
              alt={photo.title}l
              className="gallery-image"
            />

            <div className="gallery-info">
              <h3>{photo.title}</h3>
              <p>
                {photo.location} · {photo.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;