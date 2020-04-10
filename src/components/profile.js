export default class ProfileCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.placeholder();
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

	get styles() {
		return `:host {
			background: #FFC857;
			display: inline-flex;
			margin: 5px;
			padding: 0 15px 0 0;
			max-width: 600px;
			min-width: 480px;
			border-radius: 5px;
			border: 3px solid #1F2041;
		}
		.profile-pic {
			border-radius: 2px 0 0 2px;
			margin-right: 15px;
		}
		.text h2 {
			margin: 0 0 5px;
			color: #1F2041;
			text-transform: uppercase;
			font-size: 24px;
			text-align: center;
		}
		.text {
			width: 100%;
			font-family: Tahoma;
		}
		.text p {
			margin: 5px 0;
		}
		.text strong {
			color: #4B3F72;
		}
		.data {
			display: flex;
			justify-content: space-around;
		}
		.email {
			font-size: 18px;
			background: #eee;
			padding: 5px;
			border-radius: 10px;
			text-align: center;
		}
		`;
	}
	placeholder() {
		this.shadowRoot.innerHTML = `
		<style>${this.styles}
		.load{width:45px; margin: 0 auto;}
		</style>
		<img class="load" src="https://lh3.googleusercontent.com/proxy/H5IHozgYPdLP2T-bKQcwFqueQOaaSGxYQ3FszCw42PHb4f04VMwrJiYY4OMfeQj7pkuQYU7M7J-3wXuWSxgVsdYXEP9JCSG-iG4" />
	`;
	}
	render() {
		this.shadowRoot.innerHTML = `
		<style>${this.styles}</style>
            <img class="profile-pic" src="${this.profilePic}" />
			<div class="text">
				<h2>${this.firstName} ${this.lastName}</h2>
				<p class="email">${this.email}</p>
				<div class="data">
					<p class="age"><strong>Age:</strong> ${this.age}</p>
					<p class="gender"><strong>Gender:</strong> ${this.gender}</p>
				</div>
            </div>
        `;
	}
}

customElements.define('profile-card', ProfileCard);
