import { SchemaRegistry } from '@sprucelabs/schema'
import listInstalledSkillsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listInstalledSkillsEmitPayload.schema'
import listInstalledSkillsEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listInstalledSkillsEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const listInstalledSkillsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitTargetAndPayloadSchema =
	{
		id: 'listInstalledSkillsEmitTargetAndPayload',
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
				isRequired: true,
				options: { schema: listInstalledSkillsEmitTargetSchema_v2020_12_25 },
			},
			/** . */
			payload: {
				type: 'schema',
				options: { schema: listInstalledSkillsEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	listInstalledSkillsEmitTargetAndPayloadSchema
)

export default listInstalledSkillsEmitTargetAndPayloadSchema
