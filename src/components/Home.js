import React from 'react';

import Logout from './loginComponents/Logout';
import WordlePage from './wordle/WordlePage';

function Home({setLoggedIn}){
    return (
        <>
        <Logout setLoggedIn={setLoggedIn} />
        <WordlePage />
        </>
    )
}

export default Home;