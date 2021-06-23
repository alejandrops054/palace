/*Sistema Intelligence 2.0
  Módulo Contratos
  Versión 1.0
  Author: IntregraIT Contratos
  Comentarios: xxxxx
*/
import React, { useState, useEffect } from 'react';
import { CardIcon, Loading, Navigation } from '../index'
import './Panel.css'


const Panel = () => {

    const [loading, setLoading] = useState(true);

    const nameUser = 'Norberto Arévalo';

    const items1 = [
        { nameModule: 'Palace Elite CMS', icon: 'cms', route: '/elite' },
        { nameModule: 'Intelligence Contracts', icon: 'contracts', route: '/new-member' },
        { nameModule: 'Marketing', icon: 'marketing', route: '/marketing' },
        { nameModule: 'Call Center', icon: 'call-center', route: '/call-center' }
    ];

    const items2 = [
        { nameModule: 'Moon Vacation Gateway', icon: 'mvg', route: '/moon-vacation' },
        { nameModule: 'One on One', icon: 'one', route: '/one' },
        { nameModule: 'Commisions', icon: 'commisions', route: 'commisions' }
    ];


    useEffect(() => {
        const stayLoading = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        stayLoading();
    }, []);


    return (
        <>
            {loading
                ? <Loading />
                : (<>

                    <div className="App">
                        <div id="page" className="page">
                            <Navigation />
                            <section className="app-content">
                                <main>
                                    <article className="content-area">
                                        <div className="container text-center pt-3 w-75">
                                            <div className="w-50 mx-auto">
                                                <div className="w-75 mx-auto pb-2">
                                                    <img src="images/brand/systems-logos/negros/logo-palaceelite.svg" alt="Intelligence 2.0" />
                                                </div>
                                            </div>
                                            <div className="w-25 mx-auto">
                                                <div className="w-50 mx-auto pb-2">
                                                    <img src='images/brand/systems-logos/blancos/logo-intell20.svg' alt="Intelligence 2.0" />
                                                </div>
                                            </div>
                                            <h3 className="pt-2 h3 sso-form-title m-0 text-muted">Welcome <span style={{ color: '#233586' }}> {nameUser} </span></h3>
                                            <h2 className="sso-form-title mt-2 mb-3">Where do you want to go today?</h2>

                                        </div>

                                        <div className="container w-75 ">
                                            <div className="cartas">
                                                {items1.map(item => (
                                                    <CardIcon 
                                                        key={item.nameModule}
                                                        title={item.nameModule}
                                                        size={12}
                                                        icon={item.icon}
                                                        route={item.route}
                                                    />
                                                ))}
                                            </div>


                                            <div className="mt-4 px-5 mx-5">
                                                <div className="cartas">
                                                    {items2.map(item => (
                                                        <CardIcon
                                                            key={item.nameModule}
                                                            title={item.nameModule}
                                                            size={12.5}
                                                            icon={item.icon}
                                                            route={item.route}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </main>
                            </section>
                        </div>
                    </div>
                </>
                )
            }
        </>
    );
}

export default Panel;