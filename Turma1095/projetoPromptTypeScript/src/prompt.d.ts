// prompt.d.ts

declare module 'prompt' {
  interface PromptStatic {
    start(): void;
    get(schema: any, callback: (err: any, result: any) => void): void;
  }

  const prompt: PromptStatic;
  export = prompt;
}
