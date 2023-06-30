import './MenuButton.css'
import { useState } from 'react';

function MenuButton() {
    const [trigger, setTrigger] = useState(false);

    return (
        <div className='body'>
            <h2 className='heading'>Menu Button</h2>
            <div className='content'>
                <div className="MenuButton">
                    <button onClick={(() => setTrigger(!trigger))}type="button" className="MenuButton-button"><img className="MenuButton-button-icon" src='src/SVGs/menu_icon.svg' alt="Menu icon."/></button>
                    { trigger && (
                    <div className="MenuButton-options">
                        <p className="MenuButton-option">Option 1</p>
                        <p className="MenuButton-option">Option 2</p>
                        <p className="MenuButton-option">Option 3</p>
                    </div>
                    ) }
                </div>
                <div className="MenuButton-main">
                    <p className="MenuButton-main-heading">This is a Heading</p>
                    <p className="MenuButton-main-paragraph">This is a paragraph. Really, I'm just writing this because I need some content here. Isn't it annoying when you're working on these small projects and you have to take the time to come up with some shit to write down on elements such as these which aren't even the focal point of the component? Whatever, I guess that's just how it is...</p>
                    <p className="MenuButton-main-paragraph">This is another paragraph. I'm adding this paragraph because I need to verify that the menu button in the top left remains there when scrolling through this element.</p>
                </div>
            </div>
        </div>
    );
}

export default MenuButton;