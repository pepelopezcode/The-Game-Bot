import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logout from './loginComponents/Logout';


function Home({user, scoreData, individualScoreData, globalScoreData}) {
    
    return (
        <>
            <Logout />
            <Link to='/wordle' >

                <h3>Wordle</h3>
                
            </Link>
            <ol>
                Your High-Scores:
                    {individualScoreData !== [] ? individualScoreData.map(score =>{return (<li>Username:{score.user.username}   Score:{score.score}</li>)}) : null}
                </ol>
                <ol>
                    Global High-Scores:
                    {globalScoreData !==[] ? globalScoreData.map(score => {return (<li>Username:{score.user.username}   Score:{score.score}</li>)}) : null}
                </ol>
        </>
    )
}

export default Home;