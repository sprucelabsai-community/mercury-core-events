import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const listPermissionContractsEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTargetSchema =
	{
		id: 'listPermissionContractsEmitTarget',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			organizationId: {
				type: 'id',
				options: undefined,
			},
			/** . */
			namespaces: {
				type: 'id',
				isArray: true,
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	listPermissionContractsEmitTargetSchema
)

export default listPermissionContractsEmitTargetSchema
