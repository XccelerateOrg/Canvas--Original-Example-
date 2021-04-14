/**
 * Drawing Rectangle Example class
 */

class DrawingRectangle extends PaintFunction {
  // order is important and must be reflected when invoking this class within the current function
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  // coordinates are passed from the canvas common to this class, these coordinates should preform some logic to the canvas's you have.
  // if you want to let your users see something being drawn out, then you should use the contextDraft, if you want to commit to the drawing to the canvas, use contextReal
  onMouseDown(coord, event) {
    console.log("onMouseDown, class: " + coord);
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextDraft.fillStyle = "red";
    this.contextReal.fillStyle = "red";
    this.contextReal.beginPath();
    this.canvasDraft.beginPath();
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.rect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    // this.contextDraft.fillRect(
    //   this.origX,
    //   this.origY,
    //   coord[0] - this.origX,
    //   coord[1] - this.origY
    // );
    this.contextDraft.stroke();
    console.log("onDragging, class: " + coord);
  }
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // this.contextReal.fillRect(
    //   this.origX,
    //   this.origY,
    //   coord[0] - this.origX,
    //   coord[1] - this.origY
    // );
    this.contextReal.rect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
    this.contextReal.stroke();
    console.log("onMouseUp, class: " + coord);
  }
}

class DrawingStraight extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    console.log("onMouseDown, class: " + coord);

    this.origX = coord[0];
    this.origY = coord[1];

    // this.contextDraft.strokeStyle = "#000"; // we could in theory collate the utilities in an object that is passed every mouse event.
    this.contextDraft.lineWidth = 1;
    // this.contextReal.strokeStyle = "#ccc";
    this.contextReal.lineWidth = 5;
  }
  onDragging(coord, event) {
    this.contextDraft.beginPath();
    this.contextReal.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();

    console.log("onDragging, class: " + coord);
  }
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
    console.log("onMouseUp, class: " + coord);
  }
}
