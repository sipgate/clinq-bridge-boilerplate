import { BridgeImplementation, Contact, start as startServer } from "clinq-crm-bridge";

class MyCrmAdapter implements BridgeImplementation {

	public async getContacts(token: string): Promise<Contact[]> {
		// TODO: Fetch contacts from CRM
		const contacts: Contact[] = await Promise.resolve([
			{ name: "Benjamin Kluck", phoneNumbers: ["+4915799912345"] }
		]);

		return contacts;
	}

}

startServer(new MyCrmAdapter());
