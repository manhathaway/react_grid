import './DropDown.css'
import { useState } from 'react';

function DropDown() {
    const [dropDown1, setDropDown1] = useState(false)
    const [dropDown2, setDropDown2] = useState(false)
    const [dropDown3, setDropDown3] = useState(false)

    return(
        <div className="body">
            <h2 className="heading">Drop-Down Menu</h2>
            <div className="content">
                <div className="DropDown-navbar">
                    <div className="DropDown-nav-column">
                        <p onMouseEnter={() => setDropDown1(true)} onMouseLeave={() => setDropDown1(false)} className="DropDown-nav-options">Option 1</p>
                        { dropDown1 &&
                        <div onMouseEnter={() => setDropDown1(true)} onMouseLeave={() => setDropDown1(false)} className="DropDown-nav-suboptions">
                            <button type="submit" className="DropDown-nav-suboption">Suboption 1</button>
                            <button type="submit" className="DropDown-nav-suboption">Suboption 2</button>
                            <button type="submit" className="DropDown-nav-suboption">Suboption 3</button>
                        </div> }
                    </div>
                    <div className="DropDown-nav-column">
                        <p onMouseEnter={() => setDropDown2(true)} onMouseLeave={() => setDropDown2(false)} className="DropDown-nav-options">Option 2</p>
                        { dropDown2 &&
                        <div onMouseEnter={() => setDropDown2(true)} onMouseLeave={() => setDropDown2(false)} className="DropDown-nav-suboptions">
                            <button type="submit" className="DropDown-nav-suboption">Suboption 1</button>
                            <button type="submit" className="DropDown-nav-suboption">Suboption 2</button>
                        </div> }
                    </div>
                    <div className="DropDown-nav-column">
                    <p onMouseEnter={() => setDropDown3(true)} onMouseLeave={() => setDropDown3(false)} className="DropDown-nav-options">Option 3</p>
                        { dropDown3 &&
                        <div onMouseEnter={() => setDropDown3(true)} onMouseLeave={() => setDropDown3(false)} className="DropDown-nav-suboptions">
                            <button type="submit" className="DropDown-nav-suboption">Suboption 1</button>
                            <button type="submit" className="DropDown-nav-suboption">Suboption 2</button>
                            <button type="submit" className="DropDown-nav-suboption">Suboption 3</button>
                            <button type="submit" className="DropDown-nav-suboption">Suboption 4</button>
                        </div> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropDown;