import { GUI } from 'dat.gui';

export class Controls extends GUI {
  constructor() {
    super();
    this.initializeUI();
  }

  initializeUI() {
    // TODO: use state to hold all data and update it using the GUI controls
    this.addFolder('Scene');
    this.addFolder('Camera');
    this.addFolder('Lighting');
  }
}
