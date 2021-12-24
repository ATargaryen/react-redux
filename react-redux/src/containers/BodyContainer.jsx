import { connect } from "react-redux";
import Body from "../Components/Body";
import { doIncrement } from "../Service/Actions/ActionDoIncreement";


//export default Body;


const mapStateToProps=state=>({
    data:state.IncreementReducer
})
const mapDispatchToProps=dispatch=>({
    doIncreementHandler:data=>dispatch(doIncrement(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Body)