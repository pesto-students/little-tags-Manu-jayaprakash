import React from 'react';
import './MenuItem.styles.scss';
import { withRouter } from 'react-router-dom';

function MenuItem({title, imageUrl, size, history, linkUrl, match}) {

    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
            <div className="background-image"
                style={{
                    backgroundImage : `url(${imageUrl})`
                }}
            />
            <div className="content">
                <div className="title">{title}</div>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);
