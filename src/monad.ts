import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/lib/function'

const jsonParse = (s: string) =>
    pipe(
        E.tryCatch(
            () => JSON.parse(s),
            () => new Error('can not parse')
        ),
        E.chainW((v) => Object.assign(v, { b: 'bbb'}))
    )
jsonParse('{"a": "aaa"}') // Rightがオブジェクトが入っている
jsonParse('aaaaa') // Leftがエラー
