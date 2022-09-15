import { Card,Button } from "react-bootstrap"
import { Article } from "../types/article"
interface ArticlesProps {
    article: Article
  }




  const MainArticle = ({article}:ArticlesProps) => {


    return(
        <div>
 <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
         {article.summary}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
        </div>
    )
}


export default MainArticle