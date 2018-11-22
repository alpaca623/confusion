import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

const RenderDish = ({image, name, description}) => {
    return(
        <Card>
            <CardImg top src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )
}

const DishDetail = (props) => {
    const { dish } = props;
    console.log(dish);
    if(dish){
        return(
            <div className="row">
                <dic className="col-12 col-md-5 m-1">
                    <RenderDish {...dish} />
                </dic>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
};

export default DishDetail;