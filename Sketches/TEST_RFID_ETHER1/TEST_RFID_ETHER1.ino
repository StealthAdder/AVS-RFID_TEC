// ================================= RFID DECLARATION ===========================

#include <SPI.h>
#include <MFRC522.h>
 
#define SS_PIN 2
#define RST_PIN 5
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.

//=======================================DECLARATION ETHERNET =================================

#include <SPI.h>
#include <Ethernet.h>

IPAddress ip(192, 168, 1, 188);

EthernetClient client;

// Enter a MAC address for your controller below.
// Newer Ethernet shields have a MAC address printed on a sticker on the shield
byte mac[] = {
  0x00, 0xAA, 0xBB, 0xCC, 0xDE, 0x02
};
byte gateway[] = {  192, 168, 1, 1 }; // internet access via router
byte subnet[] = {  255, 255, 255, 0 }; //subnet mask

// ================================== SETUP ======================================


void setup() {   
  Serial.begin(9600);   // Initiate a serial communication
  
//=========================== RFID SETUP ==============================
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522

//=================================ETHERNET SETUP ===============================

  Ethernet.init(10);  // Most Arduino shields
 // Ethernet.begin(mac, ipstatic, gateway, gateway, subnet) ;

  if (  Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");
    Serial.print("DHCP Failed");
      
    if (Ethernet.hardwareStatus() == EthernetNoHardware) {
      Serial.println("Ethernet shield was not found.  Sorry, can't run without hardware. :(");
      
 while(1){
  
 }
    }
    if (Ethernet.linkStatus() == LinkOFF) {
      Serial.println("Ethernet cable is not connected.");
    }
  } else {
    Serial.print("DHCP Assigned IP ");
    Serial.println(Ethernet.localIP());
  }
  // give the Ethernet shield a second to initialize:
  delay(1000); //Change it later
  Serial.println("Welcome!");
  Serial.println("Scan Your Card");
}
//================================ LOOP ========================================
int modeAdmin = 0;
void loop() 
{
//  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
//  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
//  // Reset the loop if no new card present on the sensor/reader. This saves the entire process when idle.
//  if ( ! mfrc522.PICC_IsNewCardPresent())
//    return;
//
////   Verify if the NUID has been readed //Limits multiple reads
//  if ( ! mfrc522.PICC_ReadCardSerial())
//    return;
    

//  digitalWrite(12,HIGH);
//delay(500);
//  digitalWrite(12,LOW);


  String content= "";
  byte letter;
  String c;
  
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
//     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
//     Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : ""));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
     
  }
  content.toUpperCase();
  Serial.println(content);
  
    // Halt PICC
  mfrc522.PICC_HaltA();
}
