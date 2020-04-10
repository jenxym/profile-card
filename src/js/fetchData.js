export function fetchData(elements) {
	fetch('https://randomuser.me/api')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elements.randomUserData = data.results[0];
		});
}
