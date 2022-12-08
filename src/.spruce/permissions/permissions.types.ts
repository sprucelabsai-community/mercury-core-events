declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'locations-contract': [
			'can-create-location','can-update-location','can-delete-location','can-view-private-locations-at-own-org',
		]
		'organizations-contract': [
			'can-update-organization-profile','can-delete-organization','can-view-private-organizations',
		]
		'roles-contract': [
			'can-create-role','can-update-role','can-delete-role','can-view-private-roles-at-own-org','can-view-persons-roles',
		]
		'people-contract': [
			'can-create-person','can-list-people-permission-id','can-scramble-other-person','can-get-anonymous-person','can-get-person-private-fields','can-get-person-by-phone','can-listen-to-did-signup','can-listen-to-did-update',
		]
		'events-contract': [
			'can-register-global-events',
		]
		'feed-contract': [
			'can-see-other-persons-feed','can-subscribe-to-feed-updates','can-be-sprucebot',
		]
		'hiring-and-promoting-contract': [
			'can-hire-person','can-fire-person','hire-and-promote-when-not-installed',
		]
		'listeners-contract': [
			'can-register-global-listeners',
		]
		'skills-contract': [
			'can-install-skills','can-uninstall-skills','can-view-marketplace','can-check-if-skill-is-installed',
		]
		'messaging-contract': [
			'can-emit-did-message-event','can-listen-to-did-message-event','can-message-others',
		]
		'permission-contracts': [
			'can-get-permission-contracts-for-org','can-list-permission-contracts-for-org','can-upsert-permission-contract-for-org',
		]
		'permissions-contract': [
			'can-upsert-permission-contract-for-org',
		]
	}
}


export interface PermissionContractMap {}