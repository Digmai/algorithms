export type Endpoint = {
  x: number;
  y: number;
  value: number;
};

export interface Endpoints {
  mid: Endpoint;
  top: Endpoint;
  left: Endpoint;
  right: Endpoint;
  bottom: Endpoint;
}
