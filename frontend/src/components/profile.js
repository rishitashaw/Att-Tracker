import React from 'react';
import { useCurrentUser } from '../hook/useCurrentUser';
import '@passageidentity/passage-elements/passage-profile';

export default function Profile() {
    const { isLoading, isAuthorized, username } = useCurrentUser();
    return (
        <>
            {isLoading ? <div>Loading...</div> : null}

            {isAuthorized ?
                <>

                    <passage-profile app-id="rNZekLj0Q12fg8QrhCeea4uy"></passage-profile>
                </> :
                <>
                    You are not logged in

                </>}
        </>)

}