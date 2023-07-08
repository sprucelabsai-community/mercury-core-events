import { SchemaRegistry } from '@sprucelabs/schema'
import eventPagingRequestSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventPagingRequest.schema'
import { SpruceSchemas } from '../../schemas.types'

const listLocationsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayloadSchema =
	{
		id: 'listLocationsEmitPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			shouldOnlyShowWhereIAmEmployed: {
				type: 'boolean',
				options: undefined,
			},
			/** . */
			paging: {
				type: 'schema',
				options: { schema: eventPagingRequestSchema_v2021_09_13 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(listLocationsEmitPayloadSchema)

export default listLocationsEmitPayloadSchema
