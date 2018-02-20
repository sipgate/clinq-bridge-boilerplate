import { CrmAdapter, Contact, start } from "clinq-crm-bridge";

class MyCrmAdapter implements CrmAdapter {

	public async getContacts(token: string): Promise<Contact[]> {
		// TODO: Fetch contacts from CRM
		const contacts: Contact[] = await Promise.resolve([
			{
				name: "Benjamin Kluck",
				phoneNumbers: [{
					label: "Mobile",
					phoneNumber: "+4915799912345"
				}]
			}
		]);

		return contacts;
	}
}

start(new MyCrmAdapter());
