import { SchemaRegistry } from '@sprucelabs/schema'
import skillSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/skill.schema'
import { SpruceSchemas } from '../../schemas.types'

const getSkillResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetSkillResponsePayloadSchema =
	{
		id: 'getSkillResponsePayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			skill: {
				type: 'schema',
				isRequired: true,
				options: { schema: skillSchema_v2020_07_22 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(getSkillResponsePayloadSchema)

export default getSkillResponsePayloadSchema
