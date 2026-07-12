import { ChatOpenAI } from '@langchain/openai'
import { OPENAI_ENDPOINT, OPENAI_KEY, OPENAI_MODEL } from '../config.ts'
import { BaseChatModel } from '@langchain/core/language_models/chat_models'

export const model: BaseChatModel = new ChatOpenAI({
  model: OPENAI_MODEL,
  apiKey: OPENAI_KEY,
  configuration: { baseURL: OPENAI_ENDPOINT },
  temperature: 0.4,
  maxRetries: 2,
  timeout: 60000
})
