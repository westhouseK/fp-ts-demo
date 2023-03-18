import { pipe } from 'fp-ts/function';

const main1 = () => {
    const len = (s: string): number => s.length
    const double = (n: number): number => n * 2

    const res = pipe('aaa', len, double)
    console.log(res)
};
const main = () => {
    const a = pipe(1, (v) => v.toString(), (v) => v + 'a')
    console.log(a)
}

main();