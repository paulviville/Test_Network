import Commands from "./Commands.js";

export default class Messages {
	static create ( command, senderId, data = { } ) {
		const message = {
			command,
			senderId,
			...data,
		};

		return JSON.stringify( message );
	}

	static error ( errorData ) {
		return this.create( Commands.ERROR, Commands.SERVER_ID, { errorData } );
	}

	static setUser ( userId ) {
		return this.create( Commands.SET_USER, Commands.SERVER_ID, { userId } );
	}

	static instancesList ( instancesList ) {
		return this.create( Commands.INSTANCE_LIST, Commands.SERVER_ID, { instancesList } );
	}

	static newInstance ( senderId, instanceName ) {
		return this.create( Commands.INSTANCE_NEW, senderId, { instanceName } );
	}

	static deleteInstance ( senderId, instanceName ) {
		return this.create( Commands.INSTANCE_DELETE, senderId, { instanceName } );
	}

	static joinInstance ( senderId, instanceName ) {
		return this.create( Commands.INSTANCE_JOIN, senderId, { instanceName } );
	}

	static leaveInstance ( senderId, instanceName ) {
		return this.create( Commands.INSTANCE_LEAVE, senderId, { instanceName } );
	}

	static newUser ( senderId, userId ) {
		return this.create( Commands.NEW_USER, senderId, { userId } );
	}

	static removeUser ( senderId, userId ) {
		return this.create( Commands.REMOVE_USER, senderId, { userId } );
	}
}