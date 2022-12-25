import mixpanel from "mixpanel-browser";

let token: string = process.env.REACT_APP_MIXPANEL_TOKEN ?? "";

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
