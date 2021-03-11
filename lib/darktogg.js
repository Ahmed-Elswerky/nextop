import { Toggle } from '@geist-ui/react';
import { useEffect, useState } from 'react';

function ToggleCompo() {
	const [stt, setStt] = useState(false);
	useEffect(() => {
		if (
			(localStorage && localStorage.getItem('dark') == 'true') ||
			(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
		)
			darkToggle(true);
		else darkToggle(false);
	}, []);
	function darkToggle(e) {
		if (e && typeof document !== 'undefined') {
			setStt(true);
			localStorage.setItem('dark', true);
			document.body.classList.add('invert');
		} else if (typeof document !== 'undefined') {
			setStt(false);
			localStorage.setItem('dark', false);
			document.body.classList.remove('invert');
		}
	}
	return <Toggle checked={stt} onChange={(e) => darkToggle(e.target.checked)} size="large" />;
}
export default ToggleCompo;
