import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const setAuthorizerStatusEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SetAuthorizerStatusEmitPayloadSchema  = {
	id: 'setAuthorizerStatusEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Status. */
	            'statuses': {
	                label: 'Status',
	                type: 'select',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {choices: [{"label":"Clocked in","value":"clockedIn"},{"label":"Clocked out","value":"clockedOut"},{"label":"On premises","value":"onPrem"},{"label":"Off premises","value":"offPrem"}],}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(setAuthorizerStatusEmitPayloadSchema)

export default setAuthorizerStatusEmitPayloadSchema
