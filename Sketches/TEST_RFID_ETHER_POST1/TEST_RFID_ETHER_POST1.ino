 // ================================= RFID DECLARATION ===========================

#include <SPI.h>
#include <MFRC522.h>
 
#define SS_PIN 2
#define RST_PIN 5
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.

//=======================================DECLARATION ETHERNET =================================


#include <SPI.h>
#include <Ethernet.h>

// assign a MAC address for the ethernet controller.
// fill in your address here:
byte mac[] = {
  0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED
};

byte ip[] = { 192, 168, 1, 241};
byte server[] = { 192, 168, 1, 122 };
byte myDns[] = { 192, 168, 1, 1 };

String data;
EthernetClient client;

// ================================== SETUP ======================================


void setup() {   
  
//=========================== RFID SETUP ==============================
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
//=================================ETHERNET SETUP ===============================

//  Ethernet.init(10);  // Most Arduino shields
  Ethernet.begin(mac, ip) ;
  Serial.begin(9600);   // Initiate a serial communication

  // start the Ethernet connection:
  Serial.println("Initialize Ethernet with DHCP:");
  if (Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");
    // Check for Ethernet hardware present
    if (Ethernet.hardwareStatus() == EthernetNoHardware) {
      Serial.println("Ethernet shield was not found.  Sorry, can't run without hardware. :(");
      while (true) {
        delay(1); // do nothing, no point running without Ethernet hardware
      }
    }
    if (Ethernet.linkStatus() == LinkOFF) {
      Serial.println("Ethernet cable is not connected.");
    }
    // try to congifure using IP address instead of DHCP:
    Ethernet.begin(mac, ip, myDns);
    Serial.print("My IP address: ");
    Serial.println(Ethernet.localIP());
  } else {
    Serial.print("  DHCP assigned IP ");
    Serial.println(Ethernet.localIP());
    Serial.println("connecting...");
  }
  // give the Ethernet shield a second to initialize:
  delay(1000); //Change it later
  
  Serial.println("Welcome!");
  Serial.println("Scan Your Card");
}
//================================ LOOP ========================================
void loop() 
{
// Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
// Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }

  String content= "";
  
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
//     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
//     Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? "-0" : "-"));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
     
  }
  content.toUpperCase();
  Serial.println(content); //UID is stored on content variable.

  data = "cid=" + content;
  
  Serial.println("Connecting...");

//  sending i guess
  if(client.connect(server, 80)) {
    client.println("POST /test/data.php HTTP/1.1");
    Serial.println("POST /test/data.php HTTP/1.1");
    client.println("Host: 192.168.1.122");
    Serial.println("Host: 192.168.1.122");
    client.println("Content-Type: application/x-www-form-urlencoded");
    Serial.println("Content-Type: application/x-www-form-urlencoded");
    client.print("Content-Length: ");
    Serial.print("Content-Length: ");
    client.println(data.length());
    Serial.println(data.length());
    client.println();
    Serial.println();
    client.print(data);
    Serial.print(data);
   }
    if(client.connected()){
      client.stop();
      Serial.println("Disconnected");
    }    
   Serial.println("Delay in progress");
//   delay(5000);
    // Halt PICC
  mfrc522.PICC_HaltA();
}
