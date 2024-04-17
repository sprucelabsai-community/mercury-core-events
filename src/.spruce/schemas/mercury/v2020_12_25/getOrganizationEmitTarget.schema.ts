import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const getOrganizationEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTargetSchema =
    {
        id: 'getOrganizationEmitTarget',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            organizationId: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(getOrganizationEmitTargetSchema)

export default getOrganizationEmitTargetSchema
