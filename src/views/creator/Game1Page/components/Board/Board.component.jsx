import React from "react";
import Cell from "../Cell/Cell.component";
import "./Board.scss";
import { Button } from "reactstrap";
import { getPlayer, getSnakes, getLadder } from "../../utils/util";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Board() {
  const [diceNumber, setDiceNumber] = React.useState(1);
  const [players, setPlayers] = React.useState(getPlayer());
  const [snakes] = React.useState(getSnakes());
  const [ladders] = React.useState(getLadder());
  const [turn, setTurn] = React.useState(0);
  const [gameover, setGameover] = React.useState(false);
  const [start, setStart] = React.useState(false);

  const { transcript, resetTranscript } = useSpeechRecognition();

  const onRollDiceClick = React.useCallback(() => {
    if (gameover) return; // Prevent action if the game is over

    const min = 1;
    const max = 7;
    const rand = Math.floor(min + Math.random() * (max - min));
    let player = [...players];
    const currentTurn = turn;

    if (!player[currentTurn].start) {
      if (rand === 1) player[currentTurn].start = true;
      setDiceNumber(rand);
      setPlayers(player);
      setTurn(currentTurn === 0 ? 1 : 0);
      return;
    } else if (player[currentTurn].status > 94) {
      const sum = player[currentTurn].status + rand;
      if (sum > 100) {
        setDiceNumber(rand);
        setPlayers(player);
        setTurn(currentTurn === 0 ? 1 : 0);
        return;
      } else if (sum === 100) {
        player[currentTurn].status = sum;
        setDiceNumber(rand);
        setPlayers(player);
        setTurn(currentTurn === 0 ? 1 : 0);
        setGameover(true);
        toast.success("Game Over " + player[currentTurn].name + " Won", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        return;
      }
    }

    player[currentTurn].status += rand;
    let status = player[currentTurn].status;
    
    // Snake bite
    const snakeFound = checkSnake(status);
    if (snakeFound) player[currentTurn].status = snakeFound.tail;

    // Ladder Check
    const ladderFound = checkLadder(status);
    if (ladderFound) player[currentTurn].status = ladderFound.to;

    setDiceNumber(rand);
    setPlayers(player);
    setTurn(currentTurn === 0 ? 1 : 0);
  }, [players, turn, gameover]);

  const checkSnake = (i) => {
    return snakes.find((k) => k.head === i);
  };

  const checkLadder = (i) => {
    return ladders.find((k) => k.from === i);
  };

  const checkPlayer = (i) => {
    return players.find((k) => k.status === i);
  };

  const createBoard = (init, cellnos) => {
    const boardHtml = [];

    for (let i = init; i <= cellnos; i++) {
      const playerFound = checkPlayer(i);
      const snakeFound = checkSnake(i);
      const ladderFound = checkLadder(i);
      const found = { backgroundColor: "grey" };

      boardHtml.push(
        <Cell
          sStyle={found}
          snake={snakeFound}
          ladder={ladderFound}
          player={playerFound}
          number={i}
          key={i}
        />
      );
    }
    return boardHtml;
  };

  const startVoiceRecognition = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopVoiceRecognition = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
  };

  React.useEffect(() => {
    // Filter the transcript to detect "roll" more precisely
    const isRollCommand = /roll/i.test(transcript);

    if (isRollCommand && !gameover) {
      onRollDiceClick(); // Trigger dice roll only if the game is not over
      resetTranscript(); // Clear the transcript after processing the command
    }
  }, [transcript, onRollDiceClick, gameover, resetTranscript]);

  const fixedCol = 10;
  const boardHtml = [];
  for (let i = 0; i < 10; i++) {
    const eachRow = createBoard(i * fixedCol + 1, fixedCol * (i + 1));
    boardHtml.push(<div key={i * fixedCol + 1 + "main"}>{eachRow}</div>);
  }

  return (
    <>

      <div className="boardGame">
        <div className="dice">
          <span style={{ padding: "1rem" }}>
            {players[turn].start ? "Turn for" : "Wait for"} {players[turn].name}
          </span>
          <span style={{ padding: "1rem" }}>
            {!players[turn].start ? " Get '1' to start" : ""}
          </span>
        </div>
        <div>
          <div className="table">{boardHtml}</div>
        </div>
        <div className="dice">
          <Button variant="primary" onClick={onRollDiceClick}>
            Roll the dice
          </Button>
          <span style={{ padding: "1rem" }}>
            {start ? players[turn === 0 ? 1 : 0].name + " moved " + diceNumber : "Start throw Dice"}
          </span>
          <Button variant="secondary" onClick={startVoiceRecognition}>
            Start Voice Recognition
          </Button>
          <Button variant="secondary" onClick={stopVoiceRecognition}>
            Stop Voice Recognition
          </Button>
        </div>
      </div> {/* Add ToastContainer to your component */}
    </>
  );
}
