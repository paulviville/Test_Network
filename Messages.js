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

	static newUser ( userId ) {
		return this.create( Commands.NEW_USER, Commands.SERVER_ID, { userId } );
	}

	static removeUser ( userId ) {
		return this.create( Commands.REMOVE_USER, Commands.SERVER_ID, { userId } );
	}

	/// cameraMatrix: mat44
	static updateCamera ( senderId, cameraMatrix ) {
		return this.create( Commands.UPDATE_CAMERA, senderId, { cameraMatrix } );
	}

	static startPointer ( senderId ) {
		return this.create( Commands.START_POINTER, senderId );
	}

	static endPointer ( senderId ) {
		return this.create( Commands.END_POINTER, senderId );
	}

	/// pointer: { origin: vec3, end: vec3 } 
	static updatePointer ( senderId, pointer ) {
		return this.create( Commands.END_POINTER, senderId, { pointer } );
	}

	/// node: { id: uint }
	static select ( senderId, nodes ) {
		return this.create( Commands.SELECT, senderId, { nodes } );
	}

	/// node: { id: uint }
	static deselect ( senderId, nodes ) {
		return this.create( Commands.DESELECT, senderId, { nodes } );
	}

	/// node: { id: uint }
	static deleteNode ( senderId, nodes ) {
		return this.create( Commands.DELETE_NODE, senderId, { nodes } );
		
	}

	/// primitive: { tpye: string }
	static addPrimitive ( senderId, primitive ) {
		return this.create( Commands.ADD_PRIMITIVE, senderId, { primitive } );
	}

	/// node: { id: uint, matrix: mat44 }
	static startTransform ( senderId, nodes ) {
		return this.create( Commands.START_TRANSFORM, senderId, { nodes } );
	}

	/// node: { id: uint }
	static endTransform ( senderId, nodes ) {
		return this.create( Commands.END_TRANSFORM, senderId, { nodes } );
	}

	/// node: { id: uint, matrix: mat44 }
	static updateTransform ( senderId, nodes ) {
		return this.create( Commands.UPDATE_TRANSFORM, senderId, { nodes } );
	}

	/// marker: { origin: vec3, end: vec3 }
	static addMarker ( senderId, marker ) {
		return this.create( Commands.ADD_MARKER, senderId, { marker } );
	}

	/// marker: { id: uint }
	static deleteMarker ( senderId, marker ) {
		return this.create( Commands.DELETE_MARKER, senderId, { marker } );
	}

	/// marker: { id: uint, origin: vec3, end: vec3 }
	static updateMarker ( senderId, marker ) {
		return this.create( Commands.UPDATE_MARKER, senderId, { marker } );
	}

	/// annotation: { position: vec3, text: string }
	static addAnnotation ( senderId, annotation ) {
		return this.create( Commands.ADD_ANNOTATION, senderId, { annotation } );
	}

	/// annotation: { id: uint }
	static deleteAnnotation ( senderId, annotation ) {
		return this.create( Commands.DELETE_ANNOTATION, senderId, { annotation } );
	}

	/// annotation: { id: uint, position: vec3, text: string }
	static updateAnnotation ( senderId, annotation ) {
		return this.create( Commands.UPDATE_ANNOTATION, senderId, { annotation } );
	}

	/// lambdaData: { label: string, data: {...}}
	static lambda ( senderId, lambdaData ) {
		return this.create( Commands.LAMBDA, senderId, { lambdaData } );
	}

	static fileRequest ( senderId, fileName ) {
		return this.create( Commands.FILE_REQUEST, senderId, { fileName } );
	}

	static fileTransfer ( senderId, fileName, file ) {
		return this.create( Commands.FILE_TRANSFER, senderId, { fileName, file } );
	}

	static filesList ( filesList ) {
		return this.create( Commands.FILE_LIST, Commands.SERVER_ID, { filesList } );
	}
}