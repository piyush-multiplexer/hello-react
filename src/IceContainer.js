import { connect } from "react-redux"
import { buyIce } from "./components/redux"

// default export is below as connect()
const IceContainer = (props) => {
    return (
        <div>
            <h2>Number of Ices: {props.numOfIce}</h2>
            <button onClick={props.buyIce}>Buy Ice</button>
        </div>
    )
}

// access redux state/properties in component - mapping
const mapStateToProps = state => {
    return {
        numOfIce: state.ice.numOfIce
    }
}

// dispatch action in component - mapping
const mapDispatchToProps = dispatch => {
    return {
        buyIce: () => dispatch(buyIce())
    }
}

// connect react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(IceContainer)