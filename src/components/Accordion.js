import React, { useState } from 'react';

const Accordion = ({ toDisplay }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const onTitleClick = (index) => {
		setActiveIndex(index);
		console.log('title clicked', index);
	};

	const renderedItems = toDisplay.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';
		return (
			<React.Fragment key={item.title}>
				<div className={`title ${active}`} onClick={() => onTitleClick(index)}>
					<i class='dropdown icon'></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
			//React.Fragment replace <div> because semantic ui was producing a second div around div
		);
	});
	return <div className='ui styled accordion'>{renderedItems}</div>;
};
export default Accordion;

//How to add state to the functional component
//line 1 add useState in the react import -> import React, { useState } from "react"
//line 5 at the top of the component initialize a new piece of state
//In the helper method update state. The value of state is now the index of the div that was clicked on by the user and it is being printed in the browser (line 27)
