import { BUY_CAKE } from "./cakeTypes"

export const buyCake = () => {
    console.log(1)
    return {
        type: BUY_CAKE // type-const-convention 
    }
}