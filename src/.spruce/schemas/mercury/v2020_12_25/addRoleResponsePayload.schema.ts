import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const addRoleResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.AddRoleResponsePayloadSchema =
    {
        id: 'addRoleResponsePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {},
    }

SchemaRegistry.getInstance().trackSchema(addRoleResponsePayloadSchema)

export default addRoleResponsePayloadSchema
