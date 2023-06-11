export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SUCCESSFUL: 201,
    GET_SUCCESSFUL: 200,
  };
  return statusHTTPMap[status] ?? 500;
}