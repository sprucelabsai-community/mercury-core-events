import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const createLocationEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTargetSchema =
    {
        id: 'createLocationEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(createLocationEmitTargetSchema)

export default createLocationEmitTargetSchema
