import React from "react";
import Card from "./Card";
import axios from "axios";

function Main() {
    const [search, setSearch] = React.useState("");
    const [bookData, setBookData] = React.useState([]);

    const searchBook=(evt) => {
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBI7w9JfGzUp8CZg22K-DRgI_RVqYlnteI'+'maxResults=40')
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return (
        <div>
            <div className="header">
                <div className="row1">
                   <h1>A room without books is like <br></br>
                    a body without a soul</h1>
                </div>
                <div className="row2">
                   <h2>Find Your Book</h2>
                   <div className="search">
                       <input
                       type="text"
                       placeholder="Book Title "
                       value={search}
                       onChange={event => 
                       setSearch(event.target.value)
                       }
                       onKeyPress={searchBook}
                       />
                       <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                       <img src="./src/images/rain-solo-time.gif"/>
                </div>
            </div>
            <div className="container">
                {
                   <Card book={bookData}/>
                }
            </div>
        </div>
    )
}

export default Main;