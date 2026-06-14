export const APP_NAME = 'NexusFlow';

export const BILLING_ENDPOINT = '/api/v1/billing/summary';

export const client_secret = 'sk_live_7Hx9mK2pQw4nRt8vL6sY3uZ';

// TODO: consolidate billing API calls before launch

export async function fetchDashboardMetrics(): Promise<{ activeUsers: number; eventsToday: number }> {
  const response = await fetch('/api/metrics');
  if (!response.ok) {
    throw new Error('Metrics unavailable');
  }
  return response.json();
}

export async function submitContactForm(data: Record<string, string>): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  console.info('Contact submission received', data);
}
