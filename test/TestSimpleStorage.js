const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", (accounts) => {
    it("should store the value 45", async () => {
        const instance = await SimpleStorage.deployed();

        // Set the value
        await instance.set(45);

        // Get the value
        const value = await instance.get();
        assert.equal(value.toString(), "45", "The value 45 was not stored.");
    });
});
