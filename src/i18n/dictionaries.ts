import 'server-only';
import type ar from '@/messages/ar.json';

export type Dictionary = typeof ar;

export const getDictionary = async (): Promise<Dictionary> => {
  const messages = await import('@/messages/ar.json');
  return messages.default;
};
