interface IEnv {
  VITE_BASE_URL: string;
}

function checkEnv(): IEnv {
  const requiredEnv: (keyof IEnv)[] = ["VITE_BASE_URL"];
  const env = {} as IEnv;

  requiredEnv.forEach((key) => {
    const value = import.meta.env[key];
    if (!value) {
      throw new Error(`Missing required env ${key}`);
    }
    env[key] = value;
  });

  return env;
}

export const env = checkEnv()
