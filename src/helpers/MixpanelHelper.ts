import mixpanel from "mixpanel-browser";

let token = "a5bb6bef75cb63fa0d184c61ae00956e";

mixpanel.init(token);

let actions = {
  identify: (id: string) => {
    mixpanel.identify(id);
  },
  alias: (id: string) => {
    mixpanel.alias(id);
  },
  track: (name: string, props?: any) => {
    mixpanel.track(name, props);
  },
};

export let Mixpanel = actions;
