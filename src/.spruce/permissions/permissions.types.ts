import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'agent-contract': [
			'can-get-platform-agent','can-register-platform-agent',
		]
		'authorizer-contract': [
			'can-update-others-authorizer-status',
		]
		'events-contract': [
			'can-register-global-events',
		]
		'feed-contract': [
			'can-see-other-persons-feed','can-subscribe-to-feed-updates',
		]
		'hiring-and-promoting-contract': [
			'can-fire-person','can-hire-person','hire-and-promote-when-not-installed',
		]
		'listeners-contract': [
			'can-register-global-listeners',
		]
		'locations-contract': [
			'can-create-location','can-delete-location','can-update-location','can-view-private-locations-at-own-org',
		]
		'messaging-contract': [
			'can-emit-did-message-event','can-listen-to-did-message-event','can-message-as-sprucebot','can-message-others',
		]
		'organizations-contract': [
			'can-delete-organization','can-list-orgs-for-other-people','can-update-organization-profile','can-view-private-organizations',
		]
		'people-contract': [
			'can-create-person','can-edit-other-people','can-get-anonymous-person','can-get-other-person','can-get-person-by-phone','can-get-person-private-fields','can-list-people','can-list-people-by-macs','can-listen-to-authorizor-status-changes','can-listen-to-did-login','can-listen-to-did-signup','can-listen-to-did-update','can-scramble-other-person',
		]
		'permission-contract': [
			'can-get-permission-contracts-for-org','can-list-permission-contracts-for-org','can-list-permission-contracts-globally','can-load-others-permissions','can-save-permissions-globally','can-upsert-permission-contract-for-org',
		]
		'roles-contract': [
			'can-create-role','can-delete-role','can-update-role','can-view-persons-roles','can-view-private-roles-at-own-org',
		]
		'skills-contract': [
			'can-check-if-skill-is-installed','can-install-skills','can-publish-own-skills','can-uninstall-skills','can-view-marketplace',
		]
	}
}


export interface PermissionContractMap {}