import './DropDown.css'
import { useState } from 'react';

function DropDown() {
    const [dropDown, setDropDown] = useState(false);
    const [dropRight, setDropRight] = useState(false);

    return (
        <div className="body">
            <h2 className="heading">Drop-Down Menu</h2>
            <div className="content DropDown-content">
                <div className="DropDown-bar">
                    <p className="DropDown-label">My secret is below.</p>
                    <button type="button" onClick={() => {setDropDown(!dropDown)}} className="DropDown-button">{dropDown ? "Collapse" : "Expand"}</button>
                </div>
                {dropDown && <p className="DropDown-paragraph DropDown-paragraph-down">~ I'm gay. ~</p>}
                <div className="DropDown-bar-grid-parent">
                    <div className="DropDown-bar">
                        <p className="DropDown-label">Now it's aside.</p>
                        <button type="button" onClick={() => {setDropRight(!dropRight)}} className="DropDown-button">{dropRight ? "Collapse" : "Expand"}</button>
                    </div>
                    {dropRight && <p className="DropDown-paragraph DropDown-paragraph-right">~ I'm gay. ~</p>}
                </div>
            </div>
        </div>
    );
}

export default DropDown;