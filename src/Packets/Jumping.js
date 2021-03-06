/**
 * Jumping packet
 * @class Jumping
 * @export
 */
export class Jumping {

  /**
   * @param  {Number} id
   * @param  {Number} dir
   * @param  {Number} x
   * @param  {Number} y
   * @return {Object}
   * @constructor
   */
  constructor(id, dir) {

    /**
     * Entity id
     * @type {Number}
     */
    this.id = id;

    return (this.encode());

  }

  /**
   * Encode process
   * @return {Object}
   */
  encode() {

    let buffer = new ArrayBuffer(3);
    let view = new DataView(buffer);

    view.setUint8(0, 30, true);
    view.setUint16(1, this.id, true);

    return (view);

  }

}