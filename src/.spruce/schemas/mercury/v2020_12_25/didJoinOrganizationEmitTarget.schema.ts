import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const didJoinOrganizationEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitTargetSchema =
	{
		id: 'didJoinOrganizationEmitTarget',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			organizationId: {
				type: 'id',
				isRequired: true,
				options: undefined,
			},
			/** . */
			locationId: {
				type: 'id',
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(didJoinOrganizationEmitTargetSchema)

export default didJoinOrganizationEmitTargetSchema
