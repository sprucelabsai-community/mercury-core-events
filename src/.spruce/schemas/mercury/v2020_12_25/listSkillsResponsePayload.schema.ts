import { SchemaRegistry } from '@sprucelabs/schema'
import listSkillsSkillSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listSkillsSkill.schema'
import { SpruceSchemas } from '../../schemas.types'

const listSkillsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsResponsePayloadSchema =
    {
        id: 'listSkillsResponsePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            skills: {
                type: 'schema',
                isRequired: true,
                isArray: true,
                minArrayLength: 0,
                options: { schema: listSkillsSkillSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(listSkillsResponsePayloadSchema)

export default listSkillsResponsePayloadSchema
