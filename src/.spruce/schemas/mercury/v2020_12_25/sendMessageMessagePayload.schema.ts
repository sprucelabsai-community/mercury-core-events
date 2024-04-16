import { SchemaRegistry } from '@sprucelabs/schema'
import choiceSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/choice.schema'
import linkSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/link.schema'
import { SpruceSchemas } from '../../schemas.types'

const sendMessageMessagePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayloadSchema =
    {
        id: 'sendMessageMessagePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . An arbitrary id that can be used to track this message when being sent and not yet assigned an Id. */
            trackingId: {
                type: 'id',
                hint: 'An arbitrary id that can be used to track this message when being sent and not yet assigned an Id.',
                options: undefined,
            },
            /** . */
            classification: {
                type: 'select',
                isRequired: true,
                options: {
                    choices: [
                        { value: 'auth', label: 'Auth' },
                        { value: 'transactional', label: 'transactional' },
                        { value: 'promotional', label: 'Promotional' },
                        { value: 'incoming', label: 'incoming' },
                    ],
                },
            },
            /** . */
            body: {
                type: 'text',
                isRequired: true,
                options: undefined,
            },
            /** . */
            context: {
                type: 'raw',
                isPrivate: true,
                options: { valueType: `Record<string, any>` },
            },
            /** . */
            topicId: {
                type: 'id',
                options: undefined,
            },
            /** . */
            links: {
                type: 'schema',
                isArray: true,
                minArrayLength: 0,
                options: { schema: linkSchema_v2020_07_22 },
            },
            /** . */
            choices: {
                type: 'schema',
                isArray: true,
                options: { schema: choiceSchema_v2020_07_22 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(sendMessageMessagePayloadSchema)

export default sendMessageMessagePayloadSchema
