import '@sprucelabs/mercury-types'

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
		'listen-messaging': [
			'can-listen-to-did-message-event',
		]
		'can-register-events-contract': [
			'can-register-global-events',
		]
		'hiring-and-promoting': [
			'can-hire-person','can-fire-person','hire-and-promote-when-not-installed',
		]
		'can-manage-skills': [
			'can-install-skills','can-uninstall-skills','can-view-marketplace',
		]
		'can-check-if-skill-is-installed-contract-id': [
			'can-check-if-skill-is-installed',
		]
		'listeners-contract': [
			'can-register-global-listeners',
		]
		'events-contract': [
			'can-register-global-events',
		]
		'can-list-permission-contracts-contract-id': [
			'can-list-permission-contracts-for-org',
		]
		'can-get-permission-contract-contract-id': [
			'can-get-permission-contract-for-org',
		]
		'can-upsert-permission-contract-contract-id': [
			'can-upsert-permission-contract-for-org',
		]
		'permission-contracts-contract-id': [
			'can-get-permission-contracts-for-org','can-list-permission-contracts-for-org',
		]
		'feed-contract': [
			'can-see-other-persons-feed','can-subscribe-to-feed-updates',
		]
		'emit-messaging': [
			'can-emit-did-message-event','can-listen-to-did-message-event','can-message-others',
		]
		'can-crus-people-contract': [
			'can-create-person','can-list-people-permission-id','can-scramble-other-person','can-get-anonymous-person','can-get-person-private-fields','can-get-person-by-phone','can-listen-to-did-signup','can-listen-to-did-update',
		]
		'can-register-listener': [
			'can-register-global-listeners',
		]
		'hiring-and-promoting-contract': [
			'can-hire-person','can-fire-person','hire-and-promote-when-not-installed',
		]
		'locations-contract': [
			'can-create-location','can-update-location','can-delete-location','can-view-private-locations-at-own-org',
		]
		'organizations-contract': [
			'can-update-organization-profile','can-delete-organization','can-view-private-organizations',
		]
		'people-contract': [
			'can-create-person','can-list-people-permission-id','can-scramble-other-person','can-edit-other-people','can-get-anonymous-person','can-get-person-private-fields','can-get-person-by-phone','can-listen-to-did-signup','can-listen-to-did-update',
		]
		'roles-contract': [
			'can-create-role','can-update-role','can-delete-role','can-view-private-roles-at-own-org','can-view-persons-roles',
		]
		'skills-contract': [
			'can-install-skills','can-uninstall-skills','can-view-marketplace','can-check-if-skill-is-installed',
		]
		'messaging-contract': [
			'can-emit-did-message-event','can-listen-to-did-message-event','can-message-others','can-message-as-sprucebot',
		]
		'permission-contract': [
			'can-get-permission-contracts-for-org','can-list-permission-contracts-for-org','can-upsert-permission-contract-for-org','can-list-permission-contracts-globally','can-save-permissions-globally','can-load-others-permissions',
		]
	}
}


export interface PermissionContractMap {}