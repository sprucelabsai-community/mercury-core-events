import { SchemaRegistry } from '@sprucelabs/schema'
import personSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/person.schema'
import { SpruceSchemas } from '../../schemas.types'

const didUpdatePersonEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidUpdatePersonEmitPayloadSchema =
	{
		id: 'didUpdatePersonEmitPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			person: {
				type: 'schema',
				isRequired: true,
				options: { schema: personSchema_v2020_07_22 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(didUpdatePersonEmitPayloadSchema)

export default didUpdatePersonEmitPayloadSchema
