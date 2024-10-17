import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'events-contract': [
			'can-register-global-events',
		]
		'feed-contract': [
			'can-see-other-persons-feed','can-subscribe-to-feed-updates',
		]
		'hiring-and-promoting-contract': [
			'can-hire-person','can-fire-person','hire-and-promote-when-not-installed',
		]
		'listeners-contract': [
			'can-register-global-listeners',
		]
		'locations-contract': [
			'can-create-location','can-update-location','can-delete-location','can-view-private-locations-at-own-org',
		]
		'messaging-contract': [
			'can-emit-did-message-event','can-listen-to-did-message-event','can-message-others','can-message-as-sprucebot',
		]
		'organizations-contract': [
			'can-update-organization-profile','can-delete-organization','can-view-private-organizations','can-list-orgs-for-other-people',
		]
		'people-contract': [
			'can-create-person','can-list-people-permission-id','can-scramble-other-person','can-edit-other-people','can-get-anonymous-person','can-get-person-private-fields','can-get-person-by-phone','can-listen-to-did-signup','can-listen-to-did-login','can-listen-to-did-update','can-list-people-by-macs','can-listen-to-authorizor-status-changes','can-get-other-person',
		]
		'permission-contract': [
			'can-get-permission-contracts-for-org','can-list-permission-contracts-for-org','can-upsert-permission-contract-for-org','can-list-permission-contracts-globally','can-save-permissions-globally','can-load-others-permissions',
		]
		'roles-contract': [
			'can-create-role','can-update-role','can-delete-role','can-view-private-roles-at-own-org','can-view-persons-roles',
		]
		'skills-contract': [
			'can-install-skills','can-uninstall-skills','can-view-marketplace','can-check-if-skill-is-installed',
		]
		'chat-bot-contract': [
			'can-register-chat-bots',
		]
		'chatbot-contract': [
			'can-register-chatbots',
		]
		'authorizer-contract': [
			'can-update-others-authorizer-status',
		]
	}
}


export interface PermissionContractMap {}