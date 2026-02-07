
import { generateArticleSummary } from '@/lib/ai'
import { StreamingTextResponse } from 'ai'

export async function POST(req: Request) {
  const { article } = await req.json()
  const result = await generateArticleSummary(article)
  return new StreamingTextResponse(result.textStream)
}
