import React from "react";
// import Photo from "../images/book.jpg";


function Modal({show, item, onClose}) {
    if(!show)
    {
    return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
    <>
      <div className="overlay">
        <div className="overlay-innner">
            <button className="close" onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
            <div className="inner-box">
                <img src={thumbnail}/>
                <div className="info">
                    <h1>{item.volumeInfo.title}</h1>
                    <h3>{item.volumeInfo.authors}</h3><br/>
                    <h4>{item.volumeInfo.publisher} <span> {item.volumeInfo.publishedDate}</span></h4><br/>
                    <a href={item.volumeInfo.previewLink}><buton>More</buton></a>
                </div>
            </div>
            <div className="description">
            {item.volumeInfo.description}
            </div>
        </div>
      </div>
    </>
    )
}

export default Modal;