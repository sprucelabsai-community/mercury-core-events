import { SchemaRegistry } from '@sprucelabs/schema'
import isSkillInstalledEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/isSkillInstalledEmitPayload.schema'
import isSkillInstalledEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/isSkillInstalledEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const isSkillInstalledEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTargetAndPayloadSchema =
    {
        id: 'isSkillInstalledEmitTargetAndPayload',
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
                    schema: isSkillInstalledEmitTargetSchema_v2020_12_25,
                },
            },
            /** . */
            payload: {
                type: 'schema',
                options: {
                    schema: isSkillInstalledEmitPayloadSchema_v2020_12_25,
                },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    isSkillInstalledEmitTargetAndPayloadSchema
)

export default isSkillInstalledEmitTargetAndPayloadSchema
