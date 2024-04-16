import { SchemaRegistry } from '@sprucelabs/schema'
import personSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/person.schema'
import { SpruceSchemas } from '../../schemas.types'

const signupResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SignupResponsePayloadSchema =
    {
        id: 'signupResponsePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            token: {
                type: 'text',
                isRequired: true,
                options: undefined,
            },
            /** . */
            person: {
                type: 'schema',
                isRequired: true,
                options: { schema: personSchema_v2020_07_22 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(signupResponsePayloadSchema)

export default signupResponsePayloadSchema
