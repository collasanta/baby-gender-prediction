const { expect } = require("chai");
const { ethers } = require("hardhat")

describe("BabyPool", function () {

  before(async () => {
    const [owner, otherAccount] = await ethers.getSigners();
    const BabyPool = await ethers.getContractFactory("BabyPool");
    const babyPool = await BabyPool.deploy(unlockTime, { value: lockedAmount });
    await babyPool.deployed()
  })

  describe("", function () {
    it("", async function () {

    });
  })

  

});
