import { SchemaRegistry } from '@sprucelabs/schema'
import addRoleEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/addRoleEmitPayload.schema'
import addRoleEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/addRoleEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const addRoleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTargetAndPayloadSchema =
    {
        id: 'addRoleEmitTargetAndPayload',
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
                options: { schema: addRoleEmitTargetSchema_v2020_12_25 },
            },
            /** . */
            payload: {
                type: 'schema',
                isRequired: true,
                options: { schema: addRoleEmitPayloadSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(addRoleEmitTargetAndPayloadSchema)

export default addRoleEmitTargetAndPayloadSchema
