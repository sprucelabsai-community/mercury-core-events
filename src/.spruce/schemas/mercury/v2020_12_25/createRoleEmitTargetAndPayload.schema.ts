import { SchemaRegistry } from '@sprucelabs/schema'
import createRoleEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/createRoleEmitPayload.schema'
import createRoleEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/createRoleEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const createRoleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTargetAndPayloadSchema =
    {
        id: 'createRoleEmitTargetAndPayload',
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
                options: { schema: createRoleEmitTargetSchema_v2020_12_25 },
            },
            /** . */
            payload: {
                type: 'schema',
                isRequired: true,
                options: { schema: createRoleEmitPayloadSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(createRoleEmitTargetAndPayloadSchema)

export default createRoleEmitTargetAndPayloadSchema
