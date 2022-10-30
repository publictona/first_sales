import { Application } from "express";
import http from "http";
import { AddressInfo } from "net";

const port = process.env.SAASLY_LOCAL_REST_PORT || 9434;

export default function startServer(app: Application): void {
  const server = http.createServer(app).listen({ port }, () => {
    const addressInfo = server.address() as AddressInfo;
    console.log(
      `#202224814341626 Listening at http://${addressInfo.address}:${addressInfo.port}`
    );
  });

  const signalTraps: NodeJS.Signals[] = ["SIGTERM", "SIGINT", "SIGUSR2"];
  signalTraps.forEach((type) => {
    process.once(type, async () => {
      console.log(`#20222481454903 process.once: ${type}`);
      server.close(() => {
        console.log(`#202224814540763 Server stopped listening`);
      });
    });
  });
}
