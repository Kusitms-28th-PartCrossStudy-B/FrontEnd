export const articleKeys = {
  all: ['article'] as const,
  detail: (id: number) => [...articleKeys.all, id] as const,
};
