import { SchemaRegistry } from '@sprucelabs/schema'
import resetPasswordEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/resetPasswordEmitPayload.schema'
import resetPasswordEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/resetPasswordEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const resetPasswordEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitTargetAndPayloadSchema =
    {
        id: 'resetPasswordEmitTargetAndPayload',
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
                options: { schema: resetPasswordEmitTargetSchema_v2020_12_25 },
            },
            /** . */
            payload: {
                type: 'schema',
                isRequired: true,
                options: { schema: resetPasswordEmitPayloadSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    resetPasswordEmitTargetAndPayloadSchema
)

export default resetPasswordEmitTargetAndPayloadSchema
