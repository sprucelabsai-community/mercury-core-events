declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'can-crud-locations-contract': [
			'can-create-location','can-update-location','can-delete-location','can-view-private-locations-at-own-org',
		]
		'can-crud-organization-profile-contract': [
			'can-update-organization-profile','can-delete-organization','can-view-private-organizations',
		]
		'can-crud-roles-contract': [
			'can-create-role','can-update-role','can-delete-role','can-view-private-roles-at-own-org','can-view-persons-roles',
		]
		'can-crus-people-contract': [
			'can-create-person','can-list-people-permission-id','can-scramble-other-person','can-get-anonymous-person','can-get-person-private-fields','can-get-person-by-phone','can-listen-to-did-signup','can-listen-to-did-update',
		]
		'feed-contract': [
			'can-see-other-persons-feed','can-subscribe-to-feed-updates','can-be-sprucebot',
		]
		'hiring-and-promoting': [
			'can-hire-person','can-fire-person','hire-and-promote-when-not-installed',
		]
		'can-manage-skills': [
			'can-install-skills','can-uninstall-skills','can-view-marketplace',
		]
		'emit-messaging': [
			'can-emit-did-message-event','can-listen-to-did-message-event','can-message-anyone',
		]
		'permission-contracts-contract-id': [
			'can-get-permission-contracts-for-org','can-list-permission-contracts-for-org',
		]
		'can-register-events-contract': [
			'can-register-global-events',
		]
		'can-check-if-skill-is-installed-contract-id': [
			'can-check-if-skill-is-installed',
		]
		'can-upsert-permission-contract-contract-id': [
			'can-upsert-permission-contract-for-org',
		]
		'can-register-listener': [
			'can-register-global-listeners',
		]
	}
}


export interface PermissionContractMap {}