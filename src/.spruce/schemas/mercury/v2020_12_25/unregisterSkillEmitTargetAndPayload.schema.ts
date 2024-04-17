import { SchemaRegistry } from '@sprucelabs/schema'
import unregisterSkillEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/unregisterSkillEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const unregisterSkillEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetAndPayloadSchema =
    {
        id: 'unregisterSkillEmitTargetAndPayload',
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
                options: {
                    schema: unregisterSkillEmitTargetSchema_v2020_12_25,
                },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    unregisterSkillEmitTargetAndPayloadSchema
)

export default unregisterSkillEmitTargetAndPayloadSchema
