import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const listSkillsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayloadSchema =
	{
		id: 'listSkillsEmitPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			shouldOnlyShowMine: {
				type: 'boolean',
				options: undefined,
			},
			/** . */
			namespaces: {
				type: 'id',
				isArray: true,
				options: undefined,
			},
			/** . */
			shouldShowGlobalSkills: {
				type: 'boolean',
				options: undefined,
			},
			/** . */
			shouldOnlyShowInstallableSkills: {
				type: 'boolean',
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(listSkillsEmitPayloadSchema)

export default listSkillsEmitPayloadSchema
