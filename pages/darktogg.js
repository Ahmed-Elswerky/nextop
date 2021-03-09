import Cookies from 'js-cookie';
import { Toggle } from '@geist-ui/react';
import { useEffect } from 'react';

function ToggleCompo() {
	if (Cookies.get('dark') && Cookies.get('dark') == true) darkToggle(true);
	else darkToggle(false);
	function darkToggle(e) {
		if (e && typeof document !== 'undefined') {
			Cookies.set('dark', true);
			document.querySelector('*').style.filter = 'invert(1) hue-rotate(180deg)';
			if (document.querySelector('img') !== null)
				document.querySelector('img').style.filter = 'invert(1) hue-rotate(180deg)';
		} else if (typeof document !== 'undefined') {
			Cookies.set('dark', false);

			document.querySelector('*').style.filter = '';
			if (document.querySelector('img') !== null) document.querySelector('img').style.filter = '';
		}
	}
	return (
		<Toggle
			checked={Cookies.get('dark') && Cookies.get('dark') == true ? true : false}
			onChange={(e) => darkToggle(e.target.checked)}
			size="large"
		/>
	);
}
export default ToggleCompo;
