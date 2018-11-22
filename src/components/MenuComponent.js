import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const RenderMenuItem = ({dish, onClick}) => {
    const {id, image, name} = dish;
    return(
        <Card key={id} onClick={() => onClick(id)}>
            <CardImg width="100%" src={image} alt={name} />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

const Menu = (props) => {
    const {dishes, onClick} = props;
    const menu = dishes.map((dish) =>{
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={onClick} />
            </div>
        );
    });

    return(
        <div className="row">
            {menu}
        </div>
    );
}
export default Menu;