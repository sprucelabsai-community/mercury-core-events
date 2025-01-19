import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getPersonEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitPayloadSchema  = {
	id: 'getPersonEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . Includes PII fields like full name and phone number. */
	            'shouldIncludePrivateFields': {
	                type: 'boolean',
	                hint: 'Includes PII fields like full name and phone number.',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getPersonEmitPayloadSchema)

export default getPersonEmitPayloadSchema
