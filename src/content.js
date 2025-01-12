import * as InboxSDK from "@inboxsdk/core";

InboxSDK.load(2, "sdk_pro111_72e70e643e").then((sdk) => {
  // the SDK has been loaded, now do something with it!
  sdk.Compose.registerComposeViewHandler((composeView) => {
    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "My Nifty Button!",
      iconUrl:
        "https://img.icons8.com/?size=100&id=1349&format=png&color=000000",
      onClick(event) {
        event.composeView.insertTextIntoBodyAtCursor("Hello World!");
      },
    });
  });
});
