export const duplicateIds = () => {
	const elements = [...document.querySelectorAll('[id]')];
	const ids = elements.map(el => el.id);
	const dups = elements.filter(el => ids.filter(id => id === el.id).length > 1);

	return dups;
}

export const  $$ =  (selector, parent = document) => {
	return [...parent.querySelectorAll(selector)];
};

export const $ = (selector, parent = document) => {
	return parent.querySelector(selector);
};

export function createElement(type, options = {}) {
  const element = document.createElement(type)
  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") {
      element.classList.add(value)
      return
    }

    if (key === "dataset") {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue
      })
      return
    }

    if (key === "text") {
      element.textContent = value
      return
    }

    element.setAttribute(key, value)
  })
  return element
}


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
	window.addEventListener('scroll', function () {
		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);
		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {
			// Run the callback
			callback();
		}, 66);

	}, false);
};



