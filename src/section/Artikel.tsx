import React, { useEffect, useState } from "react";

interface Article {
    title: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    description: string;
  }

const Artikel = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
        try {
            const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@muhammadrivaldifnni`;
            const response = await fetch(rssUrl);
            const data = await response.json();

            if (data.items) {
                const formatArtikel = data.items.map((item: any) => {
                    const imgMatch = item.content.match(/<img.*?src="(.*?)"/);
                    const thumbnail = imgMatch ? imgMatch[1] : "https://via.placeholder.com/150";

                    return {
                        title: item.title,
                        link: item.link,
                        pubDate: item.pubDate,
                        thumbnail: thumbnail,
                        description: item.description,
                      };
                })
            setArticles(formatArtikel);
            }
        } catch (error) {
            console.error("Error fetching Medium articles:", error);
        }
        };

        fetchArticles();
    }, []);
  return (
    <>
    <section id="articles" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Artikel Terbaru dari Medium
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {new Date(article.pubDate).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-sm line-clamp-2">
                  {article.description.replace(/<[^>]+>/g, "").slice(0, 120)}...
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition"
                >
                  Baca Selengkapnya →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Artikel