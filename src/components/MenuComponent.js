import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDish : null
        };
    }

    render(){
        const menu = this.props.dishes.map(({ id, image, name }) => {
            return(
                <dic className="col-12 col-md-5 m-1">
                    <Card key={id} onClick={() => this.props.onClick(id)}>
                        <CardImg width="100%" src={image} alt={name} />
                        <CardImgOverlay>
                            <CardTitle>{name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </dic>
            );
        });

        return(
            <div className="row">
                {menu}
            </div>
        )
    }
}

export default Menu;