import "@modelcontextprotocol/sdk/client/sse.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";



const client = new Client({
    name: "example-client",
    version: "1.0.0"
}, {
    capabilities: {}
});
  
const transport = new SSEClientTransport(
    new URL("http://localhost:3000/sse")
);

await client.connect(transport);
console.log("Connected to server successfully!");

