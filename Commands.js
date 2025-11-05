export default class Commands {
	static SERVER_ID = 0XFFFFFFFF;

	/// Sent by the SERVER when encountering a bad user input
	static ERROR = "ERROR";

	/// Sent by the SERVER to give an ID to the new user on connection
    static SET_USER = "SET_USER";

	/// Sent by the SERVER to provide the instances list to users on connection and on update
	static INSTANCE_LIST = "INSTANCE_LIST";
	/// Sent by the USERS to request creation of new instances
	static INSTANCE_NEW = "INSTANCE_NEW";
	/// Sent by the USERS to request the deletion of instances
	static INSTANCE_DELETE = "INSTANCE_DELETE";
	/// Sent by the USERS to join an instance
	static INSTANCE_JOIN = "INSTANCE_JOIN";
	/// Sent by the USERS to leave an instance
	static INSTANCE_LEAVE = "INSTANCE_LEAVE";


	/// Sent by USERS or SERVER to signal a file transfer
	static FILE_TRANSFER = "FILE_TRANSFER";
	/// Sent by USERS to SERVER to request file
	static FILE_REQUEST = "FILE_REQUEST";
	/// Sent by the SERVER to provide the files list to users on connection and on update
	static FILE_LIST = "FILE_LIST"


	/// Sent by the SERVER to instance users to announce USER joining the instance
	static NEW_USER = "NEW_USER";
	/// Sent by the SERVER to instance users to announce USER leaving the instance
    static REMOVE_USER = "REMOVE_USER";

	/// Sent by USER to SERVER to update camera position, broadcast to instance users
	static UPDATE_CAMERA = "UPDATE_CAMERA";
    
	/// Sent by USER to SERVER to signal pointer start, broadcast to instance users
    static START_POINTER = "START_POINTER";
	/// Sent by USER to SERVER to signal pointer end, broadcast to instance users
    static END_POINTER = "END_POINTER";
	/// Sent by USER to SERVER to update pointer data, broadcast to instance users
    static UPDATE_POINTER = "UPDATE_POINTER";

	/// Sent by the USERS to request node selection, broadcast to instance users if approved
    static SELECT = "SELECT";
	/// Sent by the USERS to request node deselection, broadcast to instance users if approved
    static DESELECT = "DESELECT";
	/// Sent by USER to SERVER to signal node transform modification start
    static START_TRANSFORM = "START_TRANSFORM";
	/// Sent by USER to SERVER to signal node transform modification end
    static END_TRANSFORM = "END_TRANSFORM";
	/// Sent by USER to SERVER to update node transform, broadcast to instance users
    static UPDATE_TRANSFORM = "UPDATE_TRANSFORM";

	/// Sent by the USERS to request new primitive, broadcast to instance users
	static ADD_PRIMITIVE = "ADD_PRIMITIVE";
	static Primitives = {
		Sphere: "Sphere",
		Cylinder: "Cylinder",
		Cube: "Cube",
		Quad: "Quad",
		Capsule: "Capsule",
	}
	/// Sent by the USERS to request node deletion, broadcast to instance users if approved
	static DELETE_NODE = "DELETE_NODES";

	/// Sent by the USERS to add marker, broadcast to instance users if approved
    static ADD_MARKER = "ADD_MARKER";
	/// Sent by the USERS to delete marker, broadcast to instance users if approved
    static DELETE_MARKER = "DELETE_MARKER";
	/// Sent by the USERS to update marker data, broadcast to instance users if approved
    static UPDATE_MARKER = "UPDATE_MARKER";

	/// Sent by the USERS to add annotation, broadcast to instance users if approved
	static ADD_ANNOTATION = "ADD_ANNOTATION";
	/// Sent by the USERS to delete annotation, broadcast to instance users if approved
	static DELETE_ANNOTATION = "DELETE_ANNOTATION";
	/// Sent by the USERS to update annotation, broadcast to instance users if approved
	static UPDATE_ANNOTATION = "UPDATE_ANNOTATION";

	/// Sent by the USERS to synchronize custom signal, broadcast to instance users
	static LAMBDA = "LAMBDA";


}