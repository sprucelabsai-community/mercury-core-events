import { SchemaRegistry } from '@sprucelabs/schema'
import unInstallSkillEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/unInstallSkillEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const uninstallSkillEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UninstallSkillEmitTargetAndPayloadSchema =
	{
		id: 'uninstallSkillEmitTargetAndPayload',
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
				options: { schema: unInstallSkillEmitTargetSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	uninstallSkillEmitTargetAndPayloadSchema
)

export default uninstallSkillEmitTargetAndPayloadSchema
