import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Footer from './Footer'

export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 8,
        cateogry: 'general',


    };


    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        cateogry: PropTypes.string,
    };
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
        document.title = `N.E.W.S - ${this.capitalizeFirstLetter(this.props.cateogry)}`
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cateogry}&apiKey=ba4612a07e41422f87584493c9260c2e&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false })
    }

    handelprevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cateogry}&apiKey=ba4612a07e41422f87584493c9260c2e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
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
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cateogry}&apiKey=ba4612a07e41422f87584493c9260c2e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
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
            <>
                <div className="container my-3">
                    <h1 className='text-center'>N.E.W.S - {this.capitalizeFirstLetter(this.props.cateogry)}</h1>
                    <hr />

                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-3" key={element.url} >
                                <NewsItem title={element.title ? element.title.slice(0, 43) : ""} description={element.description ? element.description.slice(0, 88) : " "} imageURL={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} name={element.source.name} />
                            </div>

                        })}
                    </div>
                    <div className=" d-flex container justify-content-between my-3">
                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handelprevclick}>&larr; Previous</button>
                        <button disabled={(this.state.page > Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-dark" onClick={this.handelnextclick} >Next &rarr;</button>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default News