interface actionItem {
  name: string;
  action: string;
}

interface Webhook {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  urls: actionItem[];
}
