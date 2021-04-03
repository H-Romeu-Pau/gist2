export interface Gist {
    title: string,
    keywords: string[],
    code: string,
    termCount?: number,
}

export let gists: Gist[] = [
    {
        title: 'simple for loop',
        keywords: ['ts', 'typescript', 'simple', 'for', 'loop'],
        code: `
        for(let i = 0; i < SomeArray.length; i++)
        { 
            // TODO: some logic
        }
        `,
    }
];