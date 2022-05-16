export default function getEnvironmentVariable(name: string, defaultValue?: string): string {
  const value = process.env[name] ?? defaultValue;
  if (!value) {
    throw new Error(`Required environment variable not set: ${name}`);
  }
  return value;
}
