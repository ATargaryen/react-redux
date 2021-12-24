import { connect } from "react-redux";
import User from "../Components/User";


const mapStateToProps=state=>({
    data:state.IncreementReducer
})
const mapDispatchToProps=dispatch=>({
    
})
export default connect(mapStateToProps,mapDispatchToProps)(User)