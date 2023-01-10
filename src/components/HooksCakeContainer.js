import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { buyCake } from "./redux"

export const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.numOfCake)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of Cakes: - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>But Cake</button>
        </div>
    )
}