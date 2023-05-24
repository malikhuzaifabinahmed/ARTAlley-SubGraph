import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  itemCreation,
  listingCancled,
  listingSold,
  newListingCreated,
  offerAccepted,
  offerCreated,
  offerDeleted,
  offerUpdated,
  updatedListing
} from "../generated/ArtAlley/ArtAlley"

export function createitemCreationEvent(
  owner: Address,
  collectionAddress: Address,
  tokenId: BigInt,
  Price: BigInt,
  aproval: boolean
): itemCreation {
  let itemCreationEvent = changetype<itemCreation>(newMockEvent())

  itemCreationEvent.parameters = new Array()

  itemCreationEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  itemCreationEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  itemCreationEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemCreationEvent.parameters.push(
    new ethereum.EventParam("Price", ethereum.Value.fromUnsignedBigInt(Price))
  )
  itemCreationEvent.parameters.push(
    new ethereum.EventParam("aproval", ethereum.Value.fromBoolean(aproval))
  )

  return itemCreationEvent
}

export function createlistingCancledEvent(
  owner: Address,
  collectionAddress: Address,
  tokenId: BigInt
): listingCancled {
  let listingCancledEvent = changetype<listingCancled>(newMockEvent())

  listingCancledEvent.parameters = new Array()

  listingCancledEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  listingCancledEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  listingCancledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return listingCancledEvent
}

export function createlistingSoldEvent(
  owner: Address,
  collectionAddress: Address,
  tokenId: BigInt,
  Price: BigInt
): listingSold {
  let listingSoldEvent = changetype<listingSold>(newMockEvent())

  listingSoldEvent.parameters = new Array()

  listingSoldEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  listingSoldEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  listingSoldEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  listingSoldEvent.parameters.push(
    new ethereum.EventParam("Price", ethereum.Value.fromUnsignedBigInt(Price))
  )

  return listingSoldEvent
}

export function createnewListingCreatedEvent(
  owner: Address,
  collectionAddress: Address,
  tokenId: BigInt,
  listingPrice: BigInt
): newListingCreated {
  let newListingCreatedEvent = changetype<newListingCreated>(newMockEvent())

  newListingCreatedEvent.parameters = new Array()

  newListingCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  newListingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  newListingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  newListingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "listingPrice",
      ethereum.Value.fromUnsignedBigInt(listingPrice)
    )
  )

  return newListingCreatedEvent
}

export function createofferAcceptedEvent(
  offerer: Address,
  collectionAddress: Address,
  tokenId: BigInt,
  Price: BigInt,
  Endtime: BigInt
): offerAccepted {
  let offerAcceptedEvent = changetype<offerAccepted>(newMockEvent())

  offerAcceptedEvent.parameters = new Array()

  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam("offerer", ethereum.Value.fromAddress(offerer))
  )
  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam("Price", ethereum.Value.fromUnsignedBigInt(Price))
  )
  offerAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "Endtime",
      ethereum.Value.fromUnsignedBigInt(Endtime)
    )
  )

  return offerAcceptedEvent
}

export function createofferCreatedEvent(
  offerer: Address,
  collectionAddress: Address,
  tokenId: BigInt,
  Price: BigInt,
  Endtime: BigInt
): offerCreated {
  let offerCreatedEvent = changetype<offerCreated>(newMockEvent())

  offerCreatedEvent.parameters = new Array()

  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("offerer", ethereum.Value.fromAddress(offerer))
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam("Price", ethereum.Value.fromUnsignedBigInt(Price))
  )
  offerCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "Endtime",
      ethereum.Value.fromUnsignedBigInt(Endtime)
    )
  )

  return offerCreatedEvent
}

export function createofferDeletedEvent(
  offerer: Address,
  collectionAddress: Address,
  tokenId: BigInt,
  Price: BigInt,
  Endtime: BigInt
): offerDeleted {
  let offerDeletedEvent = changetype<offerDeleted>(newMockEvent())

  offerDeletedEvent.parameters = new Array()

  offerDeletedEvent.parameters.push(
    new ethereum.EventParam("offerer", ethereum.Value.fromAddress(offerer))
  )
  offerDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  offerDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerDeletedEvent.parameters.push(
    new ethereum.EventParam("Price", ethereum.Value.fromUnsignedBigInt(Price))
  )
  offerDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "Endtime",
      ethereum.Value.fromUnsignedBigInt(Endtime)
    )
  )

  return offerDeletedEvent
}

export function createofferUpdatedEvent(
  offerer: Address,
  collectionAddress: Address,
  tokenId: BigInt,
  Price: BigInt,
  Endtime: BigInt
): offerUpdated {
  let offerUpdatedEvent = changetype<offerUpdated>(newMockEvent())

  offerUpdatedEvent.parameters = new Array()

  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam("offerer", ethereum.Value.fromAddress(offerer))
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam("Price", ethereum.Value.fromUnsignedBigInt(Price))
  )
  offerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "Endtime",
      ethereum.Value.fromUnsignedBigInt(Endtime)
    )
  )

  return offerUpdatedEvent
}

export function createupdatedListingEvent(
  owner: Address,
  collectionAddress: Address,
  tokenId: BigInt,
  listingPrice: BigInt
): updatedListing {
  let updatedListingEvent = changetype<updatedListing>(newMockEvent())

  updatedListingEvent.parameters = new Array()

  updatedListingEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  updatedListingEvent.parameters.push(
    new ethereum.EventParam(
      "collectionAddress",
      ethereum.Value.fromAddress(collectionAddress)
    )
  )
  updatedListingEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  updatedListingEvent.parameters.push(
    new ethereum.EventParam(
      "listingPrice",
      ethereum.Value.fromUnsignedBigInt(listingPrice)
    )
  )

  return updatedListingEvent
}
