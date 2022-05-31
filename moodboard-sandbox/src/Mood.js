import { Link } from "react-router-dom";

const Mood = () => {
    return ( 
        <div className="mood">
            <h1>'tis witching season</h1>
            <img src="https://lh3.googleusercontent.com/nuRfpVi60njfv6ee3_HxEPS7NHebd9cxioW6C7-H8YUR74h0UWUP_lOiPDMIiTIO7eBSSnuu4xxuoCNxjOQTQ352efiTvQWOHMmt-Q"/>
            <p>fullscreen</p>
            <Link to="/">want this as your screensaver?</Link>
        </div>
     );
}
 
export default Mood;