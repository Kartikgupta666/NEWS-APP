import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        // this is called as D-Structuring
        let { title, description, imageURL, newsUrl, date, author } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ "width": " 18rem" }}>
                    <img src={!imageURL ? "https://th.bing.com/th/id/OIP.4nnSSvpXBhSd41TFRk7YygHaEK?rs=1&pid=ImgDetMain" : imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted"> By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small></p>

                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
