import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const savePermissionsEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.SavePermissionsEmitTargetSchema =
	{
		id: 'savePermissionsEmitTarget',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			locationId: {
				type: 'id',
				options: undefined,
			},
			/** . */
			organizationId: {
				type: 'id',
				options: undefined,
			},
			/** . */
			permissionPersonId: {
				type: 'id',
				options: undefined,
			},
			/** . */
			permissionSkillId: {
				type: 'id',
				options: undefined,
			},
			/** . */
			permissionContractId: {
				type: 'id',
				isRequired: true,
				options: undefined,
			},
			/** . */
			roleId: {
				type: 'id',
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(savePermissionsEmitTargetSchema)

export default savePermissionsEmitTargetSchema
