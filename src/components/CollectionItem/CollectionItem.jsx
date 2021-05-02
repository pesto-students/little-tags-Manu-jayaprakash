import React from 'react'
import './CollectionItem.styles.scss';

function CollectionItem({id, name, imageUrl, price}) {
    return (
        <div className="collection-item">
            <div className="background-image" 
                style={{
                    backgroundImage: `url(${imageUrl})` 
                }}
            />
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            
        </div>
    )
}

export default CollectionItem
