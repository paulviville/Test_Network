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

	/// Sent by the SERVER to instance users to announce USER joining the instance
	static NEW_USER = "NEW_USER";
	/// Sent by the SERVER to instance users to announce USER leaving the instance
    static REMOVE_USER = "REMOVE_USER";
}