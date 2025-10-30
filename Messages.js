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

	static setUser ( userId ) {
		return this.create( Commands.SET_USER, Commands.SERVER_ID, { userId } );
	}

	static instancesList ( instancesList ) {
		return this.create( Commands.INSTANCE_LIST, Commands.SERVER_ID, { instancesList } );
	}

	static newInstance ( userId, instanceName ) {
		return this.create( Commands.INSTANCE_NEW, userId, { instanceName } );
	}

	static deleteInstance ( userId, instanceName ) {
		return this.create( Commands.INSTANCE_DELETE, userId, { instanceName } );
	}

	static joinInstance ( userId, instanceName ) {
		return this.create( Commands.INSTANCE_JOIN, userId, { instanceName } );
	}

	static leaveInstance ( userId, instanceName ) {
		return this.create( Commands.INSTANCE_LEAVE, userId, { instanceName } );
	}
}