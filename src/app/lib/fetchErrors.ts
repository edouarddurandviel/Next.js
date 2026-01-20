export async function fetchErrors(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}
