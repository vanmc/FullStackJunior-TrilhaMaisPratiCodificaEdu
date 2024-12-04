import React, { useState } from "react"
import "./ImageGallery.css"

const images = [
  "https://s2-techtudo.glbimg.com/VE3praETRSqY-1K314GQeXzYBIY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/1/v/6ZW6rTSnmHcSu6p6j09g/495115eda15fed10018.33461980-tloupii-review-screenshot-19.jpg",
  "https://psxbrasil.com.br/wp-content/uploads/2021/09/TLOU2.jpg",
  "https://files.tecnoblog.net/wp-content/uploads/2020/06/the-last-of-us-part-2-1-1.jpg",
  "https://www.oficinadanet.com.br/media/post/51939/1200/the-last-of-us-part-ii-remastered-20240114173711.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjS0MejHMyX27cLBnrHTkrecZIOsCIyEaNFVr_sr-W1E-SwLWx5DiRffzjI9XnhoSx5bYeuSiQUKf2xZXSGUnugIcaN-Kt_oFhKlsJBjkGUhxCJlxK9jTD5AOs1dC7IZ6lvFZ3ghZ_Z_oA/s1200/The-Last-of-US-Part-2-ellie-and-dina.jpg"
]

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = (index) => {
    setSelectedImage(images[index])
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
    setCurrentIndex(nextIndex)
  }

  const showPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setSelectedImage(images[prevIndex])
    setCurrentIndex(prevIndex)
  }

  return (
    <div className="gallery-container">
      <h1>Galeria de Imagens - The Last Of Us Part II</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            className="gallery-image"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <button className="prev-button" onClick={showPreviousImage}>
              &#8592;
            </button>
            <img
              src={selectedImage}
              alt="Imagem Ampliada"
              className="modal-image"
            />
            <button className="next-button" onClick={showNextImage}>
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
