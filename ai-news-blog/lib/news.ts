
import NewsAPI from 'newsapi-ts'
const newsapi = new NewsAPI(process.env.NEWS_API_KEY!)

export async function fetchTopHeadlines() {
  const res = await newsapi.v2.topHeadlines({ language: 'en', pageSize: 10 })
  return res.articles || []
}
