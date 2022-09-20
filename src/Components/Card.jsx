import React, { useState } from "react";
import Modal from "./Modal";
const Card = ({ book }) => {

    const [show,setShow] = useState(false);
    const [bookItem,setItem] = useState();
    console.log(book)
    return (
        <>
            {
                book.map((item, index) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    
                        return (
                            <div key={"book_" + index}>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </div>
                        )
                    
                    
                })
            }

        </>
    )
}
export default Card;