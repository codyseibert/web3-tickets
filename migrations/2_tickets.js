const Tickets = artifacts.require("Tickets");

module.exports = function (deployer) {
  deployer.deploy(Tickets);
};
