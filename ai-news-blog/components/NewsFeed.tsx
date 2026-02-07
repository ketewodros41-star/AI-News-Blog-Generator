
'use client'
import { useEffect, useState } from 'react'
import { fetchTopHeadlines } from '@/lib/news'

export function NewsFeed() {
  const [articles, setArticles] = useState<any[]>([])
  useEffect(() => {
    fetchTopHeadlines().then(setArticles)
  }, [])
  return (
    <ul className="space-y-4">
      {articles.map((a, i) => (
        <li key={i} className="border p-4 rounded">
          <h2 className="font-semibold">{a.title}</h2>
          <p className="text-sm text-gray-600">{a.description}</p>
        </li>
      ))}
    </ul>
  )
}
