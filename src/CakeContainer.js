import { connect } from "react-redux"
import { buyCake } from "./components/redux"

// default export is below as connect()
const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of Cakes: {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// access redux state/properties in component - mapping
const mapStateToProps = state => {
    return {
        numOfCake: state.numOfCake
    }
}

// dispatch action in component - mapping
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

// connect react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)