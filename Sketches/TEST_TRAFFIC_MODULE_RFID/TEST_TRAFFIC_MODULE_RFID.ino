/*
Create an Traffic signal system on total duration 90sec
red signal - 60 = 57 + 2 yellow blink.
green signal - 30 = 26 + 3 blinking sec

*/


// ================================= RFID DECLARATION ===========================

#include <SPI.h>
#include <MFRC522.h>
 
#define SS_PIN 6
#define RST_PIN 2
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

EthernetClient client;
// ================================== SETUP ======================================

int redled = 3;
int yellowled = 4;
int greenled = 5;
int blueLed = 7;

const unsigned long interval = 15000; //every 15 sec the red comes back.
unsigned long previousTime =0;

void setup(){

  pinMode (redled, OUTPUT);
  pinMode (yellowled, OUTPUT);
  pinMode (greenled, OUTPUT);
  pinMode (blueLed, OUTPUT);
  Serial.begin(9600);
//=========================== RFID SETUP ==============================
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
//=================================ETHERNET SETUP ===============================

//  Ethernet.init(10);  // Most Arduino shields
 // Ethernet.begin(mac, ipstatic, gateway, gateway, subnet) ;

  if (  Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");
    Serial.print("DHCP Failed");
      
    if (Ethernet.hardwareStatus() == EthernetNoHardware) {
      Serial.println("Ethernet shield was not found.  Sorry, can't run without hardware. :(");
    }
    if (Ethernet.linkStatus() == LinkOFF) {
      Serial.println("Ethernet cable is not connected.");
    }
  } else {
    Serial.print("DHCP Assigned IP ");
    Serial.println(Ethernet.localIP());
  }
  // give the Ethernet shield a second to initialize:
  delay(850); //Change it later

  Serial.println("Ethernet Initalized..");
  Serial.println("All Systems go...");
  // give the Ethernet shield a second to initialize:
}

void loop(){

unsigned long currentTime = millis();
  //Red Signal

if (currentTime - previousTime >= interval){
  for (int i=0; i<=102; i++){
    digitalWrite (redled, HIGH);
    rfid();
    delay(100);
  previousTime = currentTime;
  Serial.println(currentTime);
  }
}
  
//Yellow Signal Blinking 1 sec 
// for(int i=0; i<=1; i++){
//  digitalWrite (yellowled, HIGH);
//  delay(450);
//  digitalWrite (yellowled, LOW);
//  delay(450);
//  }
  
//Steady yellow 
  digitalWrite (redled, LOW);
//  digitalWrite (yellowled, HIGH);
//  delay (700);
//  digitalWrite (yellowled, LOW);

  
//Green Signal   
  digitalWrite (greenled, HIGH);
  delay (10000); //sec = 10
      
//blinking green 3 sec
for (int i=0; i<=2; i++){
  digitalWrite (greenled, LOW);// greenled start flashing
  delay (500);
  digitalWrite (greenled, HIGH);
  delay (500); 
  }
  digitalWrite (greenled, LOW);
  digitalWrite (yellowled, HIGH);
  delay (700);
  digitalWrite (yellowled, LOW);
}


void rfid() {
  
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
  Serial.print(F(": Card UID:"));
  String content= "";
  
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));     
  }
  content.toUpperCase();
  Serial.println(content); //UID is stored on content variable.
  for (int i=0;i<=1; i++){
    digitalWrite(blueLed,HIGH);
    delay(25);
    digitalWrite(blueLed,LOW);
    delay(25);
  }
  
mfrc522.PICC_HaltA();

}
