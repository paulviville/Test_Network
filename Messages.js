import Commands from "./Test_Network/Commands.js";

export default class Messages {
	static create ( command, senderId, data = { } ) {
		const message = {
			command,
			senderId,
			...data,
		};

		return JSON.stringify( message );
	}

	static setUser ( userId ) {
		return this.create( Commands.SET_USER );
	}
}