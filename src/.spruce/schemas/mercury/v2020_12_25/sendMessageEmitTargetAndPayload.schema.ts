import { SchemaRegistry } from '@sprucelabs/schema'
import sendMessageEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/sendMessageEmitPayload.schema'
import sendMessageTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/sendMessageTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const sendMessageEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitTargetAndPayloadSchema =
	{
		id: 'sendMessageEmitTargetAndPayload',
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
				options: { schema: sendMessageTargetSchema_v2020_12_25 },
			},
			/** . */
			payload: {
				type: 'schema',
				isRequired: true,
				options: { schema: sendMessageEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(sendMessageEmitTargetAndPayloadSchema)

export default sendMessageEmitTargetAndPayloadSchema
