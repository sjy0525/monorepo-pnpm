//我们将pkga作为pkgb的依赖项引入
import {isEven} from '../pkga'

export const isOdd=(x:number)=>!isEven(x)