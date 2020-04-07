export default class ProfileCard extends HTMLElement {
	constructor() {
		super();
		this.firstName = this.firstName;
		this.lastName = this.lastName;
		this.profilePic = this.profilePic;
		this.age = this.age;
		this.gender = this.gender;
		this.email = this.email;
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
