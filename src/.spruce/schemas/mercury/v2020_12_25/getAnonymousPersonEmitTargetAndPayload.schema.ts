import { SchemaRegistry } from '@sprucelabs/schema'
import getAnonyomousPersonEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getAnonyomousPersonEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const getAnonymousPersonEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetAnonymousPersonEmitTargetAndPayloadSchema =
	{
		id: 'getAnonymousPersonEmitTargetAndPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** Source. */
			source: {
				label: 'Source',
				type: 'schema',
				options: { schema: eventSourceSchema_v2021_09_13 },
			},
			/** . */
			target: {
				type: 'schema',
				options: { schema: getAnonyomousPersonEmitTargetSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	getAnonymousPersonEmitTargetAndPayloadSchema
)

export default getAnonymousPersonEmitTargetAndPayloadSchema
