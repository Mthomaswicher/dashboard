import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem, Row, Stack} from "react-bootstrap";

const NewsCenter = () => {

const [news, setNews] = useState([]);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    async function fetchData() {
        try {
            const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/cnn_latest.rss");
            const data = await res.json();
            setIsLoading(true);
            setNews(data.items);
            setIsLoading(false);
        } catch {
            setError(true)
        }
    }
    fetchData();
    console.log(news)
}, []);

return(
    <div className="cardContiner">
    {isLoading ? <p>Loading....,.</p> : null}
    <div className="cardContainer">
    <Carousel controls={false}>
        {news.map((item, i) => {
            return(
                <Carousel.Item key={i}>
                    <Stack>
                    <a href={item.link}>{item.title}</a>
                    <img className="carouselImage" src={item.enclosure.link}></img>
                    </Stack>
                
        
                </Carousel.Item> 
            )
        })}
    </Carousel>
    </div>
</div>
)


}


export default NewsCenter;