import { useState } from "react";
import React from "react";

function Learn() {
    const [prompt, setPrompt] = useState("");

    return (
        <div>

            <div className="my-5 mx-5">
                <h1>How it works:</h1>
                <ol>
                    <li><p>Type what you want to learn, and see the results come in.</p></li>
                    <li><p>Will give you a options on how to get started, and where to go after.</p></li>
                    <li><p>GET A VALID CIRUCULUM</p></li>
                </ol>
                
                
                <figure className="mt-5">
                    <blockquote className="blockquote">
                        <p>Everything is available basically for free. You can learn anything you want for free.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                       Elon Musk (doppelganger of Yi Long Ma)
                    </figcaption>
                </figure>
            </div>

            <h3 className="ms-5">Prompt:</h3>
            <div className="input-group px-5 input-group-lg mt-2">
                <input type="text" className="form-control" placeholder="Type your topic..." aria-label="Prompt" aria-describedby="button-addon2" 
                    value={prompt}
                    onChange={event => {
                        setPrompt(event.target.value);
                    }}
                />
            </div>
            <button type="button" className="btn btn-lg btn-success ms-5 mt-2" >Start Learning!</button>

        </div>
    );
}

export default Learn;