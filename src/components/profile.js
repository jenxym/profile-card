export default class ProfileCard extends HTMLElement {
	constructor() {
		super();
		this.firstName = '...';
		this.lastName = '...';
		this.profilePic = '...';
		this.age = '...';
		this.gender = '...';
		this.email = '...';
	}

	set randomUserData(data) {
		this.firstName = data.name.first;
		this.lastName = data.name.last;
		this.profilePic = data.picture.large;
		this.age = data.dob.age;
		this.gender = data.gender;
		this.email = data.email;
		this.render();
	}

	render() {
		this.innerHTML = `
            <div>
            <img src="${this.profilePic}" />
            <h2>${this.firstName} ${this.lastName}</h2>
            <p>${this.email}</p>
            <p>Edad: ${this.age}</p>
            <p>Género: ${this.gender}</p>
            </div>
        `;
	}
}

customElements.define('profile-card', ProfileCard);
