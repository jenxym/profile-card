const elementWeb = document.querySelectorAll('profile-card');
const URL = 'https://randomuser.me/api';

elementWeb.forEach((element) => {
	fetch(URL)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			element.firstName = data.results[0].name.first;
			element.lastName = data.results[0].name.last;
			element.profilePic = data.results[0].picture.large;
			element.age = data.results[0].dob.age;
			element.gender = data.results[0].gender;
			element.email = data.results[0].email;
			element.render();
			console.log(data);
		});
});
