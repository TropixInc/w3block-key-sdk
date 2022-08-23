import axios from "axios";
import { Api } from '../../src/index';

import MockAdapter from "axios-mock-adapter";


const mock = new MockAdapter(axios);


describe("SDK", () => {
  const baseURL = process.env.API_BASE_URL || 'http://localhost:6007'

  it("should be able to create the sdk instance", async () => {
    const sdk = new Api({
      baseURL,
    });
    expect(sdk).toBeDefined();
  });
});
