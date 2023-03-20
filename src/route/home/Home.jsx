import { CometChat } from "@cometchat-pro/chat";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CometChatUI } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src";


const Home = () => {
    const [uid, setUid] = useState(null);

    // const location = useLocation();

    // return (
    //     <div className={style.loginContainer}>
    //             <p>Welcome to UWConnect '{location.state.name}' </p>   
    //             <p>This is your home page</p>
    //     </div>
    // );
    
    var appID = process.env.COMETCHAT_APPID;
    const region = "us";
    var authKey = process.env.COMETCHAT_AUTH_KEY;
    appID = "2341304f6c94b6b0"
    authKey = "62a7f4ed9a36e08fe7c0c71c5435fb4fea1e452b"
    console.log(process.env) // undefined
    console.log(process.env.REACT_APP_API_LINK)  // localhost.....

    useEffect(() => {
        console.log("trying to init cometchat", "q32ye")

            const appSetting = new CometChat.AppSettingsBuilder()
                .subscribePresenceForAllUsers()
                .setRegion(region)
                .build();
            CometChat.init(appID, appSetting).then(
                () => {
                    console.log("Initialization completed successfully");
                    CometChat.login("q32ye", authKey);
                },
                (error) => {
                    console.log("Initialization failed with error:", error);
                    // Check the reason for error and take appropriate action.
                }
            ).then(
                (user) => {
                    console.log("Login Successful:", { user });
                },
                (error) => {
                    console.log("Login failed with exception:", { error });
                }
            )

            setUid("q32ye");
            })

    
    return (
        <div style={{ width: "100wh", height: "100vh" }}>
            {/* {console.log('rerendered')} */}
            {uid && <CometChatUI />}
        </div>
    );

    }


export default Home;