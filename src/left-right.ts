import * as E from 'fp-ts/Either'
import { Either } from "fp-ts/lib/Either";

const fn = (s: string): Either<Error, string> => {
    return s === 'hoge' ? E.right('ok') : E.left(new Error)
}
const hoge = fn('hoge')
console.log(hoge)
const fuga = fn('fuga')
console.log(fuga)