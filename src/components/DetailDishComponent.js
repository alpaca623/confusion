import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

const DetailDish = (props) => {
    const { dish } = props;
    if(dish){
        return(
            <div className="row">
                <dic className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </dic>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
};

export default DetailDish;