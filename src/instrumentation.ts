import config from "./config";
import initDB from "./db/core/init";
import { createPool } from "mariadb";

export function register() {
  console.log("Init DB...");
  (global as any).pool = createPool(config.db)
  initDB();
}

// TODO: Dashboard
// [x]  Make UI kit
//   [x] -  Button
//   [x] -  Textbox
//   [x] -  Combobox
//   [x] -  Image Picker
//   [x] -  Numeric box
//   [x] -  Checkbox
// [ ] Implement everything
//   [ ] -  Get and display parameters for each Layout/Background
//   [ ] -  Preview page
//   [ ] -  Advanced Calendar management
// TODO: Real DB implementation
// TODO: Commentary
// [ ] Pretty textbox for it
// [ ] Comments view in the dashboard
// [ ] Get device footprint
// [ ] Spam Check
//   [ ] -  Limit to 1 hour between each comment from the same address
//   [ ] -  Whitelist device footprint
// [ ] Pretty view for sent comments in old rizz view