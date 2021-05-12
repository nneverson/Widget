import React from 'react';

const Accordion = ({ toDisplay }) => {
	const onTitleClick = (index) => {
		console.log('Title clicked', index);
	};

	const renderedItems = toDisplay.map((item, index) => {
		return (
			<React.Fragment key={item.title}>
				<div className='title active' onClick={() => onTitleClick(index)}>
					<i class='dropdown icon'></i>
					{item.title}
				</div>
				<div className='content active'>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
			//React.Fragment replace <div> because semantic ui was producing a second div around div
		);
	});
	return <div className='ui styled accordion'>{renderedItems}</div>;
};
export default Accordion;
