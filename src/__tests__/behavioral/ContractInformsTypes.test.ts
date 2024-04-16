import { SkillEventContract } from '@sprucelabs/mercury-types'
import AbstractSpruceTest, { test } from '@sprucelabs/test'
import TestClient from '../../tests/TestClient'

export default class ContractInformsTypesTest extends AbstractSpruceTest {
    @test('Handles core contract (always passes, types will fail)')
    protected static async coreContractWorksWithClient() {
        //@ts-ignore
        const client = new TestClient<SkillEventContract>()

        await client.emit('did-message::v2020_12_25', {
            target: {},
            payload: {
                message: {
                    id: 'aoeuaoeu',
                    dateCreated: 1,
                    target: {
                        personId: '01',
                    },
                    body: 'write it down',
                    classification: 'incoming',
                    source: {
                        skillId: '02',
                    },
                },
            },
        })
    }
}
