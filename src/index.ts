import { CrmAdapter, CrmConfig, Contact, start } from "clinq-crm-bridge";

class MyCrmAdapter implements CrmAdapter {

	public async getContacts(config: CrmConfig): Promise<Contact[]> {
		// TODO: Fetch contacts from CRM using config.apiKey and config.api or throw on error
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
