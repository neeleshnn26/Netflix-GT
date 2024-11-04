import { GEMINI_KEY } from './constants';

const { GoogleGenerativeAI } = await import('@google/generative-ai')

export const genAI = new GoogleGenerativeAI(GEMINI_KEY);

