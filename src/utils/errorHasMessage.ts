export const errorHasMessage = (err: unknown): err is { message: string } => {
  return (
    typeof err === 'object' && err !== null && 'message' in err && typeof err.message === 'string'
  );
};
