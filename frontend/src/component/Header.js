import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell
} from "@novu/notification-center";
import "../css/Header.css"

const Header = () => {
    function onNotificationClick(message) {
        // your logic to handle the notification click
        if (message?.cta?.data?.url) {
            window.location.href = message.cta.data.url;
        }
    }
    return (
        <div className='bell'>
            <div className="intro">
                <h1 className="title">Play with the digest engine!</h1>
                <p className="desc">Don't know how to? Start <a href="https://docs.novu.co/platform/digest/">here</a>.</p>
            </div>
            <div className="center">

                <NovuProvider subscriberId={'digestSub'} applicationIdentifier={process.env.REACT_APP_YOUR_APP_ID_FROM_ADMIN_PANEL}>
                    <PopoverNotificationCenter onNotificationClick={onNotificationClick}>
                        {({ unseenCount }) =>
                            <NotificationBell unseenCount={unseenCount} />}
                    </PopoverNotificationCenter>
                </NovuProvider>
            </div>
        </div>
    );
};

export default Header