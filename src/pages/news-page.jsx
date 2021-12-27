// import {FilterComponent} from "./components/filter-component";
import {useEffect, useState} from "react";
import axios from "axios";
import {FilterComponent} from "../components/filter-component";
import {Link, useHistory} from "react-router-dom";

/**todo: add api key from .env + add query params for categories + text **/

export const NewsPage = () => {
    const [allArticles, setArticles] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const category = urlSearchParams.get('category');
        if (!category) {
            history.push({
                pathname: '/',
                search: "?" + new URLSearchParams({category: 'business'}).toString()
            })
        }
    }, [])

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const category = urlSearchParams.get('category') || 'business';
        const text = urlSearchParams.get('text') || '';
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${text}&apiKey=${process.env.REACT_APP_API_KEY}`;
        axios.get(url).then(response => {
            const {articles} = response.data;
            setArticles(articles)
        })
    }, [window.location.search]);

    const updateLink = (category, text) => {
        history.push({
            pathname: '/',
            search: "?" + new URLSearchParams({category:category, text:text}).toString()
        });
    };

    const currCategory =  new URLSearchParams(window.location.search).get('category');
    const currText =  new URLSearchParams(window.location.search).get('text');


    return <div>
            <FilterComponent category={currCategory} text={currText} onChange={updateLink}/>
            <div className={"articles"}>
                {allArticles.map((article, key) => {
                    const {urlToImage, title, publishedAt, description} = article;
                    return (<div key={key} className={"article-item"}>
                            <img src={urlToImage} alt={'no image'}/>
                            <div className="article-section title"><span>{title}</span></div>
                            <div className="article-section published-at">{publishedAt}</div>
                            <div className="article-section description">{description? description.substring(80): ''}</div>
                            <Link
                                to={{
                                    pathname: "/article-info",
                                    state: {state: article},
                                }}
                            >click </Link>
                        </div>
                    )
                })
                }
            </div>

        </div>}