import React from "react";
// import Photo from "../images/book.jpg";


function Card({book}) {
    const [show, setShow] = React.useState(false);
    const [bookItem, setBookItem] = React.useState();
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail != undefined && amount != undefined)
                    {
                        return(
                            <>
                                <div 
                                className="card"
                                onClick={() => 
                                {setShow(true), setBookItem(item)}
                                }
                                >
                                    <img src={thumbnail}/>
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                        <p className="amount">&#8377;{amount}</p>
                                </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={() => setShow(false)}/>
                            </>
                        )
                    }
                })
            }
        </>
    )
}
export default Card;