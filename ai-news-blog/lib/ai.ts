
import { createOpenAI } from '@ai-sdk/openai'
import { streamText } from 'ai'

const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY })

export function generateArticleSummary(article: { title: string; description?: string }) {
  return streamText({
    model: openai('gpt-4o-mini'),
    prompt: `Summarize this news article:\nTitle: ${article.title}\n${article.description || ''}`,
  })
}
