import React from 'react';

const Chat = () => {
    return (
        <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-title">
                                    <h1 className="center-align">Chat</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div id="nuevo_mensaje" className="col s10 offset-s1 scroll">
                                        
                                </div>
                            </div>
                            <div className="card-action">
                                <div className="row">
                                    <div className="col s9">
                                        <div className="input-field">
                                            <i className="material-icons prefix">mode_edit</i>
                                            <textarea id="mensaje" className="materialize-textarea" placeholder="Enviar mensaje"></textarea>
                                            
                                        </div>
                                    </div>
                                    <div className="col s3">
                                        <div className="input-field">
                                            <button className="btn btn-outline-secondary" type="button" id="enviar">Enviar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Chat;