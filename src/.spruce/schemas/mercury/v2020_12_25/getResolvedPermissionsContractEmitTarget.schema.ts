import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getResolvedPermissionsContractEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTargetSchema  = {
	id: 'getResolvedPermissionsContractEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'organizationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'roleId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'contractPersonId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'contractSkillId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getResolvedPermissionsContractEmitTargetSchema)

export default getResolvedPermissionsContractEmitTargetSchema
