export interface GetReferenceItemsResponse {
  referenceItems: Array<ReferenceItems>;
}

export interface ReferenceItems {
  id: string;
  key: string;
  value: string;
}
