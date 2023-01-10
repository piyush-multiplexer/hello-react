import { connect } from "react-redux"
import { buyIce } from "./components/redux"
import { useState } from "react"
// default export is below as connect()
const IceContainer = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Ices: {props.numOfIce}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyIce(number)}>Buy {number} Ice</button>
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
        buyIce: number => dispatch(buyIce(number))
    }
}

// connect react component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(IceContainer)