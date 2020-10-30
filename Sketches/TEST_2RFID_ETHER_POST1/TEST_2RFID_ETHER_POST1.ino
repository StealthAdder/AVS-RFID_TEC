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

#define RST_PIN         2          // Configurable, see typical pin layout above
#define SS_1_PIN        9         // Configurable, take a unused pin, only HIGH/LOW required, must be different to SS 2
#define SS_2_PIN        8          // Configurable, take a unused pin, only HIGH/LOW required, must be different to SS 1

#define NR_OF_READERS   2

byte ssPins[] = {SS_1_PIN, SS_2_PIN};
int blueLed = 6;
int yellowLed = 5;
int redLed =4;
int shortdelay = 150;
int vshortdelay = 50;

MFRC522 mfrc522[NR_OF_READERS];   // Create MFRC522 instance.

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

String data; //variable to be posted.
EthernetClient client;

// ================================== SETUP ======================================

/**
 * Initialize.
 */
void setup() {
  
  Serial.begin(9600); // Initialize serial communications with the PC
  while (!Serial);    // Do nothing if no serial port is opened (added for Arduinos based on ATMEGA32U4)

  SPI.begin();        // Init SPI bus

//  Activating the pins for output.
  pinMode(blueLed, OUTPUT); //LED
  pinMode(yellowLed, OUTPUT);//LED
  pinMode(redLed, OUTPUT);//LED
  
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

//Ethernet shield validation process.
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
  delay(500);
  Serial.println("Ethernet Initalized..");
  Serial.println("All Systems go...");
}

void loop() {

  for (uint8_t reader = 0; reader < NR_OF_READERS; reader++) {
    // Look for new cards
    
    if (mfrc522[reader].PICC_IsNewCardPresent() && mfrc522[reader].PICC_ReadCardSerial()) {
      String Station_info;
      String Station_name="HEBBAL_POST";
      String Station_ZIPCODE="560 032";
      String Reader_ID = "ID-"+String(reader);
      Station_info = (String(Station_name)+String(Reader_ID)+" ZIP-"+String(Station_ZIPCODE));
      Serial.print(Station_info); //Prints station info

      Serial.print(F(": Card UID:"));
      digitalWrite(blueLed, HIGH);
      digitalWrite(yellowLed, LOW);
      delay(vshortdelay);
      digitalWrite(yellowLed, HIGH);
      digitalWrite(blueLed, LOW);
      delay(vshortdelay);

      String content= "";

      for (byte i = 0; i < mfrc522[reader].uid.size; i++) 
      {
//     Serial.print(buffer[i] < 0x10 ? " 0" : " ");
//     Serial.print(buffer[i], HEX);
       content.concat(String(mfrc522[reader].uid.uidByte[i] < 0x10 ? " 0" : " "));
       content.concat(String(mfrc522[reader].uid.uidByte[i], HEX));
      }
//      dump_byte_array(mfrc522[reader].uid.uidByte, mfrc522[reader].uid.size);
      content.toUpperCase();
      Serial.println(content); //card no is prineted and store on variable content.
//      data = ("cid="+String(content)+"&loc_name="+String(Station_name)+"&loc_zip="+String(Station_ZIPCODE)+"&rid="+String(Reader_ID));
      
      data = "cid="+content+"&loc_name="+Station_name+"&loc_zip="+Station_ZIPCODE+"&rid="+Reader_ID;
      //data is the format variable used during trasmission/posting in php.
      
      content = ""; //clear the content value. 

      Serial.println("Initalizing Trasmission.....");
      digitalWrite(redLed, LOW);
      delay(50);
      digitalWrite(redLed, HIGH);

//  Connection to server and transmission of data variable in format.
//the whole if statement below is doing the action of sending out data.

//client.print is the actual function doing transmission, we use serial.print to show the output on serial monitor for debugging.
  if(client.connect(server, 80)) {
    client.println("POST /AVS-RFID_TEC/test/v_data.php HTTP/1.1");
    Serial.println("POST /AVS-RFID_TEC/test/v_data.php HTTP/1.1"); //TYPE = POST, directory = /test/data.php and version HTTP/1.1.
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
    Serial.println(data);
   }
   digitalWrite(redLed, LOW);
   delay(50);
//   closing the conn with server after transmission.
    if(client.connected()){
      client.stop();
      Serial.println("Disconnected");
    }    
   Serial.println("Delay in progress");
   
//Could give a delay if necessary.
      
      // Halt PICC from readering same card multiple times.
      mfrc522[reader].PICC_HaltA();

      // Stop encryption on PCD
      mfrc522[reader].PCD_StopCrypto1();
    }
  } 
}
