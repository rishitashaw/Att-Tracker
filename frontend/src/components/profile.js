import React from 'react';
import { useCurrentUser } from '../hook/useCurrentUser';

export default function Profile() {
    const { isLoading, isAuthorized, username } = useCurrentUser();
    return (
        <>
            {isLoading ? <div>Loading...</div> : null}

            {isAuthorized ?
                <>
                    Logged in as {username}
                </> :
                <>
                    You are not logged in

                </>}
        </>)

}