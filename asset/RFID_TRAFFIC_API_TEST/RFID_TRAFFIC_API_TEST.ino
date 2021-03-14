/*
Create an Traffic signal system on total duration 90sec
red signal - 60 = 57 + 2 yellow blink.
green signal - 30 = 26 + 3 blinking sec

*/
// ================================= RFID DECLARATION ===========================

#include <SPI.h>
#include <MFRC522.h>
#include <ArduinoJson.h>
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

byte server[] = { 192, 168, 1, 122 };
byte myDns[] = { 192, 168, 1, 1 };

String data; //variable to be posted.
EthernetClient client;
// ================================== SETUP ======================================

int redled = 3;
int yellowled = 4;
int greenled = 5;
int blueled = 7;
int shortdelay = 200;
const unsigned long interval = 15000; //every 15000 ms the red comes back.
unsigned long previousTime =0;

void setup(){

  pinMode (redled, OUTPUT);
  pinMode (yellowled, OUTPUT);
  pinMode (greenled, OUTPUT);
  pinMode (blueled, OUTPUT);
  Serial.begin(9600);
//=========================== RFID SETUP ==============================
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
//=================================ETHERNET SETUP ===============================

//  Ethernet.init(10);  // Most Arduino shields
 // Ethernet.begin(mac, ipstatic, gateway, gateway, subnet) ;
  Serial.println("Booting Traffic Light RFD IoT - AVS-RFID_TEC...");
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
    Serial.print("Network: DHCP Assigned IP ");
    Serial.println(Ethernet.localIP());
  }
  // give the Ethernet shield a second to initialize:
  delay(850); //Change it later
    Serial.println("AVS-RFID_TEC IoT: Ethernet Initalized..");
    Serial.println("AVS-RFID_TEC IoT: Powering up...");
  for(int i=0; i<=2; i++){
    digitalWrite(blueled, HIGH);
    delay(shortdelay);
    digitalWrite(blueled, LOW);
    digitalWrite(greenled, HIGH);
    delay(shortdelay);
    digitalWrite(greenled, LOW);
    digitalWrite(yellowled, HIGH);
    delay(shortdelay);
    digitalWrite(yellowled, LOW);
    delay(shortdelay);
    digitalWrite(yellowled, LOW);
    digitalWrite(redled, HIGH);
    delay(shortdelay);
    digitalWrite(redled, LOW);
  }
//  delay(500);
  Serial.println("AVS-RFID_TEC IoT: Startup was Nominal..");
  // give the Ethernet shield a second to initialize:
}

void loop(){

unsigned long currentTime = millis();
  //Red Signal

if (currentTime - previousTime >= interval){
  for (int i=0; i<=202; i++){ //102 = ~15 secs for 15000 interval.
    digitalWrite (redled, HIGH);
    rfid();
    delay(100); //default is 100ms
  previousTime = currentTime;
//  Serial.println(currentTime);
  }
}
  
//Yellow Signal Blinking 1 sec 
// for(int i=0; i<=0; i++){
//  digitalWrite (yellowled, HIGH);
//  delay(450);
//  digitalWrite (yellowled, LOW);
//  delay(450);
//  }
//  
//Steady yellow 
  digitalWrite (redled, LOW);
  digitalWrite (yellowled, HIGH);
  delay (700);
  digitalWrite (yellowled, LOW);

  
//Green Signal   
  digitalWrite (greenled, HIGH);
  delay (20000); //sec = 10
      
//blinking green 3 sec
for (int i=0; i<=2; i++){
  digitalWrite (greenled, LOW);// greenled start flashing
  delay (500);
  digitalWrite (greenled, HIGH);
  delay (500); 
  }
  digitalWrite (greenled, LOW);
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
  
      String Station_info;
      String location="HEBBAL";
      String zipcode="560 032";
      String rfd_id = "RFD-1";
      
      Station_info = (String(location)+String(rfd_id)+" ZIP-"+String(zipcode));
      Serial.print(Station_info); //Prints station info
      Serial.print(F(": Card UID:"));
      
  String content= "";
  
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : ""));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));  
  }
  content.toUpperCase();
  Serial.println(content); //UID is stored on content variable.
  
//  BLUE LED DETECTION LED.
  for (int i=0;i<=1; i++){
    digitalWrite(blueled,HIGH);
    delay(25);
    digitalWrite(blueled,LOW);
    delay(25);
  }

  //ARDUINO_JSON
  StaticJsonDocument<200> doc;
  
  doc["rf_tag"]=content;
  doc["location"]=location;
  doc["zipcode"]=zipcode;
  doc["rfd_id"]=rfd_id;

  char package[200];
  serializeJson(doc, package);
  Serial.println(package);
  
  content = "";//clear the content value.

  Serial.println("AVS-RFID_TEC IoT: Initalizing Trasmission.....");

//client.print is the actual function doing transmission, we use serial.print to show the output on serial monitor for debugging.
  if(client.connect(server, 3000)) {
    client.println("POST /api/rftraffic HTTP/1.1");
    Serial.println("POST /api/rftraffic HTTP/1.1");
    client.println("Host: 192.168.1.122:3000");
    Serial.println("Host: 192.168.1.122:3000");
    client.println("Connection: close\r\nContent-Type: application/json");
    Serial.println("Connection: close\r\nContent-Type: application/json");
    client.print("Content-Length: ");
    Serial.print("Content-Length: ");
    size_t len = measureJson(doc);
    client.println(len);
    Serial.println(len);
    client.print("\r\n");
    client.println(package);
    Serial.println(package);
    digitalWrite(blueled, HIGH);
    delay(shortdelay);
    digitalWrite(blueled, LOW);
   }
    if(client.connected()){
      client.stop();
      Serial.println("AVS-RFID_TEC IoT: Close the transmission");
    }    
   Serial.println("AVS-RFID_TEC IoT: Transmission ended.");
  
mfrc522.PICC_HaltA();
void clear();
}
