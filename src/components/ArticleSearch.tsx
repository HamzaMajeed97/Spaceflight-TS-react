import { useEffect, useState } from "react";
import { Article } from "../types/article";
import { Row, Col } from "react-bootstrap";
import MainArticle from "./MainArticle";

const ArticleSearch = () => {
  const URL = "https://api.spaceflightnewsapi.net/v3/articles";
  const [article, setArticle] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticle(data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <h1>SpaceFlight Articles</h1>
      <Row>
       
        {article.map((a,id) => (
            <Col key={a.id}>
            <MainArticle article={a} />;
            </Col>
        ))}
    
        
      </Row>
    </div>
  );
};

export default ArticleSearch;
