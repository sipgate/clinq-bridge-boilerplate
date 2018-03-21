import { CrmAdapter, CrmConfig, Contact, start } from "clinq-crm-bridge";
import { Request } from "express";

class MyCrmAdapter implements CrmAdapter {
	/**
	 * TODO: Fetch contacts from CRM using config.apiKey and config.apiUrl or throw on error
	 */
	public async getContacts(config: CrmConfig): Promise<Contact[]> {
		const contacts: Contact[] = await Promise.resolve([
			{
				name: "Benjamin Kluck",
				phoneNumbers: [
					{
						label: "Mobile",
						phoneNumber: "+4915799912345"
					}
				]
			}
		]);

		return contacts;
	}

	/**
	 * REQUIRED FOR OAUTH2 FLOW
	 * Return the redirect URL for the given CRM.
	 * Users will be redirected here to authorize CLINQ.
	 */
	public async getOAuth2RedirectUrl(): Promise<string> {
		const redirectUrl = await Promise.resolve(
			"https://crm.example.com/oauth2/authorize"
		);
		return redirectUrl;
	}

	/**
	 * REQUIRED FOR OAUTH2 FLOW
	 * Users will be redirected here after authorizing CLINQ.
	 *
	 * TODO: Extract the 'code' from request, fetch an access token
	 * and return it as 'apiKey'
	 */
	public async handleOAuth2Callback(req: Request): Promise<CrmConfig> {
		// EXAMPLE:
		// const { code } = req.query;
		// const query = queryString.stringify({ code });
		// const response = await request(`https://crm.example.com/oauth2/token?${query}`)
		// return {
		// 	apiKey: response.accessToken,
		// 	apiUrl: response.instanceUrl
		// };

		const crmConfig: CrmConfig = await Promise.resolve({
			apiKey: "a1b2c3",
			apiUrl: "https://eu5.crm.example.com/api"
		});
		return crmConfig;
	}
}

start(new MyCrmAdapter());
