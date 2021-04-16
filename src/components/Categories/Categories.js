import React from 'react'
import './Categories.css'

const categoriesImages = [
      {
        title: "Women",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      },
      {
        title: "Men",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      },
      {
        title: "Jwellery",
        imageUrl: "https://images.unsplash.com/photo-1559560864-854edd2b01e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      },
      {
        title: "Gadgets",
        imageUrl: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      }
]

function Categories() {
    return (
        <div className="categories">
            {categoriesImages.map((image) => {
                return (
                    <div className="categories-images">
                        <img src={image.imageUrl} alt="category"  />
                        <div className="shop-now">{image.title}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default Categories
