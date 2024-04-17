import { SchemaRegistry } from '@sprucelabs/schema'
import listSkillsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listSkillsEmitPayload.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const listSkillsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitTargetAndPayloadSchema =
    {
        id: 'listSkillsEmitTargetAndPayload',
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
            payload: {
                type: 'schema',
                options: { schema: listSkillsEmitPayloadSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(listSkillsEmitTargetAndPayloadSchema)

export default listSkillsEmitTargetAndPayloadSchema
