import { useState } from 'react';
import './PaintingCard.css'

export default function PaintingCard(props) {

    const { painting, author, location } = props;
    const url = 'https://test-front.framework.team'

    const [isHover, setIsHover] = useState(false);

    const onOver = () => {
        setIsHover(true)
    };
    const onOut = () => {
        setIsHover(false)
    };

    return (
        <div className="painting__card" onMouseEnter={onOver} onMouseLeave={onOut}>
            <div className="card__image">
                <img className="image__painting" src={`${url}${painting.imageUrl}`} alt="painting" />
            </div>
            
            <div className={`card__desc ${isHover ? 'showDesc' : ''}`}>
                <h4 className="desc__title">{painting.name}</h4>
                <div className={`desc__more ${isHover ? '' : 'hidden'}`}>
                    <p className="desc__author">Author: {author.name}</p>
                    <p className="desc__created">Created: {painting.created}</p>
                    <p className="desc__location">Location: {location.location}</p>
                </div>
            </div>
        </div>
    )
}