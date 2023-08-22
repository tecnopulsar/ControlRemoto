#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>

#include <Arduino.h>
#include <IRremoteESP8266.h>
#include <IRsend.h>

#ifndef STASSID
#define STASSID "Tel1976"
#define STAPSK "tecnopulsar76"
#endif

const uint16_t kIrLed = 4;  // ESP8266 GPIO pin to use. Recommended: 4 (D2).

IRsend irsend(kIrLed);  // Set the GPIO to be used to sending the message.

const char* ssid = STASSID;
const char* password = STAPSK;

ESP8266WebServer server(80);

//const int led = 4;

void handleRoot() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", "hello from esp8266!\r\n");
}

void handleNodemcu() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  String message = "";
  for (uint8_t i = 0; i < server.args(); i++) { 
    String codeString = server.arg(i);
    uint32_t code = strtoul(codeString.c_str(), NULL, 16);
    irsend.sendNEC(code,32);
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n"; }
  server.send(200, "text/plain", message);
    //if (server.argName(i) == "command") {
    //  uint32_t code = strtoul(server.arg(i).c_str(), NULL, 10);

   //
  Serial.println(message);
}

void handleNotFound() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) { message += " " + server.argName(i) + ": " + server.arg(i) + "\n"; }
  server.send(404, "text/plain", message);
}

void setup(void) {
  irsend.begin();
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  if (MDNS.begin("esp8266")) { Serial.println("MDNS responder started"); }

  server.on("/", handleRoot);
  server.on("/api/nodemcu", handleNodemcu);


  server.onNotFound(handleNotFound);



  server.begin();
  Serial.println("HTTP server started");
}

void loop(void) {
  server.handleClient();
  MDNS.update();
}
