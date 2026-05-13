const PATH_PREFIX = import.meta.env.VITE_PATH_PREFIX;

export const Routing = {
  Login: `${PATH_PREFIX}/login`,
  ForgotPassword: `${PATH_PREFIX}/forgot-password`,

  Dashboard: `${PATH_PREFIX}/dashboard`,
  DehypnosisTab: `${PATH_PREFIX}/dehypnosis`,
  Dehypnosis: `${PATH_PREFIX}/dehypnosis/dehypnosis`,
  Emotion: `${PATH_PREFIX}/dehypnosis/emotion`,
  Breath: `${PATH_PREFIX}/dehypnosis/breath`,
  Eyes: `${PATH_PREFIX}/dehypnosis/eyes`,
  Ears: `${PATH_PREFIX}/dehypnosis/ears`,
  Tongue: `${PATH_PREFIX}/dehypnosis/tongue`,
  SexEnergy: `${PATH_PREFIX}/dehypnosis/SexEnergy`,
  Exhaution: `${PATH_PREFIX}/dehypnosis/exhaution`,
  Centering: `${PATH_PREFIX}/dehypnosis/centering`,
  Stop: `${PATH_PREFIX}/dehypnosis/stop`,
  Pleasure: `${PATH_PREFIX}/dehypnosis/pleasure`,
  Visualize: `${PATH_PREFIX}/dehypnosis/visualize`,

  ErrorPage: `${PATH_PREFIX}/error`,
  NotFound: `${PATH_PREFIX}/not-found`,
};
