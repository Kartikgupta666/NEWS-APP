import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Footer from './Footer'
import InfiniteScroll from 'react-infinite-scroll-component'
export default function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalresults, setTotalresults] = useState(0)
    const [page, setPage] = useState(1)



    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    document.title = `N.E.W.S - ${capitalizeFirstLetter(props.cateogry)}`


    const updateNews = async () => {
        props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cateogry}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalresults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)

    }
    useEffect(() => {
        updateNews();
    }, [])


    const fetchMoreData = async () => {

        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cateogry}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalresults(parsedData.totalResults)
        setLoading(false)
    };


    return (
        <div>

            <h1 className='text-center'>N.E.W.S - {capitalizeFirstLetter(props.cateogry)}</h1>

            <hr />
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== setTotalresults}
                loader={<Spinner />}
                style={{ "overflow": "hidden" }}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-3" key={element.url} >
                                <NewsItem title={element.title ? element.title.slice(0, 43) : ""} description={element.description ? element.description.slice(0, 88) : " "} imageURL={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} name={element.source.name} />
                            </div>

                        })}
                    </div>
                </div>

            </InfiniteScroll>
            <Footer />
        </div>
    )
}


News.defaultProps = {
    country: "in",
    pageSize: 8,
    cateogry: 'general',
    totalResults: 0

};


News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    cateogry: PropTypes.string,
};