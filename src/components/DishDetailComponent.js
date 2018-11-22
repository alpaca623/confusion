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

const RenderComments = ({comments}) => {
    if(comments){
        const commentList = comments.map(({id, comment, author, date}) => {
            const formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date)));
            return(
                <div className="list-unstyled" key={id}>
                    <div>{comment}</div>
                    <div>--- {author} {formattedDate}</div>
                </div>
            )
        });
        return(
            <div>
                <h4>Comments</h4>
                {commentList}
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}


const DishDetail = (props) => {
    const { dish } = props;
    if(dish){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1"><RenderDish {...dish} /></div>
                <div className="col-12 col-md-5 m-1"><RenderComments {...dish} /></div>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
};

export default DishDetail;