import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { itemCreation } from "../generated/schema"
import { itemCreation as itemCreationEvent } from "../generated/ArtAlley/ArtAlley"
import { handleitemCreation } from "../src/art-alley"
import { createitemCreationEvent } from "./art-alley-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let collectionAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let Price = BigInt.fromI32(234)
    let aproval = "boolean Not implemented"
    let newitemCreationEvent = createitemCreationEvent(
      owner,
      collectionAddress,
      tokenId,
      Price,
      aproval
    )
    handleitemCreation(newitemCreationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("itemCreation created and stored", () => {
    assert.entityCount("itemCreation", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "itemCreation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "itemCreation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "collectionAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "itemCreation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "itemCreation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "Price",
      "234"
    )
    assert.fieldEquals(
      "itemCreation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "aproval",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
