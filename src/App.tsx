import { useState, MouseEventHandler, useEffect } from 'react'

import Button from './components/Button'

function App() {
	const [expr, setExpr] = useState('')
	const [result, setResult] = useState('')

	const handleCalc = () => {
		try {
			let tempExpr = expr
			tempExpr = tempExpr.replaceAll('×', '*')
			tempExpr = tempExpr.replaceAll('÷', '/')

			const res = eval(tempExpr)
			setResult(res)
		}
		catch (err) {
			setResult('')
		}
	}

	useEffect(() => {
		handleCalc()
	}, [expr])

	const handleClear: MouseEventHandler = () => {
		setExpr("")
		setResult("")
	}

	const handleDigiOp = (digit: string) => {
		if((digit >= '0' && digit <= '9') || digit === '+' || digit ===	'-' || digit === '×' || digit === '÷') {
			setExpr(prevExpr => prevExpr + digit)
		}
	}

	const buttons: string[] = ['7', '8', '9', 'C', '4', '5', '6', '+', '1', '2', '3', '-', '0', '=', '÷', '×']

	const buttonElements = buttons.map((button, index) => {
		let type: string = 'digit'
		let handleClick: MouseEventHandler = () => handleDigiOp(button);
		
		if (button === 'C') {
			type = 'clear'
			handleClick = handleClear
		}
		else if (button === '+' || button === '-' || button === '×' || button === '÷') {
			type = 'operation'
		}

		return <Button key={index} label={button} type={type} onClick={handleClick} />
	})

	return (
		<div className="App">
			<div className="result">{ result }</div>
			<input className='input-box' type="text" value={expr} onChange={e => setExpr(e.target.value)} />
			<div className="btn-box">
				{buttonElements}
			</div>
		</div>
	)
}

export default App