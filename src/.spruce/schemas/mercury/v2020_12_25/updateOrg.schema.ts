import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const updateOrgSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgSchema = {
	id: 'updateOrg',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	fields: {
		/** Name. */
		name: {
			label: 'Name',
			type: 'text',
			options: undefined,
		},
		/** Address. */
		address: {
			label: 'Address',
			type: 'address',
			options: undefined,
		},
		/** Slug. */
		slug: {
			label: 'Slug',
			type: 'text',
			options: undefined,
		},
		/** Public. Is this organization viewable by guests? */
		isPublic: {
			label: 'Public',
			type: 'boolean',
			hint: 'Is this organization viewable by guests?',
			defaultValue: false,
			options: undefined,
		},
		/** . */
		dateCreated: {
			type: 'dateTime',
			options: undefined,
		},
		/** . */
		dateDeleted: {
			type: 'dateTime',
			options: undefined,
		},
	},
}

SchemaRegistry.getInstance().trackSchema(updateOrgSchema)

export default updateOrgSchema
