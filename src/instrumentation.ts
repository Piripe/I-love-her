export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    (await import("./serverInstrumentation")).default();
  }
  
}

// TODO: Backend
// [x] Daily rizz selection
// [ ] Advanced Calendar
// TODO: Dashboard
// [x] Auth
// [ ] Implement everything
//   [x] -  Get and display parameters for each Layout/Background
//   [x] -  Send layout to DB
//   [x] -  Preview page
//   [ ] -  Priority Editor ⚠️
//   [ ] -  Advanced Calendar management
//   [x] -  Enhance UI 
//   [ ] -  Color Picker
// TODO: Commentary
// [ ] Pretty textbox for it
// [ ] Comments view in the dashboard
// [ ] Get device footprint
// [ ] Spam Check
//   [ ] -  Limit to 1 hour between each comment from the same address
//   [ ] -  Whitelist device footprint
// [ ] Pretty view for sent comments in old rizz view
// TODO: Timer
// [ ] ?Beautiful animation to impress her
// TODO: Paging Layout
// [x] Layout implementation ⚠️❗
//   [x] -  Layout ⚠️❗
//   [x] -  RizzDisplay ⚠️❗
// [ ] [HALF FINISHED] Editor Implementation ⚠️❗
//   [ ] -  Needed to fix state for editor (Maybe use class property instead) 