import { Provider as ProviderObject } from '../users.constants';
export type Provider = (typeof ProviderObject)[keyof typeof ProviderObject];
