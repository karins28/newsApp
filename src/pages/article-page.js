// import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useLocation, useHistory} from "react-router-dom";

export const ArticlePage = () => {
    // const {state} = this.props.history.location
    // const history = useNavigate();
    const location = useLocation();
    const history = useHistory();

    const { state } = location.state;
    const {urlToImage, title, publishedAt, description} = state;

    return (<div className={"article-page-container"}>
        <div className={"article-container"}>
            <img src={urlToImage} alt={'no image'}/>
            <div className="article-section title"><span>{title}</span></div>
            <div className="article-section published-at">{publishedAt}</div>
            <div className="article-section description">{description}</div>
        </div>
        <button onClick={history.goBack}>Back</button>
    </div>)
}