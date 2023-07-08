import { SchemaRegistry } from '@sprucelabs/schema'
import linkSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/link.schema'
import { SpruceSchemas } from '../../schemas.types'

const messageTemplateAddonsSchema: SpruceSchemas.Mercury.v2020_12_25.MessageTemplateAddonsSchema =
	{
		id: 'messageTemplateAddons',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			nextINeedYouTo: {
				type: 'text',
				isArray: true,
				options: undefined,
			},
			/** . */
			youShouldKnowThat: {
				type: 'text',
				isArray: true,
				options: undefined,
			},
			/** . */
			links: {
				type: 'schema',
				isArray: true,
				minArrayLength: 0,
				options: { schema: linkSchema_v2020_07_22 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(messageTemplateAddonsSchema)

export default messageTemplateAddonsSchema
