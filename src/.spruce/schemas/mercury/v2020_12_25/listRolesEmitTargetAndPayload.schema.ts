import { SchemaRegistry } from '@sprucelabs/schema'
import listRolesEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listRolesEmitPayload.schema'
import listRolesEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listRolesEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const listRolesEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetAndPayloadSchema =
    {
        id: 'listRolesEmitTargetAndPayload',
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
                options: { schema: listRolesEmitTargetSchema_v2020_12_25 },
            },
            /** . */
            payload: {
                type: 'schema',
                options: { schema: listRolesEmitPayloadSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(listRolesEmitTargetAndPayloadSchema)

export default listRolesEmitTargetAndPayloadSchema
