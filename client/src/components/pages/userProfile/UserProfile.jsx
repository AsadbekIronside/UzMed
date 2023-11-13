import { useParams } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import UserCards from "./UserCards";
import UserPayment from "./UserPayment";
import UserSettings from "./UserSettings";

const UserProfile = () => {

    var params = useParams();
    params = params['page'].substring(1);
    // console.log(params);
    switch(params){
        case 'dashboard':return(<div className="user-body"><UserDashboard/><UserCards/></div>);
        case 'cards':return(<div className="user-body"><UserCards/></div>);
        case 'payment-history':return(<div className="user-body"><UserPayment/></div>);
        case 'settings':return(<div className="user-body"><UserSettings/></div>);
        default:break;
    }

}

export default UserProfile;