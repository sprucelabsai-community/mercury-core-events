import addRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/addRoleEmitTargetAndPayload.schema'
import addRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/addRoleResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const addRoleEventContract = buildEventContract({
    eventSignatures: {
        'add-role::v2020_12_25': {
            
            emitPayloadSchema: addRoleEmitTargetAndPayloadSchema,
            responsePayloadSchema: addRoleResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "hiring-and-promoting",
  "name": "Hiring and promoting contract",
  "description": "Various permissions related to emitting hiring and promoting people at organizations and locations.",
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-hire-person",
      "name": "Hire a person",
      "defaults": {
        "owner": {
          "default": true
        },
        "groupManager": {
          "default": true
        },
        "manager": {
          "default": true
        },
        "skill": true
      }
    },
    {
      "id": "can-fire-person",
      "name": "Fire a person",
      "defaults": {
        "owner": {
          "default": true
        },
        "groupManager": {
          "default": true
        },
        "manager": {
          "default": true
        },
        "skill": true
      }
    },
    {
      "id": "hire-and-promote-when-not-installed",
      "name": "Can hire even when not installed.",
      "defaults": {
        "skill": false
      }
    }
  ]
}),
            
        }
    }
})
export default addRoleEventContract

export type AddRoleEventContract = typeof addRoleEventContract