import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const didUpdateFeedEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitTargetSchema =
	{
		id: 'didUpdateFeedEmitTarget',
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
			skillId: {
				type: 'id',
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(didUpdateFeedEmitTargetSchema)

export default didUpdateFeedEmitTargetSchema
