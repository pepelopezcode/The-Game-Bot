import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logout from './loginComponents/Logout';


function Home({user, scoreData, individualScoreData, globalScoreData}) {
    
    return (
        <>
            <Logout  />
            <h1 className="header">Wordle</h1>
            <Link to='/wordle' className="card">
                <div className="inner">
                    <h3 className="title" >Wordle</h3>
                </div>
                
                
            </Link>
            <ol className="scores">
                <p>Your High-Scores:</p>
                    {individualScoreData !== [] ? individualScoreData.slice(0, 5).map(score =>{return (<li key={score.created_at} >Username:{score.user.username}   Score:{score.score}</li>)}) : null}
                </ol>
                <ol className="scores">
                    <p>Global High-Scores:</p>
                    {globalScoreData !==[] ? globalScoreData.map(score => {return (<li key={score.created_at} >Username:{score.user.username}   Score:{score.score}</li>)}) : null}
                </ol>
        </>
    )
}

export default Home;