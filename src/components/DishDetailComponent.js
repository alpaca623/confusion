import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal} from 'reactstrap';
import { Link } from 'react-router-dom';

class CommentForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            isModalOpen : false
        }
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    render(){
        return(
            <div>
                <Button outline color="secondary">✎Submit comment</Button>
                <Modal isOpen={this.state.isModalOpen}>

                </Modal>
            </div>
        )
    }

}

const RenderDish = ({dish}) => {
    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
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
                <div>{commentList}</div>
                <CommentForm />
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}


const DishDetail = (props) => {
    const { dish, comments } = props;
    console.log(props);
    if(dish){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={comments} />
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
};

export default DishDetail;