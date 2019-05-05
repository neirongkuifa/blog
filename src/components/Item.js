import React from 'react'

function Item(props) {
	let content = props.title
	if (props.id === '2') {
		content = (
			<a href='http://atwooddeng.github.io/resume/resume.pdf'>{props.title}</a>
		)
	}
	if (props.id === '3') {
		content = <a href='https://github.com/AtwoodDeng'>{props.title}</a>
	}
	return (
		<li className='list__item' onClick={() => props.handleClick(props.id)}>
			{content}
		</li>
	)
}

export default Item
