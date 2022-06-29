import getNews from "../utils/getNews";
import { useState, useEffect } from "react";
import type { Article, Category } from "../types/news.types";
import { Cache } from "@raycast/api";

const cache = new Cache();

const useNews = () => {
  const [news, setNews] = useState<Array<Article>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      let data: any = null;

      const cachedData = cache.get("news");
      if (cachedData) {
        const cachedNews = JSON.parse(cachedData);
        setNews(cachedNews);
      }

      try {
        data = await getNews();
      } catch (error) {
        setError(true);
        return error;
      }

      const articles: Article[] = data.map(
        (article: any): Article => ({
          title: article.headline,
          description: article.description,
          url: article.links.web.href,
          imageURL: article.images[0].url,
          imageCaption: article.images[0].caption,
          publishedAt: article.published,
          categories: article.categories.map(
            (category: any): Category => ({
              id: category.id,
              name: category.description,
              type: category.type,
            })
          ),
        })
      );

      setNews(articles);
      setLoading(false);

      cache.set("news", JSON.stringify(articles));
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};

export default useNews;
