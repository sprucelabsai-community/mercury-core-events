import { SchemaRegistry } from '@sprucelabs/schema'
import organizationSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/organization.schema'
import { SpruceSchemas } from '../../schemas.types'

const createOrgResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.CreateOrgResponsePayloadSchema =
    {
        id: 'createOrgResponsePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            organization: {
                type: 'schema',
                isRequired: true,
                options: { schema: organizationSchema_v2020_07_22 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(createOrgResponsePayloadSchema)

export default createOrgResponsePayloadSchema
