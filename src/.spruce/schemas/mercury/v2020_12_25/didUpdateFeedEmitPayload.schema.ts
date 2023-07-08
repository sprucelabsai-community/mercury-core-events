import { SchemaRegistry } from '@sprucelabs/schema'
import feedItemSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/feedItem.schema'
import { SpruceSchemas } from '../../schemas.types'

const didUpdateFeedEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitPayloadSchema =
	{
		id: 'didUpdateFeedEmitPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			item: {
				type: 'schema',
				isRequired: true,
				options: { schema: feedItemSchema_v2020_07_22 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(didUpdateFeedEmitPayloadSchema)

export default didUpdateFeedEmitPayloadSchema
