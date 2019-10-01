

interface ReservationREQ {
  getDowBooking(): string;
  getCodeBooking(): string;
  
}

class Reservation implements ReservationREQ {
  
  // Random 8digit code generator
  Code() {
    let text: string = "";
    let charset: string = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 8; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));
      return text.toUpperCase();
    }
    
    // Random Day-Of-Week generator

  DOW() {
  let DOW: string[] = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
  let text: string = DOW[Math.floor(Math.floor(Math.random() * DOW.length))];
  return text;
  }
  
  getCodeBooking(): string {
    return this.Code();
  };
  
  getDowBooking(): string {
    return this.DOW();
  };

  printBooking(){
    return `Booking # ${this.getCodeBooking()} for ${this.getDowBooking()}`
  }
}

let reservationCount: number = 20;
let totalReservation: string[] = [];

for(let i = 0; i < reservationCount; i++){
  let res = new Reservation;
  totalReservation.push(res.printBooking())
}


console.log(totalReservation.join('\r\n'))

