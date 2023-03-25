import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

//components

import Subjects from '../../containers/Subjects/Subjects';

import './applicationContent.css';

import Session from '../../containers/Sessions/Sessions';


const ApplicationContent = (props) => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    return (
        <div
            className={
                showSubMenu
                    ? 'ac-main-container-with-side-menu'
                    : 'ac-main-container-without-side-menu'
            }
        >
            <Switch>
            
                <Route
                    path="/subjects"
                    component={() => (
                        <Subjects setShowSubMenu={setShowSubMenu} />
                    )}
                />
          
                <Route
                    path="/sessions"
                    component={() => (
                        <Session setShowSubMenu={setShowSubMenu} />
                    )}
                />
             
            </Switch>
        </div>
    );
};

export default ApplicationContent;
