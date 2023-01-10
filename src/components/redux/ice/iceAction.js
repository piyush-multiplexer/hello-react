import { BUY_ICE } from './iceTypes'

export const buyIce = (number = 1) => {
    return {
        type: BUY_ICE,
        payload: number
    }
}