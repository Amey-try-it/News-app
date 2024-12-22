import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getNews = async () => {
            try {
                const { data } = await fetchNews();
                setArticles(data.articles);
            } catch (err) {
                setError('Failed to fetch news');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getNews();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>News Articles</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
