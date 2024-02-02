const WHITE = 'w';
const BLACK = 'b';

const PAWN = 'p';
const KNIGHT = 'n';
const BISHOP = 'b';
const ROOK = 'r';
const QUEEN = 'q';
const KING = 'k';

class Piece {
  constructor(piece, color, square) {
    this.piece = piece;
    this.color = color;
    this.square = square;
  }
}

class BoardState {
  constructor(pieces, previousBoardState) {
    this.pieces = pieces;
    this.previousBoardState = previousBoardState
  }
}

function getSquare(boardState, square) {
  return boardState.pieces.filter(piece => piece.square === square);
}

console.log(getSquare(new BoardState([new Piece(PAWN, WHITE, 'a1')], null), 'a1'));
