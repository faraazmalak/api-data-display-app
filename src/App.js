import React, {useState} from 'react';
import './App.scss';

import {Renderer} from "./components/Renderer/Renderer";
import {User, userAttributes, userProviderEffect, userProviderConfig} from './components/APIData/User/User'
import {ListRenderer} from './components/Renderer/Plugins/ListRenderer'
import {Provider} from './components/Provider/Provider'
import {createProviderRegister} from "./components/ProviderRegister/ProviderRegister";

function App() {
    console.log('================= APP RENDER ===================')
    const [, updateState] = useState(new Date().getTime());
    const [providerRegister,] = useState(createProviderRegister());


    return (
        <div id="user-app">

            <Provider
                id={userProviderConfig.id}
                url={userProviderConfig.url}
                effects={userProviderEffect}
                updateState={updateState}
                providerRegister={providerRegister}>

                <Renderer
                    provider={providerRegister.getProvider(userProviderConfig.id)}
                    componentToRender={User}
                    componentAttributes={userAttributes}
                    plugin={ListRenderer}/>

            </Provider>


        </div>
    );

}

export default App;
