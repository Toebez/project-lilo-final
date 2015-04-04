int E1 = 6;
int M1 = 7;
int E2 = 5;
int M2 = 4;
int SPEED = 175;

void setup (void)
{
  Serial.begin (9600);

  pinMode(MISO, OUTPUT);

  pinMode(M1, OUTPUT);
  pinMode(M2, OUTPUT);
  stop();
}


void loop (void)
{
  if (Serial.available() > 0) {
    char input = Serial.read();

    executeCommand(input);
  }
}

void executeCommand(char command) {
  switch (command) {
    case 's':
      Serial.print('s');
      stop();
      break;
    case 'j':
      Serial.print('b');
      backward();
      break;
    case 'k':
      Serial.print('f');
      forward();
      break;
    case 'h':
      Serial.print('l');
      left();
      break;
    case 'l':
      Serial.print('r');
      right();
      break;
    default:
      Serial.print('?');
  }
}

void stop() {
  digitalWrite(M1, LOW);
  analogWrite(E1, 0);
  digitalWrite(M2, LOW);
  analogWrite(E2, 0);
}

void forward() {
  digitalWrite(M1, LOW);
  analogWrite(E1, SPEED);
  digitalWrite(M2, HIGH);
  analogWrite(E2, SPEED);
}

void backward() {
  digitalWrite(M1, HIGH);
  analogWrite(E1, SPEED);
  digitalWrite(M2, LOW);
  analogWrite(E2, SPEED);
}

void right() {
  digitalWrite(M1, LOW);
  analogWrite(E1, SPEED);
  digitalWrite(M2, LOW);
  analogWrite(E2, SPEED);
}

void left() {
  digitalWrite(M1, HIGH);
  analogWrite(E1, SPEED);
  digitalWrite(M2, HIGH);
  analogWrite(E2, SPEED);
}
