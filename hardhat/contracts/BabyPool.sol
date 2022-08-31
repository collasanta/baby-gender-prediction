// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract BabyPool {
    enum Side {
        Menino,
        Menina
    }

    struct Result {
        Side winner;
        Side loser;
    }

    Result public result;

    bool public electionFinished;

    mapping(Side => uint) public bets;
    mapping(address => mapping(Side => uint)) public betsPerGambler;

    address public oracle;

    constructor(address _oracle) {
        oracle = _oracle;
    }

    function placeBet(Side _side) external payable {
        require(electionFinished == false, "Bolao ja terminou");
        bets[_side] += msg.value;
        betsPerGambler[msg.sender][_side] += msg.value;
    }

    function withdrawGain() external {
        uint gamblerBet = betsPerGambler[msg.sender][result.winner];
        require(gamblerBet > 0, "Voce nao tem aposta vencedora");
        require(electionFinished == true, "Bolao ainda nao terminou");
        uint gain = gamblerBet +
            (bets[result.loser] * gamblerBet) /
            bets[result.winner];
        betsPerGambler[msg.sender][Side.Menino] = 0;
        betsPerGambler[msg.sender][Side.Menina] = 0;
        // payable(msg.sender).transfer(gain);
        (bool sucess, ) = msg.sender.call{value: gain}("");
        require(sucess, "call failed");
    }

    function reportResult(Side _winner, Side _loser) external {
        require(oracle == msg.sender, "Somente o dono");
        require(electionFinished == false, "Bolao ja terminou");
        result.winner = _winner;
        result.loser = _loser;
        electionFinished = true;
    }
}