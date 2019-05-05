import React, { useState } from 'react'

import Item from './components/Item'

function App() {
	const [home, setHome] = useState(true)
	const [project, setProject] = useState(false)
	const [contact, setContact] = useState(false)

	const handleClick = id => {
		if (id === '2' || id === '3') {
			return
		}
		if (id === '4') {
			setContact(true)
		}
		if (id === '1') {
			setProject(true)
		}
		setHome(false)
	}

	const handleHome = () => {
		setHome(true)
		setContact(false)
	}

	return (
		<div className='App'>
			<section className={home ? 'left' : 'leaveLeft'}>
				<div className='stamp' onClick={handleHome} />
				{home ? null : <div className='stamp-pulse' onClick={handleHome} />}
				<h1 className={home ? 'heading' : 'leaveHeading'}>
					<span className='heading-char'>在</span>
					<span className='heading-char'>木</span>
					<span className='heading-char'>的</span>
					<span className='heading-char'>博</span>
					<span className='heading-char'>客</span>
				</h1>
			</section>
			<section className={home ? 'right' : 'leaveRight'}>
				{home ? (
					<ul className='list'>
						<Item
							title='作品集'
							id='1'
							key='作品集'
							handleClick={handleClick}
						/>
						<Item title='简历' id='2' key='简历' handleClick={handleClick} />
						<Item
							title='吉特荷博'
							id='3'
							key='吉特荷博'
							handleClick={handleClick}
						/>
						<Item title='联络' id='4' key='联络' handleClick={handleClick} />
					</ul>
				) : null}
				{contact ? (
					<div className='contact'>
						<div>电话： XXXXXXXXXX</div>
						<div>邮箱： xxx@xxx.com</div>
					</div>
				) : null}
				{project ? (
					<div className='projects'>
						{/* <div className='row'>
							<div className='col-1-of-3'>Yes</div>
							<div className='col-1-of-3'>Here</div>
							<div className='col-1-of-3'>Is</div>
						</div> */}
					</div>
				) : null}
				<div className='char-container'>
					<div className='char'>设</div>
					<div className='char'>计</div>
					<div className='char'>游</div>
					<div className='char'>戏</div>
				</div>
			</section>
		</div>
	)
}

export default App
