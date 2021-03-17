export const duplicateIds = () => {
	const elements = [...document.querySelectorAll('[id]')];
	const ids = elements.map(el => el.id);
	const dups = elements.filter(el => ids.filter(id => id === el.id).length > 1);

	return dups;
}

export const  $$ =  (selector, parent) => {
    return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
};

export const $ = (selector, parent) => {
	return (parent ? parent : document).querySelector(selector);
};

export const  isInViewport =  (elem) => {
	const  distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

export const isOutOfViewport =  (elem) => {

	// Get element's bounding
	const bounding = elem.getBoundingClientRect();

	// Check if it's out of the viewport on each side
	const  out = {};
	out.top = bounding.top < 0;
	out.left = bounding.left < 0;
	out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
	out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
	out.any = out.top || out.left || out.bottom || out.right;
	out.all = out.top && out.left && out.bottom && out.right;

	return out;
};

export const scrollStop = (callback) => {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Setup scrolling variable
	let isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {
		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);
		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {
			// Run the callback
			callback();
		}, 66);

	}, false);
};

export const  debounce = (fn) => {
	// Setup a timer
	let timeout;

	// Return a function to run debounced
	return function () {

		// Setup the arguments
		let context = this;
		let args = arguments;

		// If there's a timer, cancel it
		if (timeout) {
			window.cancelAnimationFrame(timeout);
		}

		// Setup the new requestAnimationFrame()
		timeout = window.requestAnimationFrame(function () {
			fn.apply(context, args);
		});
	}
};


