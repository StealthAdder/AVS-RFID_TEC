/**
 * Typical pin layout used:
 * -----------------------------------------------------------------------------------------
 *             MFRC522      Arduino       Arduino   Arduino    Arduino          Arduino
 *             Reader/PCD   Uno/101       Mega      Nano v3    Leonardo/Micro   Pro Micro
 * Signal      Pin          Pin           Pin       Pin        Pin              Pin
 * -----------------------------------------------------------------------------------------
 * RST/Reset   RST          9             5         D9         RESET/ICSP-5     RST
 * SPI SS 1    SDA(SS)      ** custom, take a unused pin, only HIGH/LOW required **
 * SPI SS 2    SDA(SS)      ** custom, take a unused pin, only HIGH/LOW required **
 * SPI MOSI    MOSI         11 / ICSP-4   51        D11        ICSP-4           16
 * SPI MISO    MISO         12 / ICSP-1   50        D12        ICSP-1           14
 * SPI SCK     SCK          13 / ICSP-3   52        D13        ICSP-3           15
 *
 */
 
// ================================= RFID DECLARATION ===========================

#include <SPI.h>
#include <MFRC522.h>

#define RST_PIN         2         // Configurable, see typical pin layout above
#define SS_1_PIN        9         // Configurable, take a unused pin, only HIGH/LOW required, must be different to SS 2
#define SS_2_PIN        8         // Configurable, take a unused pin, only HIGH/LOW required, must be different to SS 1,3
#define SS_3_PIN        7         // Configurable, take a unused pin, only HIGH/LOW required, must be different to SS 2,1

#define NR_OF_READERS   3

byte ssPins[] = {SS_1_PIN, SS_2_PIN, SS_3_PIN};

int blueLed = 6;
int yellowLed = 5;
int redLed = 4;

int shortdelay = 150;
int vshortdelay = 50;

MFRC522 mfrc522[NR_OF_READERS];   // Create MFRC522 instance.


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

/**
 * Initialize.
 */
void setup() {
  
  Serial.begin(9600); // Initialize serial communications with the PC
  while (!Serial);    // Do nothing if no serial port is opened (added for Arduinos based on ATMEGA32U4)

  SPI.begin();        // Init SPI bus
  pinMode(blueLed, OUTPUT); //LED
  pinMode(yellowLed, OUTPUT);
  pinMode(redLed, OUTPUT);
//=========================== RFID SETUP ==============================

  for (uint8_t reader = 0; reader < NR_OF_READERS; reader++) {
    mfrc522[reader].PCD_Init(ssPins[reader], RST_PIN); // Init each MFRC522 card
    Serial.print(F("Reader "));
    Serial.print(reader);
    Serial.print(F(": "));
    mfrc522[reader].PCD_DumpVersionToSerial();
    }
  Serial.println("Serial Monitor Started....");
  Serial.println("RFID System Ready....");
  
//  Status Ready LED
  
  for(int i=0; i<=3; i++){
    digitalWrite(yellowLed, LOW);
    digitalWrite(blueLed, HIGH);
    delay(250);
    digitalWrite(yellowLed, HIGH);
    digitalWrite(blueLed, LOW);
    delay(250);
//    digitalWrite(yellowLed, LOW);
}
  
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
  for(int i=0; i<=2; i++){
    digitalWrite(yellowLed, HIGH);
    digitalWrite(blueLed, HIGH);
    delay(shortdelay);
    digitalWrite(yellowLed, LOW);
    digitalWrite(blueLed, LOW);
    delay(shortdelay);
    digitalWrite(yellowLed, HIGH);
  }
  Serial.println("Ethernet Initalized.....");
}

/**
 * Main loop.
*/

void loop() {
  
  if (mfrc522[2].PICC_IsNewCardPresent() && mfrc522[2].PICC_ReadCardSerial()) {
      String Station_info;
      String Station_name="HEBBAL_POST";
      String Station_ZIPCODE="560 032";
      Station_info = (String(Station_name)+"-ID-"+String(2)+"-ZIP-"+String(Station_ZIPCODE));
      Serial.print(Station_info);
      // Show some details of the PICC (that is: the tag/card)
      Serial.print(F(": Card UID:"));
      digitalWrite(redLed, HIGH);
//      digitalWrite(yellowLed, HIGH);
      delay(vshortdelay);
      digitalWrite(redLed, LOW);
//      digitalWrite(blueLed, LOW);
      delay(vshortdelay);
      dump_byte_array(mfrc522[2].uid.uidByte, mfrc522[2].uid.size);
      Serial.println();
      
      // Halt PICC
      mfrc522[2].PICC_HaltA();

      // Stop encryption on PCD
      mfrc522[2].PCD_StopCrypto1();
  }
  else {
    for (uint8_t reader = 0; reader <=1; reader++) {
    // Look for new cards
    if (mfrc522[reader].PICC_IsNewCardPresent() && mfrc522[reader].PICC_ReadCardSerial()) {
      String Station_info;
      String Station_name="HEBBAL_POST";
      String Station_ZIPCODE="560 032";
      Station_info = (String(Station_name)+"-ID-"+String(reader)+"-ZIP-"+String(Station_ZIPCODE));
      Serial.print(Station_info);
      // Show some details of the PICC (that is: the tag/card)
      Serial.print(F(": Card UID:"));
      digitalWrite(blueLed, HIGH);
      digitalWrite(yellowLed, LOW);
      delay(vshortdelay);
      digitalWrite(yellowLed, HIGH);
      digitalWrite(blueLed, LOW);
      delay(vshortdelay);
      dump_byte_array(mfrc522[reader].uid.uidByte, mfrc522[reader].uid.size);
      Serial.println();
      
      // Halt PICC
      mfrc522[reader].PICC_HaltA();

      // Stop encryption on PCD
      mfrc522[reader].PCD_StopCrypto1();
    }
}
}
}
/**
 * Helper routine to dump a byte array as hex values to Serial.
 */
void dump_byte_array(byte *buffer, byte bufferSize) {
  for (byte i = 0; i < bufferSize; i++) {
    Serial.print(buffer[i] < 0x10 ? " 0" : " ");
    Serial.print(buffer[i], HEX);
  }
}
