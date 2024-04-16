import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const getSkillEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTargetSchema =
    {
        id: 'getSkillEmitTarget',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            skillId: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(getSkillEmitTargetSchema)

export default getSkillEmitTargetSchema
