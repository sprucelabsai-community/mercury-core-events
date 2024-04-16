import { SchemaRegistry } from '@sprucelabs/schema'
import roleSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/role.schema'
import { SpruceSchemas } from '../../schemas.types'

const getRoleResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetRoleResponsePayloadSchema =
    {
        id: 'getRoleResponsePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            role: {
                type: 'schema',
                isRequired: true,
                options: { schema: roleSchema_v2020_07_22 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(getRoleResponsePayloadSchema)

export default getRoleResponsePayloadSchema
