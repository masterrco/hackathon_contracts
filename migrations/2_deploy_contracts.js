var HackathonToken = artifacts.require("HackathonToken");

module.exports = function(deployer) {
  deployer.deploy(HackathonToken);
};
