import {
  itemCreation as itemCreationEvent,
  listingCancled as listingCancledEvent,
  listingSold as listingSoldEvent,
  newListingCreated as newListingCreatedEvent,
  offerAccepted as offerAcceptedEvent,
  offerCreated as offerCreatedEvent,
  offerDeleted as offerDeletedEvent,
  offerUpdated as offerUpdatedEvent,
  updatedListing as updatedListingEvent
} from "../generated/ArtAlley/ArtAlley"
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
} from "../generated/schema"

export function handleitemCreation(event: itemCreationEvent): void {
  let entity = new itemCreation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.Price = event.params.Price
  entity.aproval = event.params.aproval

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlelistingCancled(event: listingCancledEvent): void {
  let entity = new listingCancled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlelistingSold(event: listingSoldEvent): void {
  let entity = new listingSold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.Price = event.params.Price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenewListingCreated(event: newListingCreatedEvent): void {
  let entity = new newListingCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.listingPrice = event.params.listingPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleofferAccepted(event: offerAcceptedEvent): void {
  let entity = new offerAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.offerer = event.params.offerer
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.Price = event.params.Price
  entity.Endtime = event.params.Endtime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleofferCreated(event: offerCreatedEvent): void {
  let entity = new offerCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.offerer = event.params.offerer
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.Price = event.params.Price
  entity.Endtime = event.params.Endtime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleofferDeleted(event: offerDeletedEvent): void {
  let entity = new offerDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.offerer = event.params.offerer
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.Price = event.params.Price
  entity.Endtime = event.params.Endtime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleofferUpdated(event: offerUpdatedEvent): void {
  let entity = new offerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.offerer = event.params.offerer
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.Price = event.params.Price
  entity.Endtime = event.params.Endtime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleupdatedListing(event: updatedListingEvent): void {
  let entity = new updatedListing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.collectionAddress = event.params.collectionAddress
  entity.tokenId = event.params.tokenId
  entity.listingPrice = event.params.listingPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
