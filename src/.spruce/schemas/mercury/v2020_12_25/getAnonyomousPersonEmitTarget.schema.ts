import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getAnonyomousPersonEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.GetAnonyomousPersonEmitTargetSchema  = {
	id: 'getAnonyomousPersonEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAnonyomousPersonEmitTargetSchema)

export default getAnonyomousPersonEmitTargetSchema
