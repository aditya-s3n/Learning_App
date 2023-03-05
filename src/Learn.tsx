import { useState } from "react";
import React from "react";
import LoadingBar from "./loadingbar";
import { Button, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImportantVideo from "./easteregg";
import makeBackendRequest from "./utils/chat_gpt";



function Learn() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState(["Please Input Something"]);
    const [progress, setProgress] = useState(0);
    const [showProgressBar, setShowProgressBar] = useState(false);
    const [easterEgg, setEasterEgg] = useState(false);

    async function getPrompt() {
        startProgressBar();

        if (prompt === "") {
            setResult(["Please Input Something"]);
        } else if (prompt === "dogaplan") {
            setEasterEgg(true);
        } else {
            let data: any = await makeBackendRequest({ prompt: prompt });
            data = data?.split("\n");
            setResult(data);
        }
    }

    async function handleKeyDown (event: any) {
        if (event.key === 'Enter') { 
            await getPrompt();
        }
    };
    
  
    const startProgressBar = () => {
      setShowProgressBar(true);
      const intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(intervalId);
            setShowProgressBar(false);
            return prevProgress;
          }
          return prevProgress + 10;
        });
      }, 1000);
    };

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

            {easterEgg && <ImportantVideo />}
            
            <h3 className="ms-5">Prompt:</h3>
            <div className="input-group px-5 input-group-lg mt-2">
                <input type="text" className="form-control" placeholder="Type your topic..." aria-label="Prompt" aria-describedby="button-addon2" 
                    value={prompt}
                    onChange={event => {
                        setPrompt(event.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <button 
                type="button" 
                className="btn btn-lg btn-success ms-5 mt-2"
                onClick={async () => {
                    await getPrompt();
                }} 
            >Start Learning!</button>

            {  
                <div className="ms-5 my-5">
                    <h1>Result:</h1>
                    {result.map((value) => {
                        return <p className="fs-4 white-space: pre-line">{value}</p>
                    })}
                </div>
            }

            {showProgressBar && <ProgressBar now={progress} animated />}
        </div>
    );
}

export default Learn;