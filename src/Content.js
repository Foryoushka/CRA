import React from 'react';

function Content() {

    function clickButtonHandler(value){
        console.log('Clicked!' + value)
    };

    function inputHandler(e){
        console.log(e.target.value)
    };
    return (
        <main>
            <div className="container">
                <h1>My React Project</h1>
                <input type="text" onChange={inputHandler}/>

                <button  onClick={() => clickButtonHandler(1)}>Add one</button>
                <button  onClick={() => clickButtonHandler(2)}>Add two</button>

            </div>
        </main>
    );
}

export default Content;

