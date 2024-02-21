import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ba4612a07e41422f87584493c9260c2e&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false })
    }

    handelprevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ba4612a07e41422f87584493c9260c2e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })

    }

    handelnextclick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ba4612a07e41422f87584493c9260c2e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    render() {

        return (

            <div className="container my-3">
                <h1 className='text-center'>N.E.W.S - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url} >
                            <NewsItem title={element.title ? element.title.slice(0, 43) : ""} description={element.description ? element.description.slice(0, 88) : " "} imageURL={element.urlToImage} newsUrl={element.url} />
                        </div>

                    })}
                </div>
                <div className=" d-flex container justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handelprevclick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handelnextclick} >Next &rarr;</button>

                </div>
            </div>

        )
    }
}

export default News
